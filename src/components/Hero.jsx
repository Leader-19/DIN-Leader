import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-100/50 via-transparent to-transparent dark:from-indigo-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-purple-100/50 via-transparent to-transparent dark:from-purple-900/20"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] md:w-[600px] md:h-[600px] bg-indigo-200/30 dark:bg-indigo-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-24 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          <div className="w-full md:flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-indigo-200/50 dark:border-indigo-700/50 text-xs sm:text-sm text-indigo-700 dark:text-indigo-300 font-medium mb-4 md:mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
              </span>
              Available for opportunities
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-5 leading-[1.1] tracking-tight">
              Hi, I'm{' '}
              <span className="gradient-text">Leader</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4 md:mb-6 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              A <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Junior Roaming & Interconnect Administrator</span> and full-stack developer bridging enterprise telecom systems with modern software engineering.
            </p>

            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Specializing in PHP, Laravel, Vue.js, Node.js, Apache Kafka, NiFi, Argo CD, Docker, and Rancher.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start mb-8 md:mb-10">
              <Link
                to="/projects"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 hover:shadow-xl hover:-translate-y-0.5 text-sm sm:text-base"
              >
                View Projects
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 glass border-2 border-indigo-600/30 dark:border-indigo-400/30 text-indigo-700 dark:text-indigo-300 px-6 sm:px-8 py-3 rounded-xl font-semibold hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
              >
                Contact Me
              </Link>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-6 sm:gap-8 md:gap-12">
              {[
                { value: '26+', label: 'Technologies', icon: '💻' },
                { value: '8+', label: 'Projects', icon: '🚀' },
                { value: '1+', label: 'Years Exp.', icon: '⭐' },
              ].map((stat, i) => (
                <div key={i} className="text-center min-w-[80px] animate-fade-in-up" style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold gradient-text mb-1">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs md:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-shrink-0 relative animate-scale-in mx-auto md:mx-0">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <div className="absolute -inset-2 md:-inset-3 bg-gradient-to-br from-indigo-400 via-purple-400 to-indigo-600 rounded-full opacity-25 blur-2xl animate-pulse"></div>
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-400 via-purple-400 to-indigo-600 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }}>
                <div className="w-full h-full rounded-full border-2 border-transparent border-t-indigo-300 border-r-purple-300"></div>
              </div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 sm:border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
