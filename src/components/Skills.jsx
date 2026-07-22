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
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'database', label: 'Database' },
  { key: 'devops', label: 'DevOps & Tools' },
  { key: 'infrastructure', label: 'Infrastructure' },
  { key: 'tools', label: 'Tools' },
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
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-indigo-100/40 dark:bg-indigo-900/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
            Technical Skills
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
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
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center text-sm shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50">
                    {catIndex + 1}
                  </span>
                  {category.label}
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
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                          style={{ background: `linear-gradient(135deg, ${skill.color}, ${skill.color}dd)` }}
                        >
                          {typeof Icon === 'function' ? <Icon /> : <Icon className="w-6 h-6" />}
                        </div>
                        <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 text-center leading-tight">
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
