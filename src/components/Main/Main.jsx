import React from 'react'
import About from './About'
import Services from './Services'
import Projects from './Projects'
import Contacts from './Contacts'
import TechStack from './TechStack'

const Main = () => {
  return (
    <div className='relative  '>
      <About/>

      <Services/>

      <TechStack/>

      <Projects/>

      <Contacts/>
      
    </div>
  )
}

export default Main