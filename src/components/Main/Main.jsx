import React from 'react'
import About from './About'
import Services from './Services'
import Projects from './Projects'
import Contacts from './Contacts'

const Main = () => {
  return (
    <div className='relative z-0'>
      <About/>

      <Services/>

      <Projects/>

      <Contacts/>
      
    </div>
  )
}

export default Main