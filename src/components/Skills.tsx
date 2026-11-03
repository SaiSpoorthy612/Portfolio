import { skills } from '../data/content'
import Section from './Section'

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-8 md:grid-cols-3">
        {skills.map((group) => (
          <div key={group.name}>
            <h3 className="mb-3 font-semibold text-zinc-900 dark:text-white">{group.name}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((s) => (
                <li
                  key={s}
                  className="rounded-md border border-zinc-200 px-2.5 py-1 text-sm dark:border-zinc-800 dark:bg-zinc-900"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
