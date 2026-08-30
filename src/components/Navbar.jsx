import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/education', label: 'Education' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-white/20 dark:border-white/5 shadow-[0_1px_3px_rgba(0,0,0,0.05)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="relative text-xl md:text-2xl font-extrabold tracking-tight group"
          >
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent dark:from-indigo-400 dark:via-purple-400 dark:to-indigo-400 bg-[length:200%_auto] group-hover:animate-[gradient-shift_2s_ease_infinite]">
              DIN Leader
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 bg-slate-100/70 dark:bg-white/5 rounded-full px-1.5 py-1 border border-slate-200/60 dark:border-white/8">
            {navLinks.map(({ path, label }) => {
              const isActive = location.pathname === path
              return (
                <Link
                  key={path}
                  to={path}
                  className={`relative px-4 py-1.5 text-[13px] font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? 'text-white dark:text-white'
                      : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-gray-200'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-full shadow-md shadow-indigo-500/25 dark:shadow-indigo-500/20" />
                  )}
                  <span className="relative z-10">{label}</span>
                </Link>
              )
            })}
            <div className="w-px h-5 bg-gray-300/50 dark:bg-white/10 mx-1" />
            <ThemeToggle />
          </div>

          {/* Mobile: Theme + Hamburger */}
          <div className="flex items-center md:hidden gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative w-10 h-10 rounded-xl flex items-center justify-center text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-200"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
                    mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${
                    mobileOpen ? 'opacity-0 scale-x-0' : ''
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 origin-center ${
                    mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-out ${
          mobileOpen
            ? 'max-h-[400px] opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="glass border-t border-slate-200/60 dark:border-white/8 px-4 py-3">
          <div className="space-y-1">
            {navLinks.map(({ path, label }, i) => {
              const isActive = location.pathname === path
              return (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/20'
                      : 'text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                  style={{
                    animationDelay: `${i * 50}ms`,
                    animation: mobileOpen
                      ? `fadeInUp 0.3s cubic-bezier(0.22, 1, 0.36, 1) ${i * 50}ms both`
                      : 'none',
                  }}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      isActive ? 'bg-white' : 'bg-indigo-400/50'
                    }`}
                  />
                  {label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
