import { Mail } from 'lucide-react'
import { profile } from '../data/content'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

export default function Footer() {
  const link = 'p-2 text-zinc-500 transition hover:text-zinc-900 dark:hover:text-white'
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex gap-1">
          <a href={`mailto:${profile.email}`} aria-label="Email" className={link}>
            <Mail size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={link}>
            <LinkedinIcon className="size-[18px]" />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={link}>
            <GithubIcon className="size-[18px]" />
          </a>
        </div>
      </div>
    </footer>
  )
}
