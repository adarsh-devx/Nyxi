import { useEffect, useRef, useState, startTransition } from 'react'
import { motion } from 'framer-motion'

/**
 * StarfallCursor
 * Interactive cursor component that spawns falling star particles on mouse move and click bursts.
 */
export default function StarfallCursor({
  density = 1,
  gravity = 1,
  starSize = 10,
  duration = 0.9,
  starColor = '#ffffff',
  glowIntensity = 2,
  showCursor = true,
  cursorStyle = 'default',
}) {
  const [stars, setStars] = useState([])
  const lastPositionRef = useRef({ x: 0, y: 0 })
  const lastTimeRef = useRef(0)
  const starIdRef = useRef(0)
  const isMobileRef = useRef(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Detect mobile/touch devices
    isMobileRef.current =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
      window.matchMedia('(pointer: coarse)').matches

    if (isMobileRef.current) return

    // Cursor style setup
    if (!showCursor) {
      document.body.style.cursor = 'none'
    } else if (cursorStyle !== 'default') {
      document.body.style.cursor = cursorStyle
    }

    const handleMouseMove = (e) => {
      const currentTime = Date.now()
      const currentX = e.clientX
      const currentY = e.clientY

      const deltaX = currentX - lastPositionRef.current.x
      const deltaY = currentY - lastPositionRef.current.y
      const deltaTime = currentTime - lastTimeRef.current

      if (deltaTime === 0) return

      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)
      const speed = distance / deltaTime

      // Speed thresholds for star spawning
      const lowThreshold = 0.3
      const mediumThreshold = 0.8
      const highThreshold = 1.5

      let starCount = 0
      if (speed >= highThreshold) {
        starCount = Math.floor((4 + Math.random() * 2) * density)
      } else if (speed >= mediumThreshold) {
        starCount = Math.floor((2 + Math.random()) * density)
      } else if (speed >= lowThreshold) {
        starCount = Math.floor(1 * density)
      }

      if (starCount > 0) {
        const newStars = []
        for (let i = 0; i < starCount; i++) {
          const sizeOptions = [0.67, 1, 1.33]
          const sizeVariant = sizeOptions[Math.floor(Math.random() * sizeOptions.length)]
          const size = starSize * sizeVariant

          const offsetX = (Math.random() - 0.5) * 12
          const offsetY = 4 + Math.random() * 8

          newStars.push({
            id: starIdRef.current++,
            x: currentX + offsetX,
            y: currentY + offsetY,
            size,
            velocityX: (Math.random() - 0.5) * 6,
            velocityY: 0,
            rotation: (Math.random() - 0.5) * 20,
            isTapStar: false,
          })
        }

        startTransition(() => {
          setStars((prev) => [...prev, ...newStars])
        })
      }

      lastPositionRef.current = { x: currentX, y: currentY }
      lastTimeRef.current = currentTime
    }

    const handleClick = (e) => {
      const clickX = e.clientX
      const clickY = e.clientY

      const tapStarCount = Math.floor(8 * density)
      const newStars = []

      for (let i = 0; i < tapStarCount; i++) {
        const angle = ((Math.PI * 2) / tapStarCount) * i
        const sizeOptions = [0.67, 1, 1.33]
        const sizeVariant = sizeOptions[Math.floor(Math.random() * sizeOptions.length)]
        const size = starSize * sizeVariant

        newStars.push({
          id: starIdRef.current++,
          x: clickX,
          y: clickY,
          size,
          velocityX: Math.cos(angle) * 60,
          velocityY: Math.sin(angle) * 60,
          rotation: (Math.random() - 0.5) * 40,
          isTapStar: true,
        })
      }

      startTransition(() => {
        setStars((prev) => [...prev, ...newStars])
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleClick)
      document.body.style.cursor = 'auto'
    }
  }, [density, starSize, showCursor, cursorStyle])

  // Cleanup stars after animation completes
  useEffect(() => {
    if (stars.length === 0) return
    const timeout = setTimeout(() => {
      startTransition(() => {
        setStars((prev) => prev.slice(Math.max(0, prev.length - 25)))
      })
    }, duration * 1000 + 100)

    return () => clearTimeout(timeout)
  }, [stars, duration])

  if (isMobileRef.current) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {stars.map((star) => {
        const fallDistance = 40 + Math.random() * 40
        return (
          <motion.div
            key={star.id}
            style={{
              position: 'absolute',
              left: star.x,
              top: star.y,
              width: star.size,
              height: star.size,
              color: starColor,
              fontSize: `${star.size}px`,
              lineHeight: 1,
              textShadow: glowIntensity > 0 ? `0 0 ${glowIntensity}px ${starColor}` : 'none',
              filter: glowIntensity > 0 ? `blur(${glowIntensity * 0.1}px)` : 'none',
              userSelect: 'none',
            }}
            initial={{
              opacity: star.isTapStar ? 1 : 0.85,
              scale: star.isTapStar ? 0.5 : 1,
              rotate: star.rotation,
              x: 0,
              y: 0,
            }}
            animate={{
              opacity: 0,
              scale: star.isTapStar ? 1.5 : 0.3,
              rotate: star.rotation + (Math.random() - 0.5) * 20,
              x: star.velocityX,
              y: star.isTapStar ? star.velocityY : fallDistance * gravity,
            }}
            transition={{
              duration: star.isTapStar ? duration * 0.8 : duration,
              ease: star.isTapStar ? [0.25, 0.46, 0.45, 0.94] : [0.4, 0, 1, 1],
            }}
          >
            ✦
          </motion.div>
        )
      })}
    </div>
  )
}
