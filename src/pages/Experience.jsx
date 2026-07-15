import { experiences } from '../data/experience'

export default function Experience() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <section className="py-12 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight mb-4">
              Experience
            </h1>
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My professional work experience and career journey.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-200 via-indigo-300 to-indigo-200 transform md:-translate-x-1/2"></div>
            <div className="space-y-8 md:space-y-10">
              {experiences.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center animate-fade-in-up ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'} pl-10 md:pl-0`}>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 md:p-6 shadow-sm dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                      <span className="inline-block px-3 py-1 bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-sm rounded-full font-semibold mb-3">
                        {item.period}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">{item.title}</h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-semibold mt-1">{item.company}</p>
                      <p className="text-gray-600 dark:text-gray-300 mt-3 leading-relaxed text-sm md:text-base">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-3 md:left-1/2 w-3 h-3 md:w-4 md:h-4 bg-indigo-600 dark:bg-indigo-500 rounded-full border-2 md:border-4 border-white dark:border-gray-900 shadow-lg transform -translate-x-1/2 mt-1 md:mt-0 ring-2 md:ring-4 ring-indigo-100 dark:ring-indigo-900/50"></div>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-10' : 'md:pr-10'} pl-10 md:pl-0 md:pr-0`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
