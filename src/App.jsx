// import { Home } from 'lucide-react'
import './App.css'
import About from './component/About'
import Hero from './component/Hero'
import Home from './component/Home'
import Navbar from './component/Navbar'
import OtherProject from './component/OtherProject'
import ContactSection from './component/ContactSection'

function App() {
  

  return (
    <>
      <div className='min-h-screen bg-[#000000] text-white '>
        <Navbar/>
        <Home/>
        <Hero/>
        <section id='about'>
        <About/>
        </section>
        <section id='work'>
        <OtherProject/>
        </section>
        <section id='contact'>
        <ContactSection/>
        </section>
        
        
      </div>
    </>
  )
}

export default App
