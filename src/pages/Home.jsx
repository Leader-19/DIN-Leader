import Hero from '../components/Hero'
import Skills from '../components/Skills'
import ProjectCard from '../components/ProjectCard'
import ScrollReveal from '../components/ScrollReveal'
import { projects } from '../data/projects'

const featuredProjects = projects.slice(0, 3)

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <div className="relative">
        <div className="absolute h-px bg-gradient-to-r from-transparent via-indigo-300 dark:via-indigo-700 to-transparent"></div>
      </div>
      <ScrollReveal animation="fade-up" duration={800}>
        <Skills />
      </ScrollReveal>
      <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900 relative">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-indigo-100/30 dark:bg-indigo-900/10 rounded-full blur-3xl translate-x-1/3 hidden md:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-2xl md:text-4xl font-extrabold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
                Featured Projects
              </h2>
              <p className="text-base md:text-lg text-slate-500 dark:text-gray-400 max-w-2xl mx-auto">
                A selection of recent work that showcases my skills and experience.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.title} animation="scale" delay={index * 120}>
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-up" delay={400}>
            <div className="text-center mt-10 md:mt-16">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 hover:shadow-xl hover:-translate-y-0.5 group text-sm sm:text-base"
              >
                View All Projects
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
