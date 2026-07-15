import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-gray-100">My Projects</h1>
        <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 mb-8 md:mb-18">
          Here are some of the projects I've worked on recently.
        </p>
        <div className="grid grid-cols-1 mt-4 md:mt-5 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}
