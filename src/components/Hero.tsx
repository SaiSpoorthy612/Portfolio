import { ArrowRight, Download, MapPin } from 'lucide-react'
import { profile } from '../data/content'
import { asset } from '../asset'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

export default function Hero() {
  return (
    <section id="top" className="flex min-h-[calc(100svh-4rem)] flex-col justify-center py-20">
      <p className="mb-4 text-sm font-medium text-accent">Hello, I'm</p>
      <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-white">{profile.name}</h1>
      <p className="mt-4 text-xl text-zinc-600 sm:text-2xl dark:text-zinc-400">{profile.headline}</p>
      <p className="mt-6 max-w-2xl text-zinc-600 dark:text-zinc-400">{profile.tagline}</p>
      <p className="mt-4 flex items-center gap-1.5 text-sm text-zinc-500">
        <MapPin size={14} /> {profile.location}
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg bg-accent-strong px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent"
        >
          Let's connect <ArrowRight size={16} />
        </a>
        <a
          href={asset(profile.resume)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-800 transition hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500"
        >
          Resume <Download size={16} />
        </a>
        <div className="ml-2 flex gap-1">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 text-zinc-500 transition hover:text-zinc-900 dark:hover:text-white">
            <LinkedinIcon className="size-5" />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 text-zinc-500 transition hover:text-zinc-900 dark:hover:text-white">
            <GithubIcon className="size-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
