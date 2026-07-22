export default function ProjectCard({ title, description, tech, github, demo, image }) {
  const hasImage = image && image.trim() !== ''

  return (
    <div className="group relative bg-white dark:bg-gray-800/80 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700/50 hover:border-indigo-200 dark:hover:border-indigo-800/50 transition-all duration-400 hover:shadow-2xl hover:shadow-indigo-100/50 dark:hover:shadow-indigo-900/30 h-full flex flex-col">
      <div className={`relative overflow-hidden ${hasImage ? 'h-48' : 'h-14'} bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700/30 dark:to-gray-700/30`}>
        {hasImage ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-indigo-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 group-hover:scale-105 transition-transform duration-500">
            <div className="text-center px-6 py-4">
              <div className="text-3xl mb-3 opacity-70">
                {title.toLowerCase().includes('music') ? '🎵' : title.toLowerCase().includes('weather') ? '🌤️' : title.toLowerCase().includes('pos') || title.toLowerCase().includes('leave') ? '📋' : title.toLowerCase().includes('automation') ? '⚙️' : title.toLowerCase().includes('ci/cd') ? '🚀' : '💻'}
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 line-clamp-2">{title}</h3>
            </div>
          </div>
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 dark:from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-5 md:p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 text-sm leading-relaxed line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((item) => (
            <span
              key={item}
              className="px-2.5 py-1 bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs font-medium rounded-lg"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700/50">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Code
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
