import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomeLayout from './Pages/HomeLayout'
import Process from './Pages/Process'
import Home from './Pages/Home'
import Error from './Pages/Error'
import JobPositions from './Pages/JobPositions'
import Contact from './Pages/Contact'
import Services from './Pages/Services'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      errorElement: <Error />,

      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/Process',
          element: <Process />,
        },
        {
          path: '/Services',
          element: <Services />,
        },

        {
          path: '/JobPositions',
          element: <JobPositions />,
        },
        {
          path: '/Contact',
          element: <Contact />,
        },
      ],
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
