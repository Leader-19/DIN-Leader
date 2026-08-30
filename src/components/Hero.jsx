import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const blob1Ref = useRef(null)
  const blob2Ref = useRef(null)
  const blob3Ref = useRef(null)
  const blob4Ref = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY
          // Different speeds for depth effect
          if (blob1Ref.current) blob1Ref.current.style.transform = `translate(25%, -50%) translateY(${scrollY * 0.15}px)`
          if (blob2Ref.current) blob2Ref.current.style.transform = `translate(-25%, 50%) translateY(${scrollY * 0.25}px)`
          if (blob3Ref.current) blob3Ref.current.style.transform = `translate(0, 0) translateY(${scrollY * 0.08}px)`
          if (blob4Ref.current) blob4Ref.current.style.transform = `translate(0, 0) translateY(${scrollY * 0.12}px)`
          if (contentRef.current) contentRef.current.style.transform = `translateY(${scrollY * 0.3}px)`
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-[90vh] md:min-h-[92vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-[#111827] dark:to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-100/60 via-transparent to-transparent dark:from-indigo-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100/60 via-transparent to-transparent dark:from-purple-900/30"></div>
        <div ref={blob1Ref} className="absolute top-0 right-0 w-[500px] h-[500px] md:w-[600px] md:h-[600px] bg-indigo-200/40 dark:bg-indigo-900/25 rounded-full blur-3xl will-change-transform" style={{ transform: 'translate(25%, -50%)' }}></div>
        <div ref={blob2Ref} className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-purple-200/40 dark:bg-purple-900/25 rounded-full blur-3xl will-change-transform" style={{ transform: 'translate(-25%, 50%)' }}></div>
        {/* Extra decorative blobs */}
        <div ref={blob3Ref} className="absolute top-1/3 left-1/4 w-64 h-64 bg-indigo-300/20 dark:bg-indigo-800/15 rounded-full blur-3xl animate-float hidden md:block will-change-transform"></div>
        <div ref={blob4Ref} className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-300/20 dark:bg-purple-800/15 rounded-full blur-3xl animate-float animation-delay-500 hidden md:block will-change-transform"></div>
      </div>

      <div ref={contentRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-24 w-full will-change-transform">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          <div className="w-full md:flex-1 text-center md:text-left">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-indigo-200/50 dark:border-indigo-700/50 text-xs sm:text-sm text-indigo-700 dark:text-indigo-300 font-medium mb-4 md:mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Available for opportunities
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-5 leading-[1.1] tracking-tight">
              Hi, I'm{' '}
              <span className="gradient-text">Leader</span>
            </h1>

            {/* Role */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-gray-300 mb-4 md:mb-6 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              A <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Junior Roaming & Interconnect Administrator</span> and full-stack developer bridging enterprise telecom systems with modern software engineering.
            </p>

            {/* Skills preview */}
            <p className="text-sm sm:text-base text-slate-500 dark:text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Specializing in PHP, Laravel, Vue.js, Node.js, Apache Kafka, NiFi, Argo CD, Docker, and Rancher.
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6 md:mb-8">
              {['Laravel', 'Vue.js', 'PHP', 'Docker', 'Nifi', 'Rancher', 'Kubernetes', 'Argo CD'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-semibold rounded-lg bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800/50 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start mb-8 md:mb-10">
              <Link
                to="/projects"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 hover:shadow-xl hover:-translate-y-0.5 text-sm sm:text-base"
              >
                View Projects
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 glass border-2 border-indigo-500/40 dark:border-indigo-400/40 text-indigo-700 dark:text-indigo-300 px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-indigo-50/80 dark:hover:bg-indigo-900/30 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Contact Me
              </Link>
            </div>

            {/* Social links */}
            <div className="flex justify-center md:justify-start gap-3 mb-8 md:mb-10">
              <a
                href="https://github.com/Leader-19"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass border border-slate-200/60 dark:border-white/8 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-800/50 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/leader-din-441bb0363/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass border border-slate-200/60 dark:border-white/8 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-800/50 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://t.me/Leader_DEV1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass border border-slate-200/60 dark:border-white/8 flex items-center justify-center text-slate-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-200 dark:hover:border-indigo-800/50 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 sm:gap-8 md:gap-12">
              {[
                { value: '26+', label: 'Technologies', icon: '' },
                { value: '8+', label: 'Projects', icon: '' },
                { value: '1+', label: 'Years Exp.', icon: '' },
              ].map((stat, i) => (
                <div key={i} className="text-center min-w-[80px] animate-fade-in-up" style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold gradient-text mb-1">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-slate-500 dark:text-gray-400 uppercase tracking-wider font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 relative animate-scale-in mx-auto md:mx-0">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Glow */}
              <div className="absolute -inset-2 md:-inset-3 bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-700 rounded-full opacity-30 blur-2xl animate-pulse"></div>
              {/* Spinning ring */}
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-700 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }}>
                <div className="w-full h-full rounded-full border-2 border-transparent border-t-indigo-300 border-r-purple-300"></div>
              </div>
              {/* Inner ring */}
              <div className="absolute -inset-0.5 bg-gradient-to-tl from-purple-400/40 to-indigo-400/40 rounded-full animate-spin-slow hidden md:block" style={{ animationDuration: '30s', animationDirection: 'reverse' }}>
                <div className="w-full h-full rounded-full border border-transparent border-b-purple-300/50 border-l-indigo-300/50"></div>
              </div>
              {/* Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 sm:border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating tech badges around image */}
              <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 px-2.5 py-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-indigo-100 dark:border-indigo-800/50 text-xs font-bold text-indigo-600 dark:text-indigo-400 animate-float">
                Laravel
              </div>
              <div className="absolute top-1/4 -left-8 md:-left-10 px-2.5 py-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-emerald-100 dark:border-emerald-800/50 text-xs font-bold text-emerald-600 dark:text-emerald-400 animate-float animation-delay-200">
                Docker
              </div>
              <div className="absolute top-1/2 -right-8 md:-right-10 px-2.5 py-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-cyan-100 dark:border-cyan-800/50 text-xs font-bold text-cyan-600 dark:text-cyan-400 animate-float animation-delay-300">
                PHP
              </div>
              <div className="absolute bottom-1/4 -left-8 md:-left-10 px-2.5 py-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-purple-100 dark:border-purple-800/50 text-xs font-bold text-purple-600 dark:text-purple-400 animate-float animation-delay-400">
                Vue.js
              </div>
              <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 px-2.5 py-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-orange-100 dark:border-orange-800/50 text-xs font-bold text-orange-600 dark:text-orange-400 animate-float animation-delay-500">
                Argo CD
              </div>
              <div className="absolute top-1/3 right-0 translate-x-full ml-3 px-2.5 py-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-rose-100 dark:border-rose-800/50 text-xs font-bold text-rose-600 dark:text-rose-400 animate-float animation-delay-600 hidden lg:block">
                Rancher
              </div>
              <div className="absolute bottom-1/3 left-0 -translate-x-full mr-3 px-2.5 py-1 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-teal-100 dark:border-teal-800/50 text-xs font-bold text-teal-600 dark:text-teal-400 animate-float animation-delay-700 hidden lg:block">
                DBeaver
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade-out */}
      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 bg-gradient-to-t from-gray-50 dark:from-gray-900 via-gray-50/80 dark:via-gray-900/80 to-transparent pointer-events-none"></div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block z-10">
        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
