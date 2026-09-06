const base =
  'inline-flex cursor-pointer select-none items-center justify-center gap-2 rounded-lg border-2 border-ink font-hand uppercase leading-none tracking-wide transition-[transform,box-shadow] duration-150'

const variants = {
  primary:
    'bg-accent text-white shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--color-ink)] active:translate-x-1 active:translate-y-1 active:shadow-none',
  secondary:
    'bg-surface text-ink shadow-brutal-sm hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--color-ink)] active:translate-x-1 active:translate-y-1 active:shadow-none',
  // For use on accent/dark backgrounds.
  dark: 'border-ink bg-ink text-paper shadow-[4px_4px_0_0_var(--color-paper)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_var(--color-paper)] active:translate-x-1 active:translate-y-1 active:shadow-none',
  outline:
    'bg-transparent text-ink shadow-[4px_4px_0_0_rgba(17,17,17,0.9)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_rgba(17,17,17,0.9)] active:translate-x-1 active:translate-y-1 active:shadow-none',
}

const sizes = {
  md: 'px-5 py-2.5 text-lg',
  lg: 'px-7 py-3.5 text-xl sm:text-2xl',
}

export default function Button({
  as: Tag = 'a',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  return (
    <Tag className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
