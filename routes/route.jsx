import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Education from '../src/pages/Education'
import Experience from '../src/pages/Experience'
import Projects from '../src/pages/Projects'
import Contact from '../src/pages/Contact'

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/education', element: <Education /> },
  { path: '/experience', element: <Experience /> },
  { path: '/projects', element: <Projects /> },
  { path: '/contact', element: <Contact /> },
]
