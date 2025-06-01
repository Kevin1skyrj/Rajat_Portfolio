import React from 'react'

// import router 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './pages/Home/Homepage';

// created router
const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
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