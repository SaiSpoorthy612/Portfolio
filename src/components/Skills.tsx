import { Brain, Cloud, Code2, Database, FlaskConical, Server, type LucideIcon } from 'lucide-react'
import { skills } from '../data/content'
import Section from './Section'

// Icons by position in the skills list; groups beyond these fall back to Code2
const icons: LucideIcon[] = [Brain, FlaskConical, Code2, Server, Database, Cloud]

export default function Skills() {
  return (
    <Section id="skills" index="04" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => {
          const Icon = icons[i] ?? Code2
          return (
            <div
              key={group.name}
              className="rounded-xl border border-zinc-200 bg-zinc-50 p-5 transition hover:border-accent/40 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-accent/40"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-lg bg-accent/10 text-accent">
                  <Icon size={18} />
                </span>
                <h3 className="font-semibold text-zinc-900 dark:text-white">{group.name}</h3>
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-md border border-zinc-200 bg-white px-2 py-0.5 text-sm dark:border-zinc-700/60 dark:bg-zinc-800/60"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
