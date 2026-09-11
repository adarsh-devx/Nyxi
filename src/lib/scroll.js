import Lenis from 'lenis'

let lenis = null

/**
 * Lenis smooth scrolling for the whole page. Skipped entirely when the user
 * prefers reduced motion (native scrolling stays, anchor jumps stay instant).
 */
export function initSmoothScroll() {
  if (lenis) return () => {}
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {}

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  })

  let rafId = 0
  const loop = (time) => {
    lenis.raf(time)
    rafId = requestAnimationFrame(loop)
  }
  rafId = requestAnimationFrame(loop)

  // Route in-page anchor clicks through Lenis for eased scrolling.
  const onClick = (event) => {
    const anchor = event.target.closest('a[href^="#"]')
    if (!anchor) return
    const hash = anchor.getAttribute('href')
    if (hash.length < 2) return
    const target = document.querySelector(hash)
    if (!target) return
    event.preventDefault()
    lenis.scrollTo(target, { offset: -80, duration: 1.4 }) // clear the sticky navbar
  }
  document.addEventListener('click', onClick)

  return () => {
    document.removeEventListener('click', onClick)
    cancelAnimationFrame(rafId)
    lenis.destroy()
    lenis = null
  }
}

/** Recalculate dimensions for Lenis when page layout changes. */
export function refreshScroll() {
  if (lenis) {
    lenis.resize()
  }
}

/** Lock/unlock page scrolling (preloader, mobile drawer). Safe when Lenis is inactive. */
export function lockScroll(lock) {
  if (!lenis) return
  if (lock) {
    lenis.stop()
  } else {
    lenis.start()
    requestAnimationFrame(() => {
      if (lenis) lenis.resize()
    })
  }
}
