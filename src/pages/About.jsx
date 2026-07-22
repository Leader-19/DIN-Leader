import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-100/30 dark:bg-indigo-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-purple-100/20 dark:bg-purple-900/10 rounded-full blur-3xl"></div>

      <section className="py-12 md:py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-14">
            <div className="flex-shrink-0 animate-fade-in-up w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
              <div className="relative w-full h-full">
                <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-full opacity-20 blur-2xl animate-pulse"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-full animate-spin-slow" style={{ animationDuration: '25s' }}>
                  <div className="w-full h-full rounded-full border-2 border-transparent border-t-indigo-300 border-r-purple-300"></div>
                </div>
                <img
                  src="/about.jpg"
                  alt="About Me"
                  className="relative w-full h-full object-cover shadow-2xl border-4 border-white dark:border-gray-800 rounded-full"
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left animate-fade-in-up animation-delay-200">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-5 tracking-tight">
                About <span className="gradient-text">Me</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
                I'm a <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Junior Roaming & Interconnect Administrator</span> and full-stack developer with strong expertise in PHP, Laravel, and Vue.js. I build web applications, POS systems, Leave Management Systems, and enterprise automation platforms.
              </p>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                My experience spans modern web development with Laravel and Vue.js, as well as DevOps and data engineering with tools like Apache Kafka, Apache NiFi, Argo CD, GitLab, Rancher, Docker, and AWS. I also manage Linux and Windows servers, and work with databases including Oracle, MariaDB, and MySQL using tools like DBeaver and FileZilla.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link to="/projects" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 hover:shadow-xl hover:-translate-y-0.5">
                  View Projects
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 glass border-2 border-indigo-600/30 dark:border-indigo-400/30 text-indigo-700 dark:text-indigo-300 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 transition-all duration-300 hover:-translate-y-0.5">
                  Contact Me
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 md:mt-24">
            <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-12 md:mb-14 tracking-tight text-gray-900 dark:text-gray-100">
              What I Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="group relative bg-white dark:bg-gray-800/80 rounded-2xl p-5 md:p-7 shadow-sm dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700/50 hover:border-indigo-100 dark:hover:border-indigo-900/30 transition-all duration-400 hover:-translate-y-1 hover:shadow-xl animate-fade-in-up animation-delay-100 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="w-11 h-11 md:w-12 md:h-12 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl flex items-center justify-center mb-4 md:mb-5 shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Web Development</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                  Building full-stack applications with PHP, Laravel, Vue.js, HTML, CSS, and JavaScript. Develop inhouse system with Laravel, Inertia js, Vue js. Build Automation such as Bill Run, Roaming Automation, CN/DN Automation, TAP File Validation Automation, Dynamic Dashboard, Interconnect Automation.
                </p>
              </div>
              <div className="group relative bg-white dark:bg-gray-800/80 rounded-2xl p-5 md:p-7 shadow-sm dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700/50 hover:border-indigo-100 dark:hover:border-indigo-900/30 transition-all duration-400 hover:-translate-y-1 hover:shadow-xl animate-fade-in-up animation-delay-200 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="w-11 h-11 md:w-12 md:h-12 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl flex items-center justify-center mb-4 md:mb-5 shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">DevOps & Automation</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                  Automating workflows with Apache Kafka, Apache NiFi, Argo CD, GitLab, Rancher, and Docker. Mange Kubenet on Rancher, Monitor resource on rancher, Increase resource on Rancher, add Load balance.
                </p>
              </div>
              <div className="group relative bg-white dark:bg-gray-800/80 rounded-2xl p-5 md:p-7 shadow-sm dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700/50 hover:border-indigo-100 dark:hover:border-indigo-900/30 transition-all duration-400 hover:-translate-y-1 hover:shadow-xl animate-fade-in-up animation-delay-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="w-11 h-11 md:w-12 md:h-12 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl flex items-center justify-center mb-4 md:mb-5 shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Roaming Adminstrator</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                  Performed roaming service validation with partners, including PRM and CBS systems, and investigated and resolved compliance issues and customer complaints. Support End-to-End with partner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
