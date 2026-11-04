import { useState, type FormEvent } from 'react'
import { Mail, Phone } from 'lucide-react'
import { contactFormEndpoint, profile } from '../data/content'
import Section from './Section'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const field =
  'w-full rounded-lg border border-zinc-300 bg-transparent px-4 py-2.5 outline-none transition focus:border-accent dark:border-zinc-700'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch(contactFormEndpoint, { method: 'POST', body: new FormData(form) })
      if (!res.ok) throw new Error(res.statusText)
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contact" index="06" title="Contact">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">Let's work together.</h3>
          <p className="mt-3">Have a role, project or idea in mind? My inbox is open.</p>
          <div className="mt-6 space-y-3">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-accent">
              <Mail size={18} /> {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`} className="flex items-center gap-3 hover:text-accent">
              <Phone size={18} /> {profile.phone}
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-3">
          <input name="Name" placeholder="Your name" required className={field} />
          <input name="Email" type="email" placeholder="Your email" required className={field} />
          <textarea name="Message" rows={5} placeholder="Your message" required className={field} />
          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-lg bg-accent-strong px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            <p role="status" className="text-sm">
              {status === 'sent' && <span className="text-emerald-500">Thanks — I'll get back to you soon.</span>}
              {status === 'error' && <span className="text-red-500">Something went wrong. Please email me directly.</span>}
            </p>
          </div>
        </form>
      </div>
    </Section>
  )
}
