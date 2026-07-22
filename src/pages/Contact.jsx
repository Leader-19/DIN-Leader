import { useState } from 'react'
import { contactInfo } from '../data/contact.jsx'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent! (This is a demo)')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-100/30 dark:bg-purple-900/10 rounded-full blur-3xl translate-y-1/2 translate-x-1/4"></div>

      <section className="py-12 md:py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight mb-4">
              Get In Touch
            </h1>
            <p className="text-base md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or want to collaborate? Feel free to reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-12">
            {contactInfo.map((item, index) => (
              <div key={item.title} className="group glass backdrop-blur-xl rounded-2xl p-6 shadow-sm dark:shadow-gray-900/50 border border-indigo-100/50 dark:border-indigo-900/30 hover:border-indigo-200 dark:hover:border-indigo-800/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">{item.title}</h3>
                <p className="text-gray-900 dark:text-gray-100 font-semibold text-sm">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800/80 rounded-3xl shadow-sm dark:shadow-gray-900/50 border border-indigo-100/50 dark:border-indigo-900/30 p-8 md:p-12 animate-scale-in animation-delay-300">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-8 text-center tracking-tight">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="animate-fade-in-up animation-delay-100">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none bg-white dark:bg-gray-700/50 text-gray-900 dark:text-gray-100 placeholder:text-gray-400"
                    />
                  </div>
                  <div className="animate-fade-in-up animation-delay-200">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none bg-white dark:bg-gray-700/50 text-gray-900 dark:text-gray-100 placeholder:text-gray-400"
                    />
                  </div>
                </div>
                <div className="animate-fade-in-up animation-delay-300">
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Collaboration"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none bg-white dark:bg-gray-700/50 text-gray-900 dark:text-gray-100 placeholder:text-gray-400"
                  />
                </div>
                <div className="animate-fade-in-up animation-delay-400">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all outline-none resize-none bg-white dark:bg-gray-700/50 text-gray-900 dark:text-gray-100 placeholder:text-gray-400"
                  ></textarea>
                </div>
                <div className="animate-fade-in-up animation-delay-500">
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 hover:shadow-xl hover:-translate-y-0.5 mt-8"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
