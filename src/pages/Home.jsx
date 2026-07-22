import Hero from '../components/Hero'
import Skills from '../components/Skills'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const featuredProjects = projects.slice(0, 3)

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="relative">
        <div className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-200 dark:via-indigo-800 to-transparent"></div>
      </div>
      <Skills />
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 relative">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-indigo-100/30 dark:bg-indigo-900/10 rounded-full blur-3xl translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 md:mb-14">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 tracking-tight text-gray-900 dark:text-gray-100 animate-fade-in-up">
              Featured Projects
            </h2>
            <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
              A selection of recent work that showcases my skills and experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project, index) => (
              <div key={project.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12 md:mt-16 animate-fade-in-up animation-delay-500">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 hover:shadow-xl hover:-translate-y-0.5 group"
            >
              View All Projects
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
