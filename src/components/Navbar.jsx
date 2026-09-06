import { useState } from 'react'
import { ArrowRight, Menu } from 'lucide-react'
import Button from './ui/Button.jsx'
import Drawer from './ui/Drawer.jsx'
import { GET_NYXI_URL, navLinks } from '../data/navigation.js'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-5">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-xl border-2 border-ink bg-surface px-4 py-2.5 shadow-brutal-sm"
      >
        <a href="#top" className="text-2xl font-bold tracking-tight">
          NYXI<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-lg underline-offset-4 decoration-accent decoration-[3px] hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <Button href={GET_NYXI_URL} target="_blank" rel="noreferrer" className="hidden md:inline-flex">
          Get NYXI <ArrowRight size={18} aria-hidden="true" />
        </Button>

        <button
          type="button"
          className="rounded-md border-2 border-ink bg-surface p-1.5 shadow-[2px_2px_0_0_var(--color-ink)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none md:hidden"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={22} aria-hidden="true" />
        </button>
      </nav>

      <Drawer open={menuOpen} onClose={closeMenu} title="Navigation">
        <ul className="mt-5 space-y-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block rounded-lg border-2 border-transparent px-3 py-2 text-2xl hover:border-ink hover:bg-surface"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Button
          href={GET_NYXI_URL}
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
          className="mt-5 w-full"
          size="lg"
        >
          Get NYXI <ArrowRight size={20} aria-hidden="true" />
        </Button>
      </Drawer>
    </header>
  )
}
