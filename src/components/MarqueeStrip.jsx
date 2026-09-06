import { Asterisk } from 'lucide-react'
import Marquee from './ui/Marquee.jsx'
import { marqueeWords } from '../data/navigation.js'

export default function MarqueeStrip() {
  return (
    <section aria-label="NYXI in three words" className="relative z-10 -my-2 -rotate-1 scale-x-105">
      <div className="border-y-2 border-ink bg-ink py-3 text-paper">
        <Marquee speed={24}>
          {marqueeWords.map((word) => (
            <span
              key={word}
              className="flex items-center text-2xl font-bold tracking-[0.2em] sm:text-3xl"
            >
              <span className="mx-6">{word}</span>
              <Asterisk size={26} className="text-accent" aria-hidden="true" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
