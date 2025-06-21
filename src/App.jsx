import { useEffect, useState } from "react";
import "./App.css";
import Homepage from "./pages/Home/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllProjects from "./components/Main/AllProjects";
// created router

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/all-projects",
    element: <AllProjects />, // Add this route
  },
]);

const App = () => {
  const [loading, setLoading] = useState(() => {
    // Only show loader on first load, not on navigation
    return sessionStorage.getItem("hasLoaded") ? false : true;
  });

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasLoaded", "true");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <div className="loading-pag">
          <div className="loader">
            <span>=(Rajat Pandey)=</span>
            <span>=(Rajat Pandey)=</span>
          </div>
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
};

export default App;

