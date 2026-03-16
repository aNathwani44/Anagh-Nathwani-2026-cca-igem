import React from 'react'
import Navbar     from './components/Navbar.jsx'
import Hero       from './components/Hero.jsx'
import Problem    from './components/Problem.jsx'
import Solution   from './components/Solution.jsx'
import Science    from './components/Science.jsx'
import Gallery    from './components/Gallery.jsx'
import Treatments from './components/Treatments.jsx'
import Footer     from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Science />
      <Gallery />
      <Treatments />
      <Footer />
    </>
  )
}
