import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import './App.css'
import { Footer, Header } from "./components/index"
import { Outlet } from "react-router-dom"

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      console.log("USER", userData) // check for userData
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())    
      }
    })
    .finally(() => setLoading(false))
  })

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-700">
      <div className="w-full">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
