import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Hero from './components/Hero.jsx'
import MarqueeStrip from './components/MarqueeStrip.jsx'
import ProblemSection from './components/ProblemSection.jsx'
import WallpaperGallery from './components/WallpaperGallery.jsx'
import FeaturesSection from './components/FeaturesSection.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import ExtensionShowcase from './components/ExtensionShowcase.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import StarfallCursor from './components/StarfallCursor.jsx'
import { initSmoothScroll } from './lib/scroll.js'

/** Reveal every [data-reveal] element the first time it enters the viewport. */
function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useEffect(() => initSmoothScroll(), [])

  useRevealOnScroll()

  return (
    <div id="top">
      <StarfallCursor starColor="#2e5bff" starSize={12} glowIntensity={3} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:border-2 focus:border-ink focus:bg-surface focus:px-4 focus:py-2 focus:shadow-brutal-sm"
      >
        Skip to content
      </a>
      <Navbar />
      <ScrollProgress />
      <main id="main">
        <Hero />
        <MarqueeStrip />
        <ProblemSection />
        <WallpaperGallery />
        <FeaturesSection />
        <HowItWorks />
        <ExtensionShowcase />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
