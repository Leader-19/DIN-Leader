import { useState, useEffect, useRef } from 'react'
import { skills } from '../data/skills'
import { projects } from '../data/projects'
import { experiences } from '../data/experience'
import { education } from '../data/education'
import ThemeToggle from './ThemeToggle'
import ScrollReveal from './ScrollReveal'

const skillCategories = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'database', label: 'Database' },
  { key: 'devops', label: 'DevOps & Tools' },
  { key: 'infrastructure', label: 'Infrastructure' },
  { key: 'tools', label: 'Tools' },
]

const whatIDo = [
  { title: 'Web Development', description: 'Building full-stack applications with PHP, Laravel, Vue.js, HTML, CSS, and JavaScript.' },
  { title: 'DevOps & Automation', description: 'Automating workflows with Apache Kafka, Apache NiFi, Argo CD, GitLab, Rancher, and Docker.' },
  { title: 'Roaming Administration', description: 'Performed roaming service validation with partners, including PRM and CBS systems.' },
]

const navSections = [
  { id: 'profile', label: 'Profile' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function CV() {
  const [activeSection, setActiveSection] = useState('profile')
  const sectionRefs = useRef({})

  useEffect(() => {
    const observers = []
    navSections.forEach(({ id }) => {
      const el = sectionRefs.current[id]
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  const scrollToSection = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Top bar */}
      <div className="cv-nav-float sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between h-12">
          <span className="text-sm font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
            DIN Leader — CV
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              title="Opens browser print dialog — choose 'Save as PDF' to download"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md shadow-indigo-200 dark:shadow-indigo-900/50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </button>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Section nav - desktop floating pills */}
      <nav className="cv-nav-float fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-1.5">
        {navSections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`group flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
              activeSection === id
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 scale-105'
                : 'bg-white/80 dark:bg-gray-800/80 text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-gray-800 border border-gray-200/60 dark:border-gray-700/50 hover:border-indigo-200 dark:hover:border-indigo-800/50'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full transition-colors ${
              activeSection === id ? 'bg-white' : 'bg-indigo-400/40 group-hover:bg-indigo-500'
            }`}></span>
            {label}
          </button>
        ))}
      </nav>

      {/* Mobile section nav - horizontal scroll */}
      <div className="cv-nav-float sticky top-12 z-40 xl:hidden overflow-x-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="flex gap-1 px-4 py-2 max-w-[1200px] mx-auto">
          {navSections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                activeSection === id
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* CV Container */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <div className="flex flex-col lg:flex-row gap-0 bg-white dark:bg-gray-800 rounded-2xl shadow-xl shadow-gray-200/50 dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700 overflow-hidden">

          {/* ==================== SIDEBAR ==================== */}
          <aside className="w-full lg:w-[320px] bg-gray-50 dark:bg-gray-900/60 border-r border-gray-200 dark:border-gray-700 p-6 sm:p-8 lg:p-8">
            {/* Profile */}
            <ScrollReveal animation="scale" duration={500}>
              <div className="flex flex-col items-center text-center mb-8">
                <div className="relative w-36 h-36 mb-4 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
                  <img src="/profile.jpg" alt="DIN Leader" className="relative w-full h-full rounded-full object-cover border-4 border-indigo-500 dark:border-indigo-400 shadow-lg group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h1 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-1">DIN Leader</h1>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 font-semibold">Junior Roaming & Interconnect Administrator</p>
              </div>
            </ScrollReveal>

            {/* Contact */}
            <ScrollReveal animation="fade-right" delay={150} duration={450}>
              <div className="mb-8">
                <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">Contact</h2>
                <div className="space-y-2">
                  {[
                    { href: 'mailto:din.leader@smart.com.kh', label: 'din.leader@smart.com.kh', icon: <svg className="w-4 h-4 text-indigo-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, truncate: true },
                    { href: 'tel:+85598265667', label: '+855 98265667', icon: <svg className="w-4 h-4 text-indigo-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> },
                    { href: null, label: 'Phnom Penh, Cambodia', icon: <svg className="w-4 h-4 text-indigo-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
                    { href: 'https://t.me/Leader_DEV1', label: '@Leader_DEV1', icon: <svg className="w-4 h-4 text-indigo-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" /></svg>, external: true },
                    { href: 'https://www.linkedin.com/in/leader-din-441bb0363/', label: 'LinkedIn', icon: <svg className="w-4 h-4 text-indigo-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>, external: true },
                    { href: 'https://github.com/Leader-19', label: 'GitHub', icon: <svg className="w-4 h-4 text-indigo-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>, external: true },
                  ].map((item, i) => (
                    <ScrollReveal key={i} animation="fade-right" delay={200 + i * 50} duration={350}>
                      {item.href ? (
                        <a href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors py-1 hover:translate-x-1 duration-200">
                          {item.icon}
                          <span className={item.truncate ? 'truncate' : ''}>{item.label}</span>
                        </a>
                      ) : (
                        <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 py-1">
                          {item.icon}
                          <span>{item.label}</span>
                        </div>
                      )}
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Skills */}
            <ScrollReveal animation="fade-right" delay={350} duration={450}>
              <div className="mb-8">
                <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">Skills</h2>
                <div className="space-y-4">
                  {skillCategories.map(({ key, label }) => {
                    const catSkills = skills.filter(s => s.category === key)
                    if (catSkills.length === 0) return null
                    return (
                      <div key={key}>
                        <h3 className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">{label}</h3>
                        <div className="space-y-2">
                          {catSkills.map((skill) => (
                            <div key={skill.name} className="group">
                              <div className="flex items-center justify-between mb-1">
                                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-700 dark:text-gray-300">
                                  <span className="w-2 h-2 rounded-full flex-shrink-0 cv-print-dot" style={{ backgroundColor: skill.color }}></span>
                                  {skill.name}
                                </span>
                                <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 tabular-nums">{skill.level}%</span>
                              </div>
                              <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div
                                  className="h-full rounded-full transition-all duration-700 ease-out group-hover:brightness-110"
                                  style={{ width: `${skill.level}%`, background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </ScrollReveal>

            {/* Education */}
            <ScrollReveal animation="fade-right" delay={500} duration={450}>
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">Education</h2>
                <div className="space-y-4">
                  {education.map((item, i) => (
                    <ScrollReveal key={i} animation="fade-right" delay={550 + i * 80} duration={350}>
                      <div className="hover:translate-x-1 transition-transform duration-200">
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{item.title}</h3>
                        <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">{item.school}</p>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">{item.period}</p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </aside>

          {/* ==================== MAIN CONTENT ==================== */}
          <main className="flex-1 p-6 sm:p-8 lg:p-10">

            {/* Profile */}
            <section ref={(el) => (sectionRefs.current.profile = el)} id="about" className="mb-8">
              <ScrollReveal animation="blur" duration={400}>
                <h2 className="cv-section-title"><span className="cv-section-icon">01</span>Profile</h2>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={80} duration={450}>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                  I'm a <strong className="text-gray-900 dark:text-gray-100">Junior Roaming & Interconnect Administrator</strong> and full-stack developer with strong expertise in PHP, Laravel, and Vue.js. I build web applications, POS systems, Leave Management Systems, and enterprise automation platforms.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  My experience spans modern web development with Laravel and Vue.js, as well as DevOps and data engineering with tools like Apache Kafka, Apache NiFi, Argo CD, GitLab, Rancher, Docker, and AWS. I also manage Linux and Windows servers, and work with databases including Oracle, MariaDB, and MySQL.
                </p>
              </ScrollReveal>
            </section>

            {/* What I Do */}
            <section className="mb-8">
              <ScrollReveal animation="blur" duration={400}>
                <h2 className="cv-section-title"><span className="cv-section-icon">02</span>What I Do</h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {whatIDo.map((item, i) => (
                  <ScrollReveal key={i} animation="scale" delay={i * 100} duration={400}>
                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 border border-gray-200 dark:border-gray-700 h-full">
                      <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-1">{item.title}</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>

            {/* Technical Skills */}
            <section ref={(el) => (sectionRefs.current.skills = el)} id="skills-section" className="mb-8">
              <ScrollReveal animation="blur" duration={400}>
                <h2 className="cv-section-title"><span className="cv-section-icon">03</span>Technical Skills</h2>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={80} duration={400}>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <ScrollReveal key={skill.name} animation="scale" delay={i * 20} duration={300}>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg border border-gray-200 dark:border-gray-700">
                        <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 cv-print-dot" style={{ backgroundColor: skill.color }}></span>
                        {skill.name}
                      </span>
                    </ScrollReveal>
                  ))}
                </div>
              </ScrollReveal>
            </section>

            {/* Experience */}
            <section ref={(el) => (sectionRefs.current.experience = el)} id="experience" className="mb-8">
              <ScrollReveal animation="blur" duration={400}>
                <h2 className="cv-section-title"><span className="cv-section-icon">04</span>Work Experience</h2>
              </ScrollReveal>
              <div className="space-y-5">
                {experiences.map((item, i) => (
                  <ScrollReveal key={i} animation="fade-left" delay={i * 120} duration={500}>
                    <div className="relative pl-6 border-l-2 border-indigo-200 dark:border-indigo-800">
                      <div className="absolute left-[-7px] top-1 w-3 h-3 rounded-full bg-indigo-500 border-2 border-white dark:border-gray-800"></div>
                      <div className="flex flex-wrap items-baseline gap-2 mb-1">
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{item.title}</h3>
                        <span className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">{item.company}</span>
                      </div>
                      <span className="inline-block text-[11px] font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded mb-2">{item.period}</span>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section ref={(el) => (sectionRefs.current.projects = el)} id="projects" className="mb-8">
              <ScrollReveal animation="blur" duration={400}>
                <h2 className="cv-section-title"><span className="cv-section-icon">05</span>Projects</h2>
              </ScrollReveal>
              <div className="space-y-3">
                {projects.map((project, i) => (
                  <ScrollReveal key={i} animation="fade-up" delay={i * 80} duration={450}>
                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{project.title}</h3>
                        <div className="flex gap-3 cv-nav-float">
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-medium">Code →</a>
                          {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline font-medium">Live →</a>}
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span key={t} className="px-2 py-0.5 bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-[11px] font-medium rounded border border-indigo-100 dark:border-indigo-800/50">{t}</span>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>

            {/* Contact */}
            <section ref={(el) => (sectionRefs.current.contact = el)} id="contact-section" className="mb-4">
              <ScrollReveal animation="blur" duration={400}>
                <h2 className="cv-section-title"><span className="cv-section-icon">06</span>Contact</h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: 'Email', href: 'mailto:din.leader@smart.com.kh', value: 'din.leader@smart.com.kh' },
                  { label: 'Phone', href: 'tel:+85598265667', value: '+855 98265667' },
                  { label: 'Telegram', href: 'https://t.me/Leader_DEV1', value: '@Leader_DEV1', external: true },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/leader-din-441bb0363/', value: 'linkedin.com/in/leader-din-441bb0363', external: true, breakAll: true },
                ].map((item, i) => (
                  <ScrollReveal key={item.label} animation="scale" delay={i * 80} duration={350}>
                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 border border-gray-200 dark:border-gray-700 h-full">
                      <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">{item.label}</h3>
                      <a href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined} className={`text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline${item.breakAll ? ' break-all' : ''}`}>{item.value}</a>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
