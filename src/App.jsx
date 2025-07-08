


import React from 'react'
import About from './components/About'
import Technology from './components/Technology'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Publications from './components/Publications'
import Contact from './components/Contact'
import Education from './components/Education'
const App = () => {
  return (
    <div>
      <div className="overflow-x-hidden text-black antialiased selection:bg-purple-300 selection:text-purple-900"></div>
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div className="relative h-screen">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="relative h-full w-full [&>div]:absolute [&>div]:bottom-0 [&>div]:right-0 [&>div]:z-[-2] [&>div]:h-full [&>div]:w-full [&>div]:bg-gradient-to-b [&>div]:from-blue-200 [&>div]:to-white">
            <div></div>
          </div>
        </div>
        <div className="container mx-auto"></div>
        <About />
        <Education/>
        <Technology />
        <Experience />
        <Projects />
        <Publications />
        <Contact />
      </div>
    </div>
  )
}

export default App
