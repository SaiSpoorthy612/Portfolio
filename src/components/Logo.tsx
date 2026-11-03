import { image } from '../asset'

// Square company/school logo with a lettered fallback when no image is set
export default function Logo({ src, name }: { src?: string; name: string }) {
  const base = 'size-12 shrink-0 rounded-lg bg-white ring-1 ring-zinc-200 dark:ring-zinc-800'
  if (!src) {
    return <div className={`${base} grid place-items-center font-semibold text-zinc-700`}>{name[0]}</div>
  }
  return <img src={image(src)} alt="" className={`${base} object-contain p-1`} />
}
