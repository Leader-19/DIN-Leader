import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkClass = (path) => {
    const isActive = location.pathname === path
    return `relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
      isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
    } ${
      isActive ? 'after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-indigo-600 dark:after:bg-indigo-400 after:rounded-full' : ''
    }`
  }

  const navLinks = ['/', '/about', '/education', '/experience', '/projects', '/contact']
  const labels = ['Home', 'About', 'Education', 'Experience', 'Projects', 'Contact']

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'glass border-b border-indigo-100/50 dark:border-indigo-900/30 shadow-sm'
        : 'glass border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
            DIN Leader
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((path, i) => (
              <Link key={path} to={path} className={linkClass(path)}>
                {labels[i]}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex items-center md:hidden gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass border-t border-indigo-100/50 dark:border-indigo-900/30">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((path, i) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === path
                    ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/10'
                }`}
              >
                {labels[i]}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
