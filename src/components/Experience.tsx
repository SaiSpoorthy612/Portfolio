import { experience } from '../data/content'
import Section from './Section'
import Logo from './Logo'

export default function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-12">
        {experience.map((job) => (
          <li key={`${job.company}-${job.role}`} className="flex gap-5">
            <Logo src={job.logo} name={job.company} />
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{job.role}</h3>
                <span className="text-sm text-zinc-500">{job.period}</span>
              </div>
              <p className="text-zinc-500">
                {job.company} · {job.location}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-accent">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
