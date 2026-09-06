import { ArrowDown } from 'lucide-react'
import Badge from './ui/Badge.jsx'
import BrowserMockup from './BrowserMockup.jsx'
import { wallpapers } from '../data/wallpapers.js'

const nyxiWallpaper = wallpapers.find((w) => w.id === 'blue-girl')

/* Simplified depiction of the default Chrome new tab (search + shortcuts). */
function DefaultTab() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 bg-white">
      <div className="h-12 w-12 rounded-full bg-gray-200" aria-hidden="true" />
      <div
        className="h-11 w-3/5 rounded-full border border-gray-300 bg-gray-50"
        aria-hidden="true"
      />
      <div className="flex gap-4" aria-hidden="true">
        {[0, 1, 2, 3].map((tile) => (
          <div key={tile} className="flex flex-col items-center gap-1.5">
            <div className="h-11 w-11 rounded-full bg-gray-200" />
            <div className="h-2 w-10 rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ProblemSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <div data-reveal>
          <h2 className="max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.02]">
            WHY SHOULD YOUR NEW TAB LOOK{' '}
            <span className="inline-block -rotate-1 bg-accent px-2 text-white">DEAD?</span>
          </h2>
          <p className="mt-4 max-w-lg text-xl text-ink/75 sm:text-2xl">
            It&rsquo;s the first screen you see every single day.
          </p>
        </div>

      <div className="mt-14 grid items-center gap-10 md:grid-cols-[1fr_auto_1fr]">
        <figure data-reveal className="relative mx-auto w-full max-w-md -rotate-1 md:max-w-none">
          <BrowserMockup alt="The default Chrome new tab: a blank page with a search bar">
            <DefaultTab />
          </BrowserMockup>
          <figcaption>
            <Badge tone="ink" className="absolute -top-4 left-4 -rotate-3">
              Default Chrome tab
            </Badge>
          </figcaption>
        </figure>

        <div className="flex justify-center" aria-hidden="true">
          <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-ink bg-accent text-white shadow-brutal-sm md:-rotate-90">
            <ArrowDown size={30} />
          </span>
        </div>

        <figure
          data-reveal
          style={{ '--reveal-delay': '150ms' }}
          className="relative mx-auto w-full max-w-md rotate-1 md:max-w-none"
        >
          <BrowserMockup
            poster={nyxiWallpaper.poster}
            alt="The same new tab with NYXI: the Blue Girl live wallpaper"
          />
          <figcaption>
            <Badge tone="accent" className="absolute -top-4 right-4 rotate-3">
              With NYXI
            </Badge>
          </figcaption>
        </figure>
      </div>

      <p className="mt-12 text-center font-scribble text-2xl font-bold text-ink/70 sm:text-3xl">
        you open dozens of new tabs every day. make them worth looking at.
      </p>
    </section>
  )
}
