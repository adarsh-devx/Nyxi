import { useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'
import Badge from './ui/Badge.jsx'

/**
 * Static poster first; the (already optimized) video is attached and played
 * on hover (desktop) or via the preview button (touch + keyboard).
 */
export default function WallpaperCard({ wallpaper, className = '' }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const start = () => {
    const video = videoRef.current
    if (!video) return
    if (!video.src) video.src = wallpaper.video // lazy-attach on first interaction
    video.play().then(() => setPlaying(true)).catch(() => {})
  }

  const stop = () => {
    const video = videoRef.current
    if (!video) return
    video.pause()
    video.currentTime = 0
    setPlaying(false)
  }

  const toggle = () => (playing ? stop() : start())

  return (
    <figure
      onMouseEnter={start}
      onMouseLeave={stop}
      className={`group relative overflow-hidden rounded-xl border-2 border-ink bg-ink shadow-brutal transition-transform duration-200 hover:-translate-y-1 ${className}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={wallpaper.poster}
          alt={`${wallpaper.title} — ${wallpaper.category} live wallpaper`}
          loading="lazy"
          className={`absolute inset-0 h-full w-full object-cover transition-[opacity,scale] duration-500 group-hover:scale-[1.04] ${
            playing ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <video
          ref={videoRef}
          poster={wallpaper.poster}
          preload="none"
          muted
          loop
          playsInline
          aria-label={`${wallpaper.title} live wallpaper in motion`}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            playing ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {wallpaper.badge && (
          <Badge tone="surface" className="absolute left-3 top-3 -rotate-3">
            {wallpaper.badge}
          </Badge>
        )}

        <figcaption
          className={`absolute bottom-0 left-0 p-4 transition-all duration-300 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:focus-within:translate-y-0 sm:focus-within:opacity-100`}
        >
          <span className="inline-block bg-ink px-2 py-0.5 text-2xl font-bold text-paper">
            {wallpaper.title}
          </span>
          <span className="mt-1.5 block w-fit bg-accent px-2 py-0.5 text-base uppercase tracking-wider text-white">
            {wallpaper.category} &bull; live
          </span>
        </figcaption>

        <button
          type="button"
          onClick={toggle}
          aria-pressed={playing}
          aria-label={`${playing ? 'Pause' : 'Play'} preview of ${wallpaper.title}`}
          className="absolute right-3 top-3 rounded-full border-2 border-ink bg-surface p-3 text-ink shadow-[2px_2px_0_0_var(--color-ink)] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
        >
          {playing ? (
            <Pause size={20} aria-hidden="true" />
          ) : (
            <Play size={20} aria-hidden="true" className="ml-0.5" />
          )}
        </button>
      </div>
    </figure>
  )
}
