import WallpaperCard from './WallpaperCard.jsx'
import { wallpapers } from '../data/wallpapers.js'

const cardLayouts = [
  'md:col-span-7 md:-rotate-[0.6deg]',
  'md:col-span-5 md:translate-y-10 md:rotate-[0.8deg] md:mb-10',
]

export default function WallpaperGallery() {
  return (
    <section id="wallpapers" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div
          data-reveal
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <h2 className="relative text-[clamp(3rem,8vw,5.5rem)] font-bold leading-none">
            WALLPAPERS
            <svg
              className="absolute -bottom-3 left-0 w-2/3"
              viewBox="0 0 260 20"
              fill="none"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <path
                d="M4 12 C 70 4, 150 18, 256 8"
                stroke="var(--color-accent)"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </h2>
          <p className="-rotate-1 font-scribble text-3xl font-bold text-ink/70">
            real previews. no stock photos.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-12 md:gap-8">
          {wallpapers.map((wallpaper, index) => (
            <div
              key={wallpaper.id}
              data-reveal
              style={{ '--reveal-delay': `${index * 120}ms` }}
              className={cardLayouts[index]}
            >
              <WallpaperCard wallpaper={wallpaper} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
