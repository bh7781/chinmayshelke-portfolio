import { useState } from 'react'

const INITIAL = { name: '', email: '', company: '', reason: '', linkedin: '' }

const inputClass =
  'w-full bg-slate-800 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors duration-150'

const labelClass =
  'block text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-1.5'

export default function ResumeRequestModal({ open, onClose }) {
  const [form, setForm] = useState(INITIAL)

  if (!open) return null

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Resume Request — Chinmay Shelke')
    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Company / Organisation: ${form.company}\n` +
      `Reason: ${form.reason}\n` +
      `LinkedIn: ${form.linkedin || 'Not provided'}`
    )
    window.location.href = `mailto:chinmay.s077@gmail.com?subject=${subject}&body=${body}`
    setForm(INITIAL)
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7 sm:p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <h2 className="text-base font-semibold text-white">Request Resume</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-slate-500 hover:text-white transition-colors ml-4 mt-0.5 shrink-0"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="text-xs text-slate-400 mb-6 leading-relaxed">
          I share my resume directly with genuine recruiters and professional contacts.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={labelClass} htmlFor="rm-name">Name *</label>
            <input
              id="rm-name" name="name" type="text" required
              value={form.name} onChange={handleChange}
              placeholder="Your full name"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="rm-email">Email *</label>
            <input
              id="rm-email" name="email" type="email" required
              value={form.email} onChange={handleChange}
              placeholder="you@company.com"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="rm-company">Company / Organisation *</label>
            <input
              id="rm-company" name="company" type="text" required
              value={form.company} onChange={handleChange}
              placeholder="Your company or organisation"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="rm-reason">Reason for Requesting *</label>
            <textarea
              id="rm-reason" name="reason" required rows={3}
              value={form.reason} onChange={handleChange}
              placeholder="e.g. Reviewing candidates for a senior analytics role…"
              className={`${inputClass} resize-none`}
            />
          </div>

          <div>
            <label className={labelClass} htmlFor="rm-linkedin">
              LinkedIn Profile{' '}
              <span className="text-slate-600 normal-case tracking-normal font-normal">(optional)</span>
            </label>
            <input
              id="rm-linkedin" name="linkedin" type="url"
              value={form.linkedin} onChange={handleChange}
              placeholder="https://linkedin.com/in/…"
              className={inputClass}
            />
          </div>

          <div className="pt-1">
            <button
              type="submit"
              className="w-full bg-sky-600 hover:bg-sky-500 text-white text-sm font-semibold rounded-lg px-4 py-2.5 transition-colors duration-150"
            >
              Send Request via Email
            </button>
            <p className="text-center text-[11px] text-slate-500 mt-3">
              This will open your email client to send the request.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
