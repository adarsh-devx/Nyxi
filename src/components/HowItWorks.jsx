import { Download, Palette, Sparkles } from 'lucide-react'
import { steps } from '../data/steps.js'

const STEP_ICONS = {
  download: Download,
  palette: Palette,
  sparkles: Sparkles,
}

const CARD_ROTATIONS = ['md:-rotate-1', 'md:rotate-0', 'md:rotate-1']

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div data-reveal className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-[clamp(2.75rem,7vw,5rem)] font-bold leading-none">HOW IT WORKS</h2>
          <p className="-rotate-2 font-scribble text-3xl font-bold text-ink/70">
            three steps. thirty seconds.
          </p>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = STEP_ICONS[step.icon]
            return (
              <li
                key={step.number}
                data-reveal
                style={{ '--reveal-delay': `${index * 120}ms` }}
                className={`relative rounded-xl border-2 border-ink bg-surface p-6 shadow-brutal-sm transition-transform duration-150 hover:-translate-y-1 ${CARD_ROTATIONS[index]}`}
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-ink bg-accent text-xl font-bold text-white">
                    {step.number}
                  </span>
                  {Icon && (
                    <Icon size={30} className="text-ink/60" aria-hidden="true" />
                  )}
                </div>
                <h3 className="mt-5 text-3xl font-bold tracking-wide">{step.title}</h3>
                <p className="mt-2 text-xl text-ink/75">{step.description}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
