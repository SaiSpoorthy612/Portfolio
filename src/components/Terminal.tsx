import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { certifications, coreStack, education, experience, profile, projects, skills } from '../data/content'
import { asset } from '../asset'

type Line = { kind: 'cmd' | 'out' | 'err'; content: ReactNode }

const link = 'text-accent underline-offset-2 hover:underline'

// Commands shown as clickable chips under the terminal
const suggestions = ['whoami', 'skills', 'experience', 'projects', 'contact', 'sudo hire-me']

const commands: Record<string, { help: string; run: () => ReactNode }> = {
  help: {
    help: 'List available commands',
    run: () => (
      <div className="grid grid-cols-[8rem_1fr] gap-x-4">
        {Object.entries(commands).map(([name, c]) => (
          <div key={name} className="contents">
            <span className="text-accent">{name}</span>
            <span>{c.help}</span>
          </div>
        ))}
      </div>
    ),
  },
  whoami: {
    help: 'Who I am',
    run: () => (
      <>
        <p className="font-semibold text-white">{profile.name}</p>
        <p>{profile.headline}</p>
        <p className="text-zinc-500">📍 {profile.location}</p>
      </>
    ),
  },
  about: {
    help: 'A little about me',
    run: () => <p>{profile.about}</p>,
  },
  skills: {
    help: 'What I work with',
    run: () => (
      <>
        <p>
          <span className="text-emerald-400">core:</span> {coreStack.join(' · ')}
        </p>
        {skills.map((g) => (
          <p key={g.name}>
            <span className="text-sky-400">{g.name.toLowerCase()}:</span> {g.items.join(' · ')}
          </p>
        ))}
      </>
    ),
  },
  experience: {
    help: 'Where I have worked',
    run: () =>
      experience.map((j) => (
        <p key={j.company}>
          <span className="text-white">{j.role}</span> @ <span className="text-accent">{j.company}</span>{' '}
          <span className="text-zinc-500">({j.period})</span>
        </p>
      )),
  },
  education: {
    help: 'Degrees and certifications',
    run: () => (
      <>
        {education.map((e) => (
          <p key={e.school}>
            <span className="text-white">{e.degree}</span> — {e.school}{' '}
            <span className="text-zinc-500">({e.period})</span>
          </p>
        ))}
        {certifications.map((c) => (
          <p key={c.name}>
            🏅 {c.issuer}: {c.name}
          </p>
        ))}
      </>
    ),
  },
  projects: {
    help: 'Things I have built',
    run: () => (
      <>
        {projects.map((p) => (
          <p key={p.title}>
            <span className="text-accent">▸</span> {p.title} <span className="text-zinc-500">[{p.stack.slice(0, 3).join(', ')}]</span>
          </p>
        ))}
        <p className="text-zinc-500">
          More in the{' '}
          <a href="#projects" className={link}>
            projects section
          </a>
          .
        </p>
      </>
    ),
  },
  contact: {
    help: 'How to reach me',
    run: () => (
      <>
        <p>
          email:{' '}
          <a href={`mailto:${profile.email}`} className={link}>
            {profile.email}
          </a>
        </p>
        <p>
          linkedin:{' '}
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={link}>
            {profile.linkedin.replace('https://www.', '')}
          </a>
        </p>
        <p>
          github:{' '}
          <a href={profile.github} target="_blank" rel="noreferrer" className={link}>
            {profile.github.replace('https://', '')}
          </a>
        </p>
      </>
    ),
  },
  resume: {
    help: 'Open my resume',
    run: () => {
      window.open(asset(profile.resume), '_blank', 'noopener')
      return <p>Opening resume in a new tab…</p>
    },
  },
  'sudo hire-me': {
    help: 'Try it 😉',
    run: () => {
      setTimeout(() => document.querySelector('#contact')?.scrollIntoView(), 1200)
      return (
        <>
          <p className="text-emerald-400">[sudo] permission granted ✨</p>
          <p>Great choice! Taking you to the contact form…</p>
        </>
      )
    },
  },
  clear: {
    help: 'Clear the terminal',
    run: () => null,
  },
}

const welcome: Line[] = [
  { kind: 'out', content: <p>Welcome! 👋 Type <span className="text-accent">help</span> or tap a command below.</p> },
]

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>(welcome)
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyPos, setHistoryPos] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)

  // Keep the newest output in view, scrolling only inside the terminal
  useEffect(() => {
    const body = bodyRef.current
    if (body) body.scrollTop = body.scrollHeight
  }, [lines])

  function run(raw: string) {
    const cmd = raw.trim().toLowerCase().replace(/\s+/g, ' ')
    if (!cmd) return
    setHistory((h) => [...h, cmd])
    setHistoryPos(-1)
    setInput('')

    if (cmd === 'clear') {
      setLines([])
      return
    }
    const entry = commands[cmd]
    const result: Line = entry
      ? { kind: 'out', content: entry.run() }
      : { kind: 'err', content: <p>command not found: {cmd}. Try <span className="text-accent">help</span>.</p> }
    setLines((l) => [...l, { kind: 'cmd', content: cmd }, result])
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      run(input)
    } else if (e.key === 'ArrowUp' && history.length) {
      e.preventDefault()
      const pos = historyPos === -1 ? history.length - 1 : Math.max(0, historyPos - 1)
      setHistoryPos(pos)
      setInput(history[pos])
    } else if (e.key === 'ArrowDown' && historyPos !== -1) {
      e.preventDefault()
      const pos = historyPos + 1
      setHistoryPos(pos >= history.length ? -1 : pos)
      setInput(pos >= history.length ? '' : history[pos])
    } else if (e.key === 'Tab') {
      const match = Object.keys(commands).find((c) => input && c.startsWith(input.toLowerCase()))
      if (match) {
        e.preventDefault()
        setInput(match)
      }
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-accent/10">
        <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900 px-4 py-2.5">
          <span className="size-3 rounded-full bg-red-500/80" />
          <span className="size-3 rounded-full bg-yellow-500/80" />
          <span className="size-3 rounded-full bg-green-500/80" />
          <span className="ml-3 font-mono text-xs text-zinc-500">spoorthy@portfolio: ~</span>
        </div>

        <div
          ref={bodyRef}
          onClick={() => inputRef.current?.focus()}
          className="h-72 cursor-text overflow-y-auto p-4 font-mono text-[13px] leading-relaxed text-zinc-300 sm:text-sm"
        >
          {lines.map((line, i) =>
            line.kind === 'cmd' ? (
              <p key={i} className="mt-3 first:mt-0">
                <span className="text-emerald-400">➜</span> <span className="text-sky-400">~</span>{' '}
                <span className="text-white">{line.content}</span>
              </p>
            ) : (
              <div key={i} className={`mt-1 ${line.kind === 'err' ? 'text-red-400' : ''}`}>
                {line.content}
              </div>
            ),
          )}
          <label className="mt-3 flex items-center gap-2">
            <span className="text-emerald-400">➜</span>
            <span className="text-sky-400">~</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              aria-label="Terminal command"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              className="flex-1 bg-transparent text-white caret-accent outline-none"
            />
          </label>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => run(s)}
            className="rounded-full border border-zinc-200 px-3 py-1 font-mono text-xs text-zinc-600 transition hover:border-accent hover:text-accent dark:border-zinc-800 dark:text-zinc-400"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  )
}
