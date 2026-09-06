import { features } from '../data/features.js'

export default function FeaturesSection() {
  return (
    <section id="features" className="scroll-mt-24 border-y-2 border-ink bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div data-reveal>
          <h2 className="text-[clamp(2.75rem,7vw,5rem)] font-bold leading-[1.02]">
            SMALL EXTENSION.
            <br />
            <span className="mt-1 inline-block -rotate-1 bg-accent px-3 text-white">
              BIG DIFFERENCE.
            </span>
          </h2>
        </div>

        <ul className="mt-16">
          {features.map((feature, index) => (
            <FeatureRow key={feature.number} feature={feature} flip={index % 2 === 1} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function FeatureRow({ feature, flip }) {
  return (
    <li
      data-reveal
      className={`grid items-baseline gap-3 border-t-2 border-ink py-10 sm:py-12 md:grid-cols-[auto_1fr_auto] md:gap-8 ${
        flip ? 'md:grid-cols-[auto_1fr_auto]' : ''
      }`}
    >
      <span
        aria-hidden="true"
        className={`text-outline text-7xl font-bold leading-none sm:text-8xl ${
          flip ? 'md:order-3' : ''
        }`}
      >
        {feature.number}
      </span>
      <h3
        className={`text-5xl font-bold tracking-tight sm:text-6xl ${
          flip ? 'md:order-1 md:text-right' : ''
        }`}
      >
        {feature.title}
      </h3>
      <p
        className={`max-w-sm text-xl leading-snug text-ink/75 sm:text-2xl ${
          flip ? 'md:order-2 md:text-right' : 'md:justify-self-end md:text-right'
        }`}
      >
        {feature.description}
      </p>
    </li>
  )
}
