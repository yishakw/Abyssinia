import { useState } from 'react'
import './App.css'
import Nav from "./components/Nav"
import MainPage from './pages/MainPage'
import Service from './pages/Service'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Questions from './pages/Questions'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-[url('https://img.freepik.com/free-vector/blue-grunge-background_1048-2081.jpg?t=st=1722068238~exp=1722071838~hmac=bbc77d28147c0dfb66b90d398a68077125f3501c3c5296e28bfc2f082f14680a&w=740')]">
     <Nav />
     <MainPage />
     <Service />
     <Projects />
     <Questions /> 
     <Blog />
    </div>
  )
}

export default App
