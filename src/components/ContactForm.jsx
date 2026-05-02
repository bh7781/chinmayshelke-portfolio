import { useEffect, useRef, useState } from 'react'

const purposeOptions = [
  'Job Opportunity',
  'Resume Request',
  'Collaboration',
  'General Inquiry',
]

const initialForm = {
  name: '',
  email: '',
  company: '',
  linkedin: '',
  purpose: '',
  message: '',
  website: '',
}

const inputClass =
  'w-full rounded-lg border border-zinc-700 bg-black/40 px-3.5 py-2.5 text-base text-white placeholder-zinc-500 outline-none transition-colors duration-150 focus:border-teal-400'

const labelClass =
  'block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-1.5'

function validateForm({ name, email, purpose, message }) {
  if (!name.trim() || !email.trim() || !purpose.trim() || !message.trim()) {
    return 'Please complete all required fields.'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return 'Please enter a valid email address.'
  }

  return ''
}

export default function ContactForm({ focusKey, initialPurpose = '' }) {
  const [form, setForm] = useState(() => ({
    ...initialForm,
    purpose: initialPurpose,
  }))
  const [status, setStatus] = useState({ type: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const nameRef = useRef(null)

  useEffect(() => {
    if (!focusKey) return
    nameRef.current?.focus({ preventScroll: true })
  }, [focusKey])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ type: '', message: '' })

    const validationError = validateForm(form)
    if (validationError) {
      setStatus({ type: 'error', message: validationError })
      return
    }

    setSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data.error || 'Submission failed. Please try again.')
      }

      setForm(initialForm)
      setStatus({
        type: 'success',
        message: 'Thank you. I will review your request and get back to you.',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="rounded-xl border border-zinc-800 bg-zinc-950/75 p-5 shadow-xl shadow-black/20 sm:p-6"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="contact-name">
            Name *
          </label>
          <input
            ref={nameRef}
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="contact-email">
            Email *
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="contact-company">
            Company / Organization
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={handleChange}
            placeholder="Company or organization"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="contact-linkedin">
            LinkedIn Profile URL
          </label>
          <input
            id="contact-linkedin"
            name="linkedin"
            type="url"
            value={form.linkedin}
            onChange={handleChange}
            placeholder="https://www.linkedin.com/in/..."
            className={inputClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="contact-purpose">
            Purpose *
          </label>
          <select
            id="contact-purpose"
            name="purpose"
            required
            value={form.purpose}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select a purpose</option>
            {purposeOptions.map((purpose) => (
              <option key={purpose} value={purpose}>
                {purpose}
              </option>
            ))}
          </select>
        </div>

        <div className="hidden" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={handleChange}
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="contact-message">
            Message *
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="Share role details, context, or the reason for your request."
            className={`${inputClass} resize-y`}
          />
        </div>
      </div>

      {status.message && (
        <p
          className={`mt-5 rounded-lg border px-4 py-3 text-sm ${
            status.type === 'success'
              ? 'border-emerald-800 bg-emerald-950/40 text-emerald-300'
              : 'border-rose-800 bg-rose-950/40 text-rose-300'
          }`}
          role="status"
        >
          {status.message}
        </p>
      )}

      <div className="mt-6">
        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-lg bg-teal-500 px-5 py-2.5 text-base font-semibold text-zinc-950 transition-colors duration-150 hover:bg-teal-300 disabled:cursor-not-allowed disabled:bg-zinc-700 disabled:text-zinc-400 sm:w-auto"
        >
          {submitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  )
}
