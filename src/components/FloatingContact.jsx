import { useState, useEffect } from 'react'

export default function FloatingContact() {
  const [visible, setVisible] = useState(false)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-24 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      {/* Expanded links */}
      <div
        className={`flex flex-col gap-2 transition-all duration-300 ${
          expanded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
        }`}
      >
        {/* Telegram */}
        <a
          href="https://t.me/Leader_DEV1"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 pl-4 pr-3 py-2.5 rounded-full bg-white dark:bg-gray-800 shadow-lg shadow-gray-200/80 dark:shadow-gray-900/80 border border-slate-200/80 dark:border-gray-700/50 hover:border-blue-200 dark:hover:border-blue-800/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          aria-label="Chat on Telegram"
        >
          <span className="text-xs font-semibold text-slate-600 dark:text-gray-300 whitespace-nowrap group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            Telegram
          </span>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md shadow-blue-200 dark:shadow-blue-900/50 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
            </svg>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/leader-din-441bb0363/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 pl-4 pr-3 py-2.5 rounded-full bg-white dark:bg-gray-800 shadow-lg shadow-gray-200/80 dark:shadow-gray-900/80 border border-slate-200/80 dark:border-gray-700/50 hover:border-blue-200 dark:hover:border-blue-800/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          aria-label="Connect on LinkedIn"
        >
          <span className="text-xs font-semibold text-slate-600 dark:text-gray-300 whitespace-nowrap group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            LinkedIn
          </span>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-md shadow-blue-200 dark:shadow-blue-900/50 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
          </div>
        </a>
      </div>

      {/* Main FAB button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-14 h-14 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center ${expanded ? 'rotate-45' : ''}`}
        aria-label="Contact me"
      >
        {expanded ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </div>
  )
}
