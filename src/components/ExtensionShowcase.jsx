import BrowserMockup from './BrowserMockup.jsx'

// Actual screen recording of the extension: live katana wallpaper + glass clock/dock.
const demoVideo = '/wallpapers/nyxi-extension-demo.webm'
const demoPoster = '/wallpapers/nyxi-extension-demo.jpg'

const glassChips = ['Live wallpaper', 'Glass UI', 'Your new tab']

export default function ExtensionShowcase() {
  return (
    <section aria-labelledby="showcase-heading" className="bg-ink py-20 text-paper sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div
          data-reveal
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <h2
            id="showcase-heading"
            className="text-[clamp(2.75rem,7vw,5rem)] font-bold leading-[1.02]"
          >
            BRUTAL OUTSIDE.
            <br />
            <span className="text-white/60">GLASS INSIDE.</span>
          </h2>
          <p className="-rotate-1 font-scribble text-3xl font-bold text-[#8fa7ff]">
            the website shouts. the extension whispers.
          </p>
        </div>

        <div
          data-reveal
          style={{ '--reveal-delay': '150ms' }}
          className="relative mt-14 rounded-2xl border-2 border-white/25 bg-white/5 p-2 shadow-[0_0_80px_rgba(46,91,255,0.35)] sm:p-3"
        >
          <BrowserMockup
            videoSrc={demoVideo}
            poster={demoPoster}
            alt="NYXI new tab in action: the Katana Forest live wallpaper with the glass clock and quick-access dock"
            autoPlay
            aspect="aspect-[16/9]"
            className="shadow-none [&>div:first-child]:rounded-t-none"
          />

          {/* The extension's own glassmorphic look, breaking the frame like a sticker.
              Sits top-left so it never covers the glass clock in the recording. */}
          <div className="absolute -top-6 -left-2 z-10 -rotate-2 rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-center backdrop-blur-md sm:-top-8 sm:-left-5 sm:px-8 sm:py-5">
            <img
              src="/branding/nyxi-mark.png"
              alt="NYXI logo"
              width="64"
              height="64"
              loading="lazy"
              className="mx-auto h-10 w-10 object-contain drop-shadow-md sm:h-16 sm:w-16"
            />
            <p className="mt-1.5 text-xl font-bold text-white sm:mt-3 sm:text-3xl">NYXI</p>
            <p className="hidden font-scribble text-lg text-white/85 sm:block sm:text-2xl">
              make your new tab alive.
            </p>
          </div>
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {glassChips.map((chip) => (
            <li
              key={chip}
              className="rounded-full border border-white/30 bg-white/10 px-4 py-1 text-lg uppercase tracking-wider text-white/85 backdrop-blur-md"
            >
              {chip}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
