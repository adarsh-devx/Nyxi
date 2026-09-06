const tones = {
  surface: 'bg-surface text-ink',
  accent: 'bg-accent text-white',
  ink: 'bg-ink text-paper',
}

export default function Badge({ tone = 'surface', className = '', children, ...props }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border-2 border-ink px-2.5 py-0.5 text-base uppercase tracking-wider shadow-[2px_2px_0_0_var(--color-ink)] ${tones[tone]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
