import React from 'react'
import "./App.css"
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
function App() {
  return (
    <div>
      <Home/>
      <About/>
      <Work/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App