import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left animate-slide-in-left">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-fade-in-up leading-tight">
              Hi, I'm Leader
            </h1>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-3xl animate-fade-in-up animation-delay-200">
              Junior Roaming & Interconnect Administrator at Smart Axiata. I specialize in PHP, Laravel, Vue.js, and enterprise automation with Apache Kafka, NiFi, Argo CD, Docker, and Rancher.
            </p>
            <div className="flex flex-col sm:flex-row mt-10 gap-3 sm:gap-4 justify-center md:justify-start animate-fade-in-up animation-delay-400">
              <Link
                to="/projects"
                className="bg-indigo-600 dark:bg-indigo-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-white transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0 animate-scale-in animation-delay-300">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-64 h-64 md:w-80 md:h-80 object-cover shadow-2xl border-4 border-indigo-100 dark:border-gray-700 animate-pulse-glow"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
