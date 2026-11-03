import type { ReactNode } from 'react'

type Props = {
  id: string
  title: string
  children: ReactNode
}

export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} className="border-t border-zinc-200 py-20 dark:border-zinc-800/80">
      <h2 className="mb-10 text-sm font-semibold uppercase tracking-[0.2em] text-accent">{title}</h2>
      {children}
    </section>
  )
}
