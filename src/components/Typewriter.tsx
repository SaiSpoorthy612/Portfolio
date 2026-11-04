import { useEffect, useState } from 'react'

const TYPE_MS = 70
const DELETE_MS = 35
const HOLD_MS = 1600

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Types each word, holds it, deletes it, then moves to the next one
export default function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState(() => (prefersReducedMotion() ? words[0] : ''))
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const word = words[index % words.length]

    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), HOLD_MS)
      return () => clearTimeout(t)
    }
    if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => i + 1)
      return
    }
    const t = setTimeout(
      () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
      deleting ? DELETE_MS : TYPE_MS,
    )
    return () => clearTimeout(t)
  }, [text, deleting, index, words])

  return (
    <span className="text-zinc-900 dark:text-white">
      {text}
      <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[0.15em] animate-pulse bg-accent" />
    </span>
  )
}
