import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { profile } from '../data/content'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
    } catch {
      // storage unavailable (private mode); theme just won't persist
    }
  }, [dark])
  return [dark, () => setDark((d) => !d)] as const
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [dark, toggleTheme] = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/80">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-semibold tracking-tight text-zinc-900 dark:text-white">
          {profile.name.split(' ').map((w) => w[0]).join('')}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-6 text-sm md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <button
            onClick={toggleTheme}
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="rounded-md p-2 text-zinc-600 transition hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="rounded-md p-2 text-zinc-600 hover:bg-zinc-100 md:hidden dark:text-zinc-400 dark:hover:bg-zinc-800"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-zinc-200 px-4 py-3 md:hidden dark:border-zinc-800">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-2 text-zinc-700 dark:text-zinc-300">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
