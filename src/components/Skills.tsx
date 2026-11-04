import { Brain, Cloud, Code2, Database, FlaskConical, Server, type LucideIcon } from 'lucide-react'
import { coreStack, skills } from '../data/content'
import Section from './Section'

// Icons by group name; any new group falls back to Code2
const icons: Record<string, LucideIcon> = {
  'AI & LLMs': Brain,
  'ML & Evaluation': FlaskConical,
  'Languages & Frontend': Code2,
  Backend: Server,
  Data: Database,
  'Cloud & DevOps': Cloud,
}

export default function Skills() {
  return (
    <Section id="skills" index="04" title="Skills">
      <div className="mb-10">
        <h3 className="mb-4 text-sm font-medium text-zinc-500">Core stack</h3>
        <ul className="flex flex-wrap gap-2">
          {coreStack.map((s) => (
            <li
              key={s}
              className="rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent-strong dark:text-accent"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>

      <div className="divide-y divide-zinc-200 rounded-xl border border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
        {skills.map((group) => {
          const Icon = icons[group.name] ?? Code2
          return (
            <div key={group.name} className="grid gap-3 p-5 sm:grid-cols-[200px_1fr] sm:items-center">
              <div className="flex items-center gap-3">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                  <Icon size={16} />
                </span>
                <h3 className="font-semibold text-zinc-900 dark:text-white">{group.name}</h3>
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-md bg-zinc-100 px-2.5 py-1 text-sm text-zinc-700 dark:bg-zinc-800/70 dark:text-zinc-300"
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
