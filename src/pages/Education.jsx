import { education } from '../data/education'
import TimelineCard from '../components/TimelineCard'

export default function Education() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-indigo-100/20 dark:bg-indigo-900/10 rounded-full blur-3xl"></div>

      <section className="py-12 md:py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 md:mb-20">
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 mb-6">
              <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm0 0v6" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight mb-4">
              Education
            </h1>
            <p className="text-base md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              My academic journey and educational background.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {education.map((item, index) => (
              <TimelineCard
                key={index}
                item={item}
                index={index}
                isLast={index === education.length - 1}
                type="education"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
