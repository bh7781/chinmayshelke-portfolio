import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { Resend } from 'resend'

const allowedPurposes = new Set([
  'Job Opportunity',
  'Resume Request',
  'Collaboration',
  'General Inquiry',
])

let localEnvLoaded = false

function stripQuotes(value) {
  const trimmed = value.trim()
  const quote = trimmed[0]

  if ((quote === '"' || quote === "'") && trimmed.endsWith(quote)) {
    return trimmed.slice(1, -1)
  }

  return trimmed
}

function loadLocalEnvFallback() {
  if (localEnvLoaded || process.env.VERCEL_ENV === 'production') return
  localEnvLoaded = true

  const envPath = join(process.cwd(), '.env.local')
  if (!existsSync(envPath)) return

  const lines = readFileSync(envPath, 'utf8').split(/\r?\n/)

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue

    const match = trimmed.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/)
    if (!match) continue

    const [, key, value] = match
    if (process.env[key] === undefined) {
      process.env[key] = stripQuotes(value)
    }
  }
}

function clean(value, maxLength = 1000) {
  return String(value || '').trim().slice(0, maxLength)
}

function getBody(req) {
  if (!req.body) return {}
  if (typeof req.body === 'string') return JSON.parse(req.body)
  return req.body
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  let body

  try {
    body = getBody(req)
  } catch {
    return res.status(400).json({ error: 'Invalid JSON body.' })
  }

  if (clean(body.website)) {
    return res.status(200).json({ ok: true })
  }

  const name = clean(body.name, 120)
  const email = clean(body.email, 160)
  const company = clean(body.company, 160)
  const linkedin = clean(body.linkedin, 300)
  const purpose = clean(body.purpose, 80)
  const message = clean(body.message, 4000)

  if (!name || !email || !purpose || !message) {
    return res.status(400).json({ error: 'Please complete all required fields.' })
  }

  if (!isEmail(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' })
  }

  if (!allowedPurposes.has(purpose)) {
    return res.status(400).json({ error: 'Please select a valid purpose.' })
  }

  loadLocalEnvFallback()

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env

  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM_EMAIL) {
    const missing = [
      ['RESEND_API_KEY', RESEND_API_KEY],
      ['CONTACT_TO_EMAIL', CONTACT_TO_EMAIL],
      ['CONTACT_FROM_EMAIL', CONTACT_FROM_EMAIL],
    ]
      .filter(([, value]) => !value)
      .map(([key]) => key)
      .join(', ')

    console.error(`Missing contact form environment configuration: ${missing}`)
    return res.status(500).json({ error: 'Unable to send message right now.' })
  }

  const resend = new Resend(RESEND_API_KEY)
  const subject = `Portfolio Contact: ${purpose} - ${name}`
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company / Organization: ${company || 'Not provided'}`,
    `LinkedIn Profile URL: ${linkedin || 'Not provided'}`,
    `Purpose: ${purpose}`,
    '',
    'Message:',
    message,
    '',
    'Submitted from chinmayshelke.com',
  ].join('\n')

  try {
    await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject,
      text,
    })

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Contact email send failed:', error?.message || error)
    return res.status(500).json({ error: 'Unable to send message right now.' })
  }
}
