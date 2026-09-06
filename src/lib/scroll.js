import Lenis from 'lenis'

let lenis = null

/**
 * Lenis smooth scrolling for the whole page. Skipped entirely when the user
 * prefers reduced motion (native scrolling stays, anchor jumps stay instant).
 */
export function initSmoothScroll() {
  if (lenis) return () => {}
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {}

  lenis = new Lenis({ lerp: 0.1 })

  let raf = 0
  const loop = (time) => {
    lenis.raf(time)
    raf = requestAnimationFrame(loop)
  }
  raf = requestAnimationFrame(loop)

  // Route in-page anchor clicks through Lenis for eased scrolling.
  const onClick = (event) => {
    const anchor = event.target.closest('a[href^="#"]')
    if (!anchor) return
    const hash = anchor.getAttribute('href')
    if (hash.length < 2) return
    const target = document.querySelector(hash)
    if (!target) return
    event.preventDefault()
    lenis.scrollTo(target, { offset: -80 }) // clear the sticky navbar
  }
  document.addEventListener('click', onClick)

  return () => {
    document.removeEventListener('click', onClick)
    cancelAnimationFrame(raf)
    lenis.destroy()
    lenis = null
  }
}

/** Lock/unlock page scrolling (mobile drawer). Safe when Lenis is inactive. */
export function lockScroll(lock) {
  if (!lenis) return
  if (lock) lenis.stop()
  else lenis.start()
}
