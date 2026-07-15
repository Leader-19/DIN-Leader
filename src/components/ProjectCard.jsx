export default function ProjectCard({ title, description, tech, github, demo }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-900/50 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1 animate-scale-in h-full">
      <div className="p-4 md:p-6 flex-1 flex flex-col">
        <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-3 md:mb-4 flex-1 text-sm md:text-base">{description}</p>
        <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
          {tech.map((item, index) => (
            <span
              key={item}
              className="px-2 py-1 md:px-3 md:py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs md:text-sm rounded-full animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-2 md:gap-3 mt-auto">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium text-sm transition-colors hover:underline"
          >
            GitHub
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium text-sm transition-colors hover:underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
