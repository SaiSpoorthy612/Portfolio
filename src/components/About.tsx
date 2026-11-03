import { profile } from '../data/content'
import { image } from '../asset'
import Section from './Section'

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid items-start gap-10 md:grid-cols-[220px_1fr]">
        <img
          src={image(profile.photo)}
          alt={profile.name}
          className="aspect-square w-48 rounded-2xl object-cover ring-1 ring-zinc-200 md:w-full dark:ring-zinc-800"
        />
        <div className="space-y-4 text-lg leading-relaxed">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </Section>
  )
}
