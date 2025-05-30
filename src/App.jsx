import React from 'react'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
   <>
   <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
    <Navbar />

      <main className="flex-grow pt-16">
        <p className="text-center text-xl">Welcome to my portfolio!</p>
      </main>

      <Footer />
    </div>
   </>
  )
}

export default App