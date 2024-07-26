import { useState } from 'react'
import './App.css'
import Nav from "./components/Nav"
import MainPage from './pages/MainPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav />
     <MainPage />
    </>
  )
}

export default App
