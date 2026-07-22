import { experiences } from '../data/experience'
import TimelineCard from '../components/TimelineCard'

export default function Experience() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute top-20 left-1/2 w-[600px] h-[600px] bg-indigo-100/20 dark:bg-indigo-900/10 rounded-full blur-3xl -translate-x-1/2"></div>

      <section className="py-12 md:py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 md:mb-20">
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 mb-6">
              <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M12 18h.01M7 21h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight mb-4">
              Work Experience
            </h1>
            <p className="text-base md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              My professional journey and career milestones.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {experiences.map((item, index) => (
              <TimelineCard
                key={index}
                item={item}
                index={index}
                isLast={index === experiences.length - 1}
                type="experience"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
