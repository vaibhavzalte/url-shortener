import React, { useState } from 'react'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import SignUpPage from './components/Signup.jsx'
import LoginPage from './components/Login.jsx'


const App = () => {
  const [allowUser,setalluser]=useState(false);

  const router= createBrowserRouter([
    {path:"/",element:<SignUpPage/>},
    {path:"/login",element:<LoginPage/>},
    {path:"/dashboard",element:<Dashboard/>},
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
