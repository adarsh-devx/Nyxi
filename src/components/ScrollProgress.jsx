import { useEffect, useRef } from 'react'

const THUMB_HEIGHT = 48 // px, matches h-12 on the thumb

/**
 * Custom vertical scroll indicator (right edge, vertically centered).
 * The glowing thumb maps page scroll progress; replaces the native scrollbar.
 */
export default function ScrollProgress() {
  const trackRef = useRef(null)
  const thumbRef = useRef(null)

  useEffect(() => {
    let raf = 0

    const update = () => {
      raf = 0
      const track = trackRef.current
      const thumb = thumbRef.current
      if (!track || !thumb) return

      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      const range = track.offsetHeight - THUMB_HEIGHT
      thumb.style.transform = `translateY(${(progress * range).toFixed(1)}px)`
    }

    const requestUpdate = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={trackRef}
      aria-hidden="true"
      className="fixed right-2.5 top-1/2 z-50 hidden h-[clamp(180px,32vh,320px)] w-[5px] -translate-y-1/2 rounded-full bg-white/25 shadow-[inset_0_0_0_1px_rgba(17,17,17,0.18)] md:block"
    >
      <span
        ref={thumbRef}
        className="absolute inset-x-0 top-0 h-12 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,0.85),0_1px_5px_rgba(17,17,17,0.35)]"
      />
    </div>
  )
}
