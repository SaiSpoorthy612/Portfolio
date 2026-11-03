import { ExternalLink } from 'lucide-react'
import { projects } from '../data/content'
import { image } from '../asset'
import Section from './Section'
import { GithubIcon } from './BrandIcons'

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group overflow-hidden rounded-xl border border-zinc-200 transition hover:-translate-y-0.5 hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
          >
            {p.image && (
              <div className="aspect-[16/9] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <img
                  src={image(p.image)}
                  alt=""
                  className="size-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            )}
            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-zinc-900 dark:text-white">{p.title}</h3>
                <div className="flex shrink-0 gap-2 text-zinc-500">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" aria-label="Source code" className="hover:text-zinc-900 dark:hover:text-white">
                      <GithubIcon className="size-4" />
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer" aria-label="Live demo" className="hover:text-zinc-900 dark:hover:text-white">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              {p.description && <p className="mt-2 text-sm">{p.description}</p>}
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <li key={t} className="rounded bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent-strong dark:text-accent">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
