import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import ShowcaseSection from './components/sections/ShowcaseSection'
import LogoShowcase from './components/LogoShowcase'
import ServiceCards from './components/sections/ServiceCards'
import ExperienceSection from './components/sections/ExperienceSection'
import TechStackSection from './components/sections/TechStackSection'
import Testimonials from './components/sections/Testimonials'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <div className='bg-red-500 flex justify-between px-7'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <div className="flex justify-between px-7">
          <h1 className='text-3xl underline'>2nd Third Space</h1>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>

      <Hero />

      <ShowcaseSection />

      <LogoShowcase />

      <ServiceCards />

<hr />

      <ExperienceSection />

<hr />
      <TechStackSection />

<hr />
      <Testimonials />
    </>
  )
}

export default App
