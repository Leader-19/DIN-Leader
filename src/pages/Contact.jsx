import { useState } from 'react'
import { contactInfo } from '../data/contact.jsx'
import Confetti from '../components/Confetti'
import TypewriterPlaceholder from '../components/TypewriterPlaceholder'

const availability = [
  { day: 'Mon', hours: '9:00 AM – 6:00 PM', available: true },
  { day: 'Tue', hours: '9:00 AM – 6:00 PM', available: true },
  { day: 'Wed', hours: '9:00 AM – 6:00 PM', available: true },
  { day: 'Thu', hours: '9:00 AM – 6:00 PM', available: true },
  { day: 'Fri', hours: '9:00 AM – 6:00 PM', available: true },
  { day: 'Sat', hours: '10:00 AM – 2:00 PM', available: true },
  { day: 'Sun', hours: 'Closed', available: false },
]

const quickLinks = [
  {
    label: 'Telegram',
    href: 'https://t.me/Leader_DEV1',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
      </svg>
    ),
    color: 'from-blue-500 to-blue-600',
    shadow: 'shadow-blue-200 dark:shadow-blue-900/50',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/leader-din-441bb0363/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
      </svg>
    ),
    color: 'from-blue-600 to-blue-700',
    shadow: 'shadow-blue-200 dark:shadow-blue-900/50',
  },
  {
    label: 'Email',
    href: 'mailto:din.leader@smart.com.kh',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-orange-500 to-red-500',
    shadow: 'shadow-orange-200 dark:shadow-orange-900/50',
  },
  {
    label: 'Phone',
    href: 'tel:+85598265667',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    color: 'from-emerald-500 to-green-600',
    shadow: 'shadow-emerald-200 dark:shadow-emerald-900/50',
  },
]

const MAX_MESSAGE = 1000
const MIN_MESSAGE = 20

function validate(formData) {
  const errors = {}
  if (!formData.name.trim()) {
    errors.name = 'Full name is required'
  } else if (formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }
  if (!formData.email.trim()) {
    errors.email = 'Email address is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Please enter a valid email address'
  }
  if (!formData.subject.trim()) {
    errors.subject = 'Subject is required'
  } else if (formData.subject.trim().length < 3) {
    errors.subject = 'Subject must be at least 3 characters'
  }
  if (!formData.message.trim()) {
    errors.message = 'Message is required'
  } else if (formData.message.trim().length < MIN_MESSAGE) {
    errors.message = `Message must be at least ${MIN_MESSAGE} characters (${formData.message.trim().length}/${MIN_MESSAGE})`
  } else if (formData.message.trim().length > MAX_MESSAGE) {
    errors.message = `Message must be at most ${MAX_MESSAGE} characters`
  }
  return errors
}

