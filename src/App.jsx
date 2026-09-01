import { ThemeProvider } from './contexts/ThemeContext'
import CV from './components/CV'

function App() {
  return (
    <ThemeProvider>
      <CV />
    </ThemeProvider>
  )
}

export default App
