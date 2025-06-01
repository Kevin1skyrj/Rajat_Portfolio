import React from 'react'
import Navbar from '../../components/Header/Navbar'
import ParticleBackground from '../../components/ParticlesBg/ParticleBackground'
import Content from '../../components/Content/Content'
import Footer from '../../components/Footer/Footer'

const Homepage = () => {
  return (
    <div>
      <Navbar/>

      <ParticleBackground/>
      
      <Content/>

      <Main/>

      <Footer/>
        
    </div>
  )
}

export default Homepage