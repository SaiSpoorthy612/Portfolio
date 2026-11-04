import { experience } from '../data/content'
import Section from './Section'
import Logo from './Logo'

export default function ExperienceSection() {
  return (
    <Section id="experience" index="02" title="Experience">
      <ol className="relative space-y-12 border-l border-zinc-200 dark:border-zinc-800">
        {experience.map((job, i) => (
          <li key={`${job.company}-${job.role}`} className="relative pl-8 sm:pl-10">
            <span
              aria-hidden="true"
              className={`absolute top-1.5 -left-[6.5px] size-3 rounded-full ring-4 ring-white dark:ring-zinc-950 ${
                i === 0 ? 'bg-accent' : 'bg-zinc-300 dark:bg-zinc-700'
              }`}
            />
            <div className="flex flex-wrap items-start gap-4">
              <Logo src={job.logo} name={job.company} />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{job.role}</h3>
                  <span className="font-mono text-xs text-zinc-500 sm:text-sm">{job.period}</span>
                </div>
                <p className="text-zinc-500">
                  {job.company} · {job.location}
                </p>
              </div>
            </div>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed marker:text-accent">
              {job.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
