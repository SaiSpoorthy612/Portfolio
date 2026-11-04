import { profile, stats } from '../data/content'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-12 md:grid-cols-[1fr_240px]">
        <div className="space-y-4 text-lg leading-relaxed">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <dl className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900/50">
              <dt className="text-sm text-zinc-500">{s.label}</dt>
              <dd className="mt-1 text-3xl font-semibold text-zinc-900 dark:text-white">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
