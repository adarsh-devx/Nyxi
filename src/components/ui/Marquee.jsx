/**
 * Seamless marquee: the content is rendered twice inside a w-max track
 * that translates -50%. The second copy is hidden from assistive tech.
 */
export default function Marquee({ children, speed = 30, className = '', trackClassName = '' }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex w-max animate-marquee ${trackClassName}`}
        style={{ animationDuration: `${speed}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
