import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const WORDS = [
  'Hello',
  'Bonjour',
  'Ciao',
  'Olà',
  'やあ',
  'Hallå',
  'Guten tag',
  'Hallo',
  'Welcome to Nyxi!',
]

const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: '-100vh',
    transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
}

const opacity = {
  initial: {
    opacity: 0,
    y: 12,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
}

export default function Preloader({ onComplete }) {
  const [index, setIndex] = useState(0)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimension = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    updateDimension()
    window.addEventListener('resize', updateDimension)
    return () => window.removeEventListener('resize', updateDimension)
  }, [])

  useEffect(() => {
    if (index === WORDS.length - 1) {
      const exitTimer = setTimeout(() => {
        if (onComplete) onComplete()
      }, 700)
      return () => clearTimeout(exitTimer)
    }

    const timeout = setTimeout(
      () => {
        setIndex((prev) => prev + 1)
      },
      index === 0 ? 900 : 160,
    )

    return () => clearTimeout(timeout)
  }, [index, onComplete])

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  }

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#111111] text-white cursor-wait select-none"
      style={{ height: '100vh', width: '100vw' }}
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            key={index}
            variants={opacity}
            initial="initial"
            animate="enter"
            className="text-center text-3xl sm:text-5xl md:text-6xl font-sans font-semibold tracking-tight text-white z-10"
          >
            {WORDS[index]}
          </motion.p>
          <svg className="absolute top-0 left-0 w-full h-[calc(100%+300px)] pointer-events-none fill-[#111111]">
            <motion.path variants={curve} initial="initial" exit="exit" />
          </svg>
        </>
      )}
    </motion.div>
  )
}
