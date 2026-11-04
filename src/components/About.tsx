import { Brain, Cloud, FlaskConical, type LucideIcon } from 'lucide-react'
import { focusAreas, profile } from '../data/content'
import Section from './Section'

// Icons in the same order as focusAreas
const icons: LucideIcon[] = [Brain, FlaskConical, Cloud]

export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <p className="max-w-3xl text-lg leading-relaxed">{profile.about}</p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {focusAreas.map((area, i) => {
          const Icon = icons[i] ?? Brain
          return (
            <div
              key={area.title}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-6 transition hover:border-accent/40 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-accent/40"
            >
              <span className="grid size-10 place-items-center rounded-lg bg-accent/10 text-accent">
                <Icon size={20} />
              </span>
              <h3 className="mt-4 font-semibold text-zinc-900 dark:text-white">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{area.description}</p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
