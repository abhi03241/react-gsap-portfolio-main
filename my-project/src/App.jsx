import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import About from "./component/About";
import Contact from "./component/Contact";
import Hero from "./component/Hero";
import Project from "./component/Project";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen relative overflow-hidden">
      <Hero />
      <About />
      <Project />
      <Contact />
    </div>
    </>
  )
}

export default App
