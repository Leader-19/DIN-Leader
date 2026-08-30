import { skills } from '../data/skills'
import {
  SiPhp, SiLaravel, SiVuedotjs, SiInertia, SiBootstrap, SiTailwindcss,
  SiJavascript, SiNodedotjs, SiMysql, SiMariadb, SiPostgresql, SiApachekafka, SiApachenifi, SiArgo,
  SiRancher, SiDocker, SiGitlab, SiGit, SiUbuntu, SiPostman, SiLinux,
  SiFilezilla, SiDbeaver, SiHtml5
} from 'react-icons/si'
import { DiWindows } from 'react-icons/di'
import { FaJava } from 'react-icons/fa'

const categories = [
  { key: 'frontend', label: 'Frontend', color: 'from-blue-500 to-indigo-600', emoji: '' },
  { key: 'backend', label: 'Backend', color: 'from-emerald-500 to-green-600', emoji: '' },
  { key: 'database', label: 'Database', color: 'from-orange-500 to-amber-600', emoji: '' },
  { key: 'devops', label: 'DevOps & Tools', color: 'from-purple-500 to-pink-600', emoji: '' },
  { key: 'infrastructure', label: 'Infrastructure', color: 'from-cyan-500 to-teal-600', emoji: '' },
  { key: 'tools', label: 'Tools', color: 'from-rose-500 to-red-600', emoji: '' },
]

const iconMap = {
  'PHP': SiPhp,
  'Laravel': SiLaravel,
  'Vue JS': SiVuedotjs,
  'Inertia JS': SiInertia,
  'Boostrap': SiBootstrap,
  'Tailwindcss': SiTailwindcss,
  'JavaScript': SiJavascript,
  'Node.js': SiNodedotjs,
  'HTML': SiHtml5,
  'CSS': () => <span className="text-white font-bold text-xs">CSS</span>,
  'MySQL': SiMysql,
  'MariaDB': SiMariadb,
  'PostgreSQL': SiPostgresql,
  'SQL Server': () => <span className="text-white font-bold text-[10px]">MSSQL</span>,
  'Oracle': () => <span className="text-white font-bold text-xs">ORCL</span>,
  'Apache Kafka': SiApachekafka,
  'Apache NiFi': SiApachenifi,
  'Argo CD': SiArgo,
  'Rancher': SiRancher,
  'Docker': SiDocker,
  'Postman': SiPostman,
  'SoapUI': FaJava,
  'Linux Server': SiLinux,
  'Windows Server': DiWindows,
  'GitLab': SiGitlab,
  'Git': SiGit,
  'DBeaver': SiDbeaver,
  'FileZilla': SiFilezilla,
  'AWS': () => <div className="w-6 h-6 flex items-center justify-center font-bold text-white text-xs">AWS</div>,
  'Ubuntu': SiUbuntu,
}

export default function Skills() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#111827] relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-indigo-100/50 dark:bg-indigo-900/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-100/30 dark:bg-purple-900/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 hidden md:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-100 dark:border-indigo-800/50">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
            Technical Skills
          </h2>
          <p className="text-slate-500 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to deliver robust solutions.
          </p>
        </div>

        <div className="space-y-10 max-w-6xl mx-auto">
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter(s => s.category === category.key)
            if (categorySkills.length === 0) return null

            return (
              <div key={category.key} className="animate-fade-in-up" style={{ animationDelay: `${catIndex * 0.1}s` }}>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-5 flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.color} text-white flex items-center justify-center text-sm shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50`}>
                    {catIndex + 1}
                  </span>
                  <span className="flex items-center gap-2">
                    <span>{category.emoji}</span>
                    {category.label}
                  </span>
                  <span className="text-xs font-medium text-slate-400 dark:text-gray-500 ml-1">
                    ({categorySkills.length})
                  </span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {categorySkills.map((skill, i) => {
                    const Icon = iconMap[skill.name]
                    if (!Icon) return null

                    return (
                      <div
                        key={skill.name}
                        className="group relative bg-white dark:bg-gray-800/60 rounded-2xl p-4 shadow-sm dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700/50 hover:border-indigo-200 dark:hover:border-indigo-800/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center gap-3"
                        style={{ animationDelay: `${catIndex * 0.1 + i * 0.03}s` }}
                      >
                        {/* Hover glow */}
                        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div
                          className="relative w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                          style={{ background: `linear-gradient(135deg, ${skill.color}, ${skill.color}dd)` }}
                        >
                          {typeof Icon === 'function' ? <Icon /> : <Icon className="w-6 h-6" />}
                        </div>
                        <span className="relative text-sm font-semibold text-slate-800 dark:text-gray-200 text-center leading-tight">
                          {skill.name}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