function FieldError({ error }) {
  if (!error) return null
  return (
    <p className="mt-1.5 text-xs font-medium text-red-500 dark:text-red-400 flex items-center gap-1 animate-fade-in">
      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
      {error}
    </p>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [touched, setTouched] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate(formData)
    setErrors(validationErrors)
    setTouched({ name: true, email: true, subject: true, message: true })
    if (Object.keys(validationErrors).length === 0) {
      setSending(true)
      setTimeout(() => {
        setSending(false)
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setErrors({})
        setTouched({})
      }, 1500)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    // Clear error for this field as user types
    if (errors[name]) {
      const newFormData = { ...formData, [name]: value }
      const newErrors = validate(newFormData)
      if (!newErrors[name]) {
        setErrors((prev) => {
          const copy = { ...prev }
          delete copy[name]
          return copy
        })
      } else {
        setErrors((prev) => ({ ...prev, [name]: newErrors[name] }))
      }
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const fieldErrors = validate(formData)
    if (fieldErrors[name]) {
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }))
    }
  }

  const inputBase = 'w-full px-4 py-3 rounded-xl border transition-all outline-none bg-white dark:bg-gray-700/50 text-gray-900 dark:text-gray-100 placeholder:text-slate-400'
  const inputValid = 'border-slate-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500'
  const inputError = 'border-red-300 dark:border-red-500/50 focus:ring-2 focus:ring-red-500/20 focus:border-red-500'

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <Confetti active={submitted} />
      {/* Background blobs */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-100/40 dark:bg-purple-900/15 rounded-full blur-3xl translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-indigo-100/30 dark:bg-indigo-900/10 rounded-full blur-3xl -translate-x-1/2 hidden md:block"></div>

      <section className="py-12 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-100 dark:border-indigo-800/50">
              Contact
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight mb-4">
              Get In Touch
            </h1>
            <p className="text-base md:text-xl text-slate-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or want to collaborate? Feel free to reach out.
            </p>
          </div>

          {/* Quick Contact Links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-14">
            {quickLinks.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-3 bg-white dark:bg-gray-800/80 rounded-2xl p-4 shadow-sm dark:shadow-gray-900/50 border border-slate-200/80 dark:border-gray-700/50 hover:border-indigo-200 dark:hover:border-indigo-800/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} ${item.shadow} text-white flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-wider">{item.label}</div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                    {item.label === 'Telegram' ? '@Leader_DEV1' : item.label === 'Phone' ? '+855 98265667' : item.label === 'Email' ? 'din.leader@...' : 'Leader Din'}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Main Grid: Form + Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">

            {/* Contact Form (3 cols) */}
            <div className="lg:col-span-3 bg-white dark:bg-gray-800/80 rounded-3xl shadow-sm dark:shadow-gray-900/50 border border-slate-200/80 dark:border-indigo-900/30 p-6 md:p-10 animate-scale-in">
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 mb-6 tracking-tight">
                Send a Message
              </h2>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-300 text-sm font-medium flex items-center gap-2 animate-fade-in-up">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="John Doe"
                      className={`${inputBase} ${touched.name && errors.name ? inputError : inputValid}`}
                    />
                    <FieldError error={touched.name && errors.name} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="john@example.com"
                      className={`${inputBase} ${touched.email && errors.email ? inputError : inputValid}`}
                    />
                    <FieldError error={touched.email && errors.email} />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Project Collaboration"
                    className={`${inputBase} ${touched.subject && errors.subject ? inputError : inputValid}`}
                  />
                  <FieldError error={touched.subject && errors.subject} />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Message
                    </label>
                    <span className={`text-xs font-medium ${formData.message.length > MAX_MESSAGE ? 'text-red-500' : formData.message.length >= MIN_MESSAGE ? 'text-emerald-500' : 'text-slate-400 dark:text-gray-500'}`}>
                      {formData.message.length}/{MAX_MESSAGE}
                    </span>
                  </div>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder=" "
                      className={`${inputBase} resize-none ${touched.message && errors.message ? inputError : inputValid}`}
                    ></textarea>
                    {!formData.message && (
                      <TypewriterPlaceholder
                        words={['Tell me about your project...', 'Describe your collaboration idea...', 'What can I help you build?', 'Share your timeline and goals...']}
                        typingSpeed={70}
                        deletingSpeed={35}
                        pauseDuration={2500}
                      />
                    )}
                  </div>
                  <FieldError error={touched.message && errors.message} />
                  {/* Character progress bar */}
                  <div className="mt-2 h-1.5 w-full rounded-full bg-slate-100 dark:bg-gray-700 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300 ease-out"
                      style={{
                        width: `${Math.min((formData.message.length / MAX_MESSAGE) * 100, 100)}%`,
                        background: formData.message.length > MAX_MESSAGE
                          ? '#ef4444'
                          : formData.message.length >= MIN_MESSAGE
                          ? 'linear-gradient(90deg, #22c55e, #10b981)'
                          : 'linear-gradient(90deg, #818cf8, #a855f7)',
                      }}
                    ></div>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className={`w-full px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 flex items-center justify-center gap-2 ${
                    sending
                      ? 'bg-indigo-400 dark:bg-indigo-600 cursor-not-allowed shadow-none'
                      : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl hover:-translate-y-0.5 text-white'
                  }`}
                >
                  {sending ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Sidebar (2 cols) */}
            <div className="lg:col-span-2 flex flex-col gap-6 md:gap-8">

              {/* Map */}
              <div className="bg-white dark:bg-gray-800/80 rounded-3xl shadow-sm dark:shadow-gray-900/50 border border-slate-200/80 dark:border-indigo-900/30 overflow-hidden animate-fade-in-up animation-delay-100">
                <div className="p-5 md:p-6 pb-3 md:pb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Location
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-gray-400 mt-1">Phnom Penh, Cambodia</p>
                </div>
                <div className="h-56 md:h-64 w-full">
                  <iframe
                    title="Location Map"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=104.88%2C11.53%2C104.94%2C11.58&layer=mapnik&marker=11.5565%2C104.9282"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <a
                  href="https://www.openstreetmap.org/?mlat=11.5565&mlon=104.9282#map=13/11.5565/104.9282"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors border-t border-slate-100 dark:border-gray-700/50"
                >
                  Open in Maps →
                </a>
              </div>

              {/* Google Calendar Embed */}
              <div className="bg-white dark:bg-gray-800/80 rounded-3xl shadow-sm dark:shadow-gray-900/50 border border-slate-200/80 dark:border-indigo-900/30 overflow-hidden animate-fade-in-up animation-delay-200">
                <div className="p-5 md:p-6 pb-3 md:pb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book a Meeting
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-gray-400 mt-1">Pick a time that works for you</p>
                </div>
                <div className="h-80 md:h-96 w-full">
                  <iframe
                    title="Google Calendar"
                    src="https://calendar.google.com/calendar/embed?src=en.kh%23holiday%40group.v.calendar.google.com&ctz=Asia%2FPhnom_Penh&mode=WEEK&showTitle=0&showNav=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&height=400&bgcolor=%23ffffff" 
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="p-4 border-t border-slate-100 dark:border-gray-700/50">
                  <a
                    href="https://calendar.google.com/calendar/r/eventedit?text=Meeting+with+Leader+Din&details=Let%27s+discuss+your+project.&location=Phnom+Penh%2C+Cambodia&ctz=Asia/Phnom_Penh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl text-sm font-semibold transition-all shadow-lg shadow-indigo-200 dark:shadow-indigo-900/50 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Schedule on Google Calendar
                  </a>
                </div>
              </div>

              {/* Availability Calendar */}
              <div className="bg-white dark:bg-gray-800/80 rounded-3xl shadow-sm dark:shadow-gray-900/50 border border-slate-200/80 dark:border-indigo-900/30 p-5 md:p-6 animate-fade-in-up animation-delay-300">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Availability
                </h3>
                <div className="space-y-2">
                  {availability.map((item) => (
                    <div
                      key={item.day}
                      className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-slate-50 dark:hover:bg-gray-700/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.available ? 'bg-emerald-400' : 'bg-slate-300 dark:bg-gray-600'}`}></span>
                        <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 w-10">{item.day}</span>
                      </div>
                      <span className={`text-sm ${item.available ? 'text-slate-600 dark:text-gray-300' : 'text-slate-400 dark:text-gray-500'}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-gray-700/50 flex items-center gap-2 text-xs text-slate-400 dark:text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Available
                  <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-gray-600 ml-2"></span> Unavailable
                  <span className="ml-auto text-indigo-500 dark:text-indigo-400 font-medium">GMT+7</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
