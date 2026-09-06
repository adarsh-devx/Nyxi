import { ArrowRight } from 'lucide-react'
import Button from './ui/Button.jsx'
import Badge from './ui/Badge.jsx'
import BrowserMockup from './BrowserMockup.jsx'
import { GET_NYXI_URL } from '../data/navigation.js'
import { wallpapers } from '../data/wallpapers.js'

const heroWallpaper = wallpapers.find((w) => w.id === 'katana-forest')

export default function Hero() {
  return (
    <section className="bg-dots relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-10 sm:pt-14 lg:grid-cols-2 lg:grid-rows-[auto_auto] lg:items-center lg:gap-8 lg:pb-24">
        {/* Headline */}
        <div data-reveal className="lg:col-start-1 lg:row-start-1">
          <Badge tone="ink" className="-rotate-2">
            Chrome extension
          </Badge>
          <h1 className="mt-5 text-[clamp(3.25rem,9vw,6rem)] font-bold leading-[0.95]">
            YOUR NEW TAB
            <br />
            IS{' '}
            <span className="relative inline-block">
              BORING.
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 220 22"
                fill="none"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <path
                  d="M4 14 C 60 6, 120 20, 216 9"
                  stroke="var(--color-accent)"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="mt-6 -rotate-1 font-scribble text-3xl font-bold text-accent sm:text-4xl">
            let&rsquo;s fix that.
          </p>
          <p className="mt-4 max-w-md text-xl leading-relaxed text-ink/80 sm:text-2xl">
            NYXI swaps the default Chrome new tab for high-quality live wallpapers. Add it once
            &mdash; every new tab opens into a living scene.
          </p>
        </div>

        {/* Browser mockup */}
        <div
          data-reveal
          style={{ '--reveal-delay': '120ms' }}
          className="relative order-last lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1"
        >
          <div className="relative mx-auto max-w-xl lg:max-w-none lg:rotate-1">
            <BrowserMockup
              videoSrc={heroWallpaper.video}
              poster={heroWallpaper.poster}
              alt="Katana Forest live wallpaper running on the NYXI new tab"
              autoPlay
              tilt
            >
              <span className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-white/40 bg-black/35 px-3 py-1 text-sm text-white backdrop-blur-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" aria-hidden="true" />
                Live wallpaper
              </span>
            </BrowserMockup>
            <Badge tone="accent" className="absolute -right-3 -top-4 rotate-6 text-lg">
              Real preview
            </Badge>
          </div>
        </div>

        {/* CTAs */}
        <div
          data-reveal
          style={{ '--reveal-delay': '240ms' }}
          className="flex flex-col gap-4 sm:flex-row sm:items-center lg:col-start-1 lg:row-start-2"
        >
          <Button href={GET_NYXI_URL} target="_blank" rel="noreferrer" size="lg">
            Add to Chrome <ArrowRight size={22} aria-hidden="true" />
          </Button>
          <Button href="#wallpapers" variant="secondary" size="lg">
            Explore wallpapers
          </Button>
        </div>
      </div>
    </section>
  )
}
