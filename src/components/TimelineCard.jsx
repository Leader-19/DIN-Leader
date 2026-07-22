export default function TimelineCard({ item, index, isLast: _isLast, type = 'experience' }) {
  const isExperience = type === 'experience'
  return (
    <div className="relative pl-14 md:pl-0 animate-fade-in-up" style={{ animationDelay: `${index * 0.12}s` }}>
      <div className="absolute left-[18px] top-2 bottom-[-24px] w-px bg-gradient-to-b from-indigo-200 via-indigo-300 to-transparent dark:from-indigo-800 dark:via-indigo-700 dark:to-transparent md:left-1/2 md:-translate-x-px"></div>

      <div className="absolute left-0 top-1 md:left-1/2 md:-translate-x-1/2">
        <div className="relative">
          <div className="absolute inset-0 bg-indigo-500/30 rounded-full animate-ping"></div>
          <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 text-xs font-bold">
            {index + 1}
          </div>
        </div>
      </div>

      <div className={`group relative ${
        index % 2 === 0 ? 'md:mr-[calc(50%+24px)] md:text-left' : 'md:ml-[calc(50%+24px)] md:text-left'
      }`}>
        <div className="relative bg-white dark:bg-gray-800/80 rounded-2xl p-5 md:p-6 shadow-sm dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700/50 hover:shadow-xl hover:border-indigo-100 dark:hover:border-indigo-800/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>

          <div className="relative">
            <span className="inline-block px-3 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/40 dark:to-purple-900/40 text-indigo-700 dark:text-indigo-300 text-xs font-bold rounded-full mb-3 border border-indigo-100 dark:border-indigo-800/50">
              {item.period || item.title}
            </span>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">
              {isExperience ? item.title : item.title}
            </h3>
            {isExperience ? (
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold mt-1 text-sm md:text-base">
                {item.company}
              </p>
            ) : (
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold mt-1 text-sm md:text-base">
                {item.school}
              </p>
            )}
            <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed text-sm">
              {item.description}
            </p>
          </div>

          <div className="absolute top-4 right-4 w-2 h-2 bg-indigo-400/30 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-400/30 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
