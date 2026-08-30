import { useEffect, useState } from 'react'

const COLORS = ['#6366f1', '#8b5cf6', '#a855f7', '#22c55e', '#f59e0b', '#ec4899', '#06b6d4', '#f43f5e']
const PARTICLE_COUNT = 60

function randomBetween(min, max) {
  return Math.random() * (max - min) + min
}

export default function Confetti({ active }) {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    if (!active) {
      setParticles([])
      return
    }

    const newParticles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      x: randomBetween(5, 95),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      size: randomBetween(4, 10),
      delay: randomBetween(0, 0.4),
      duration: randomBetween(1.2, 2.2),
      rotateEnd: randomBetween(-360, 360),
      driftX: randomBetween(-80, 80),
      driftY: randomBetween(-350, -120),
      shape: Math.random() > 0.5 ? 'circle' : 'rect',
    }))
    setParticles(newParticles)
  }, [active])

  if (!active || particles.length === 0) return null

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: '60%',
            width: `${p.size}px`,
            height: p.shape === 'rect' ? `${p.size * 0.6}px` : `${p.size}px`,
            backgroundColor: p.color,
            borderRadius: p.shape === 'circle' ? '50%' : '2px',
            opacity: 0,
            animation: `confetti-burst ${p.duration}s ease-out ${p.delay}s forwards`,
            '--drift-x': `${p.driftX}px`,
            '--drift-y': `${p.driftY}px`,
            '--rotate-end': `${p.rotateEnd}deg`,
          }}
        />
      ))}
      {/* Success banner */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[101] animate-fade-in-up">
        <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white dark:bg-gray-800 shadow-xl shadow-emerald-200/50 dark:shadow-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50">
          <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
            <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900 dark:text-gray-100">Message Sent!</p>
            <p className="text-xs text-slate-500 dark:text-gray-400">I'll get back to you soon.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
