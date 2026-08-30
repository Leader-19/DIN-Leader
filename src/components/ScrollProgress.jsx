import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const docHeight = document.documentElement.scrollHeight - window.innerHeight
          const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
          setProgress(scrollPercent)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent">
      <div
        className="h-full rounded-r-full transition-[width] duration-150 ease-out"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #4f46e5, #7c3aed, #a855f7)',
        }}
      >
        {/* Glow tip */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-purple-400 dark:bg-purple-500 opacity-80 blur-sm"
          style={{ boxShadow: '0 0 12px rgba(168, 85, 247, 0.6)' }}
        />
      </div>
    </div>
  )
}
