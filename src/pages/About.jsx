import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const whatIDo = [
  {
    title: 'Web Development',
    description: 'Building full-stack applications with PHP, Laravel, Vue.js, HTML, CSS, and JavaScript. Develop inhouse system with Laravel, Inertia js, Vue js. Build Automation such as Bill Run, Roaming Automation, CN/DN Automation, TAP File Validation Automation, Dynamic Dashboard, Interconnect Automation.',
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-indigo-500 to-blue-600',
    glow: 'from-indigo-500/10 to-blue-500/10',
  },
  {
    title: 'DevOps & Automation',
    description: 'Automating workflows with Apache Kafka, Apache NiFi, Argo CD, GitLab, Rancher, and Docker. Manage Kubenet on Rancher, Monitor resource on rancher, Increase resource on Rancher, add Load balance.',
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    color: 'from-purple-500 to-pink-600',
    glow: 'from-purple-500/10 to-pink-500/10',
  },
  {
    title: 'Roaming Administrator',
    description: 'Performed roaming service validation with partners, including PRM and CBS systems, and investigated and resolved compliance issues and customer complaints. Support End-to-End with partner.',
    icon: (
      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-emerald-500 to-teal-600',
    glow: 'from-emerald-500/10 to-teal-500/10',
  },
]

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-100/40 dark:bg-indigo-900/15 rounded-full blur-3xl hidden md:block"></div>
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-purple-100/30 dark:bg-purple-900/15 rounded-full blur-3xl hidden md:block"></div>

      <section className="py-10 md:py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro section */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-14">
            {/* Profile image */}
            <ScrollReveal animation="fade-right" className="flex-shrink-0 w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72">
              <div className="relative w-full h-full">
                <div className="absolute -inset-1 sm:-inset-2 md:-inset-4 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-full opacity-20 blur-2xl animate-pulse"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-full animate-spin-slow hidden sm:block" style={{ animationDuration: '25s' }}>
                  <div className="w-full h-full rounded-full border-2 border-transparent border-t-indigo-300 border-r-purple-300"></div>
                </div>
                <img
                  src="/about.jpg"
                  alt="About Me"
                  className="relative w-full h-full object-cover shadow-2xl border-2 sm:border-4 border-white dark:border-gray-800 rounded-full"
                />
              </div>
            </ScrollReveal>

            {/* Bio text */}
            <ScrollReveal animation="fade-left" delay={200} className="flex-1 text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-5 tracking-tight">
                About <span className="gradient-text">Me</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-gray-300 mb-4 md:mb-5 leading-relaxed">
                I'm a <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Junior Roaming & Interconnect Administrator</span> and full-stack developer with strong expertise in PHP, Laravel, and Vue.js. I build web applications, POS systems, Leave Management Systems, and enterprise automation platforms.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed">
                My experience spans modern web development with Laravel and Vue.js, as well as DevOps and data engineering with tools like Apache Kafka, Apache NiFi, Argo CD, GitLab, Rancher, Docker, and AWS. I also manage Linux and Windows servers, and work with databases including Oracle, MariaDB, and MySQL using tools like DBeaver and FileZilla.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <Link to="/projects" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-5 sm:px-6 py-2.5 rounded-xl font-semibold transition-all shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 hover:shadow-xl hover:-translate-y-0.5 text-sm sm:text-base">
                  View Projects
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 glass border-2 border-indigo-500/40 dark:border-indigo-400/40 text-indigo-700 dark:text-indigo-300 px-5 sm:px-6 py-2.5 rounded-xl font-semibold hover:bg-indigo-50/80 dark:hover:bg-indigo-900/30 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base">
                  Contact Me
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* What I Do cards */}
          <ScrollReveal animation="fade-up" delay={100} className="mt-12 md:mt-20">
            <div className="text-center mb-8 md:mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-100 dark:border-indigo-800/50">
                What I Do
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                Skills & Expertise
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {whatIDo.map((item, index) => (
                <ScrollReveal key={item.title} animation="fade-up" delay={index * 150}>
                <div
                  className="group relative bg-white dark:bg-gray-800/80 rounded-2xl p-5 sm:p-6 md:p-7 shadow-sm dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700/50 hover:border-indigo-100 dark:hover:border-indigo-900/30 transition-all duration-400 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
                  style={{ animationDelay: `${(index + 1) * 0.15}s` }}
                >
                  {/* Glow effect */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.glow} rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500`}></div>
                  {/* Number badge */}
                  <div className="absolute top-4 right-4 text-5xl font-extrabold text-gray-100 dark:text-gray-800/50 select-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  {/* Icon */}
                  <div className={`w-11 h-11 md:w-12 md:h-12 bg-gradient-to-br ${item.color} text-white rounded-2xl flex items-center justify-center mb-4 md:mb-5 shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{item.title}</h3>
                  <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
