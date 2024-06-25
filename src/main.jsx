import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/Pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './components/Pages/Contact'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },

  {
    path: "/contact",
    element: <Contact />
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
