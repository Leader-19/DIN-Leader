import Hero from '../components/Hero'
import Skills from '../components/Skills'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const featuredProjects = projects.slice(0, 3)

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-gray-900 dark:text-gray-100 animate-fade-in-up">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={project.title} style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-fade-in-up animation-delay-500">
            <a
              href="/projects"
              className="inline-block bg-indigo-600 dark:bg-indigo-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
