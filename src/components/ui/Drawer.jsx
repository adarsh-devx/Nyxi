import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { lockScroll } from '../../lib/scroll.js'

export default function Drawer({ open, onClose, title = 'Menu', children }) {
  const panelRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    lockScroll(true)
    panelRef.current?.querySelector('a, button')?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      lockScroll(false)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label={title}>
      <div className="absolute inset-0 bg-ink/50" onClick={onClose} aria-hidden="true" />
      <div
        ref={panelRef}
        className="absolute right-3 top-3 w-[min(20rem,calc(100vw-1.5rem))] rounded-xl border-2 border-ink bg-paper p-5 shadow-brutal"
      >
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">
            NYXI<span className="text-accent">.</span>
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-md border-2 border-ink bg-surface p-1.5 shadow-[2px_2px_0_0_var(--color-ink)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
