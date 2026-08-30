import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import FloatingContact from './components/FloatingContact'
import ScrollProgress from './components/ScrollProgress'
import { routes } from '../routes/route.jsx'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-x-hidden">
          <ScrollProgress />
          <Navbar />
          <main>
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </main>
          <Footer />
          <FloatingContact />
          <BackToTop />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
