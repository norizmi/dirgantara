import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Pages/Home'
import Contact from './components/Pages/Contact'
import EducationPage from './components/Pages/Education'
import EducationSpecific from './components/Pages/EducationSpecific'
import Spinner from './components/Pages/Spinner'
import Role from './components/Pages/Role'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },

  {
    path: "/contact",
    element: <Contact />
  },

   {
    path: "/education",
    element: <EducationPage />
   },

   {
    path: "/education/lesson",
    element: <EducationSpecific />
   },

   {
    path: "/spinner",
    element: <Spinner />
   },

   {
    path: "/role",
    element: <Role />
   }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
