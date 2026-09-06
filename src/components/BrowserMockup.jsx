import { useRef } from 'react'
import useReducedMotion from '../hooks/useReducedMotion.js'

const CHROME_DOT_COLORS = ['#ff5f57', '#febc2e', '#28c840']

/**
 * Chrome-style browser frame. Give it `videoSrc` + `poster` for a live
 * wallpaper tab, or plain `children` for any other tab content.
 * `tilt` adds a subtle pointer-driven 3D tilt (desktop, motion-safe only).
 */
export default function BrowserMockup({
  videoSrc,
  poster,
  alt = '',
  autoPlay = false,
  tilt = false,
  aspect = 'aspect-[16/10]',
  className = '',
  children,
}) {
  const reducedMotion = useReducedMotion()
  const frameRef = useRef(null)

  const handlePointerMove = (event) => {
    if (!tilt || reducedMotion || event.pointerType !== 'mouse' || !frameRef.current) return
    const rect = frameRef.current.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    frameRef.current.style.transform = `perspective(1200px) rotateX(${(-py * 4).toFixed(2)}deg) rotateY(${(px * 5).toFixed(2)}deg)`
  }

  const resetTilt = () => {
    if (frameRef.current) frameRef.current.style.transform = ''
  }

  const playVideo = videoSrc && !reducedMotion

  return (
    <div
      ref={frameRef}
      onMouseMove={handlePointerMove}
      onMouseLeave={resetTilt}
      className={`overflow-hidden rounded-xl border-2 border-ink bg-ink shadow-brutal transition-transform duration-200 ease-out will-change-transform ${className}`}
    >
      {/* Chrome top bar */}
      <div className="flex items-center gap-1.5 border-b-2 border-ink bg-surface px-3 py-2">
        {CHROME_DOT_COLORS.map((color) => (
          <span
            key={color}
            className="h-3 w-3 rounded-full border border-ink"
            style={{ backgroundColor: color }}
            aria-hidden="true"
          />
        ))}
        <div className="ml-2 flex-1 rounded-md border border-ink/15 bg-paper px-3 py-0.5 text-sm text-ink/50">
          New Tab
        </div>
      </div>

      {/* Tab content */}
      <div className={`relative ${aspect} bg-ink`}>
        {playVideo ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={videoSrc}
            poster={poster}
            muted
            loop
            playsInline
            autoPlay={autoPlay}
            preload={autoPlay ? 'auto' : 'none'}
            aria-label={alt}
          />
        ) : poster ? (
          <img
            src={poster}
            alt={alt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : null}
        {children}
      </div>
    </div>
  )
}
