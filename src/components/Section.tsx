import type { ReactNode } from 'react'
import { useInView } from '../useInView'

type Props = {
  id: string
  index: string
  title: string
  children: ReactNode
}

export default function Section({ id, index, title, children }: Props) {
  const [ref, inView] = useInView<HTMLDivElement>()

  return (
    <section id={id} className="py-20 sm:py-28">
      <div ref={ref} data-visible={inView} className="reveal">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-sm text-accent">{index}</span>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">{title}</h2>
          <span className="h-px flex-1 bg-gradient-to-r from-zinc-200 to-transparent dark:from-zinc-800" />
        </div>
        {children}
      </div>
    </section>
  )
}
