import React from 'react'
import Navbar from '../../components/Header/Navbar'
import ParticleBackground from '../../components/ParticlesBg/ParticleBackground'
import Content from '../../components/Content/Content'
import Footer from '../../components/Footer/Footer'
import ScroolToTop from '../../components/ScroolTop/ScroolToTop'
import Main from '../../components/Main/Main'

const Homepage = () => {
  return (
    <div  className='relative z-0'>
      <Navbar className="relative z-10" />

      <ParticleBackground className="relative z-10" />
      
      <Content className="relative z-10" />

      <Main className="relative z-10" />

      <ScroolToTop className="relative z-10" />

      <Footer className="relative z-10" />
        
    </div>
  )
}

export default Homepage