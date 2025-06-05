import React, { useEffect, useState } from 'react';
import "./App.css";
import Homepage from './pages/Home/Homepage';
// import RouterScrollTop from './components/ScroolTop/RouterScroolTop';
// import router 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// created router
const router = createBrowserRouter(
  [
  {
   path: "/",
   element: <Homepage /> 
  },
  
  ]

)

const App = () => {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

   return (
    <>
      
      {loading ? (
        <div className='loading-pag'>
          <div className="loader">
            <span>=(Rajat Pandey)=</span>
            <span>=(Rajat Pandey)=</span>
          </div>
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  )
}

export default App







// import React from 'react'
// import Navbar from './components/Header/Navbar'
// import Footer from './components/Footer/Footer'
// import ParticleBackground from './components/ParticlesBg/ParticleBackground'

// const App = () => {
//   return (
//    <>
//    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
//     <Navbar />

//       <main className="flex-grow pt-16">
//         <p className="text-center text-xl">Welcome to my portfolio!</p>
//       </main>

//       <ParticleBackground />

//       <Footer />
//     </div>
//    </>
//   )
// }

// export default App