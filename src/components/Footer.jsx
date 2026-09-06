import { navLinks } from '../data/navigation.js'

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-4xl font-bold">
              NYXI<span className="text-accent">.</span>
            </p>
            <p className="mt-2 font-scribble text-2xl text-white/80">make your new tab alive.</p>
          </div>

          <nav aria-label="Footer">
            <p className="text-base uppercase tracking-[0.2em] text-white/50">Product</p>
            <ul className="mt-3 space-y-1.5 text-xl">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="underline-offset-4 hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/20 pt-6 text-base text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 NYXI. All rights reserved.</p>
          <p>Chrome is a trademark of Google LLC. NYXI is not affiliated with Google.</p>
        </div>
      </div>
    </footer>
  )
}
