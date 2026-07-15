import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const linkClass = (path) => {
    const isActive = location.pathname === path
    return `block px-3 py-2 text-sm font-medium transition-colors ${
      isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
    }`
  }

  const NavLinks = () => (
    <>
      <Link to="/" className={linkClass('/')} onClick={() => setMobileOpen(false)}>
        Home
      </Link>
      <Link to="/about" className={linkClass('/about')} onClick={() => setMobileOpen(false)}>
        About
      </Link>
      <Link to="/education" className={linkClass('/education')} onClick={() => setMobileOpen(false)}>
        Education
      </Link>
      <Link to="/experience" className={linkClass('/experience')} onClick={() => setMobileOpen(false)}>
        Experience
      </Link>
      <Link to="/projects" className={linkClass('/projects')} onClick={() => setMobileOpen(false)}>
        Projects
      </Link>
      <Link to="/contact" className={linkClass('/contact')} onClick={() => setMobileOpen(false)}>
        Contact
      </Link>
      <ThemeToggle />
    </>
  )

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl md:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              DIN Leader
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <NavLinks />
          </div>

          <div className="flex items-center md:hidden gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
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
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            <NavLinks />
          </div>
        </div>
      )}
    </nav>
  )
}
