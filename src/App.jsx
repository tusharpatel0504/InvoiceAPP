import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './components/Register'
import Login from './components/Login'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router=createBrowserRouter([
  {
    path: "/Login",
    element: <Login />
  },
  {
    path: "/Register",
    element: <Register />
  }
]);
function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
