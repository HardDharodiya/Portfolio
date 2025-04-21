import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skill from './components/Skill'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen'>
      <NavBar/>
      <Hero />
      <About />
      <Projects />
      <Skill />
      <Education />
      <Contact />
    </div>
  )
}

export default App
