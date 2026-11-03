import { Award } from 'lucide-react'
import { certifications, education } from '../data/content'
import Section from './Section'
import Logo from './Logo'

export default function EducationSection() {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((e) => (
          <div key={e.school} className="flex gap-4 rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
            <Logo src={e.logo} name={e.school} />
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white">{e.school}</h3>
              <p className="mt-1">{e.degree}</p>
              <p className="mt-2 text-sm text-zinc-500">
                {e.period}
                {e.grade && ` · ${e.grade}`}
              </p>
            </div>
          </div>
        ))}
      </div>

      {certifications.length > 0 && (
        <>
          <h3 className="mt-12 mb-4 font-semibold text-zinc-900 dark:text-white">Certifications</h3>
          <ul className="space-y-2">
            {certifications.map((c) => (
              <li key={c.name} className="flex items-center gap-3">
                <Award size={18} className="text-accent" />
                <span>
                  {c.name} <span className="text-zinc-500">· {c.issuer}</span>
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </Section>
  )
}
