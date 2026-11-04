import { ArrowRight, Download, MapPin } from 'lucide-react'
import { profile } from '../data/content'
import { asset, image } from '../asset'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

export default function Hero() {
  return (
    <section id="top" className="flex min-h-[calc(100svh-4rem)] items-center py-16">
      <div className="grid w-full items-center gap-12 md:grid-cols-[1fr_auto]">
        <div>
          <p className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white/60 px-3 py-1 text-xs text-zinc-600 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400">
            <MapPin size={12} className="text-accent" /> {profile.location}
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-white">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-accent to-fuchsia-400 bg-clip-text text-transparent">
              {profile.name.split(' ').slice(0, 2).join(' ')}
            </span>
          </h1>
          <p className="mt-4 text-xl font-medium text-zinc-700 sm:text-2xl dark:text-zinc-300">{profile.headline}</p>
          <p className="mt-6 max-w-xl leading-relaxed text-zinc-600 dark:text-zinc-400">{profile.tagline}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent-strong px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent/20 transition hover:bg-accent"
            >
              Let's connect <ArrowRight size={16} />
            </a>
            <a
              href={asset(profile.resume)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white/60 px-5 py-2.5 text-sm font-medium text-zinc-800 backdrop-blur transition hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-200 dark:hover:border-zinc-500"
            >
              Resume <Download size={16} />
            </a>
            <div className="ml-1 flex gap-1">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 text-zinc-500 transition hover:text-zinc-900 dark:hover:text-white">
                <LinkedinIcon className="size-5" />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 text-zinc-500 transition hover:text-zinc-900 dark:hover:text-white">
                <GithubIcon className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative order-first mx-auto md:order-none md:mx-0">
          <div aria-hidden="true" className="absolute -inset-1 rounded-full bg-gradient-to-tr from-accent to-fuchsia-400 opacity-70 blur-md" />
          <img
            src={image(profile.photo)}
            alt={profile.name}
            className="relative size-36 rounded-full border-4 border-white object-cover sm:size-56 md:size-64 dark:border-zinc-950"
          />
        </div>
      </div>
    </section>
  )
}
