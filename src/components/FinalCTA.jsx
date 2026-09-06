import { ArrowRight } from 'lucide-react'
import Button from './ui/Button.jsx'
import { GET_NYXI_URL } from '../data/navigation.js'

export default function FinalCTA() {
  return (
    <section className="bg-dots-light relative overflow-hidden border-y-2 border-ink bg-accent py-20 text-white sm:py-28">
      <div data-reveal className="relative mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-[clamp(2.75rem,8vw,6rem)] font-bold leading-[1.02]">
          READY TO MAKE
          <br />
          YOUR TAB{' '}
          <span className="inline-block -rotate-2 bg-ink px-3 shadow-brutal-sm">ALIVE?</span>
        </h2>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            href={GET_NYXI_URL}
            target="_blank"
            rel="noreferrer"
            size="lg"
            className="w-full sm:w-auto"
          >
            Add NYXI to Chrome <ArrowRight size={22} aria-hidden="true" />
          </Button>
          <Button href="#wallpapers" variant="dark" size="lg" className="w-full sm:w-auto">
            Explore wallpapers
          </Button>
        </div>
      </div>
    </section>
  )
}
