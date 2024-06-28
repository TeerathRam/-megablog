import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from "../../store/authSlice"
import authService from "../../appwrite/auth" // check for correct import

function LogoutBtn() {
  const dispatch = useDispatch()

  const logoutHandler = () => {
      authService.logout().then(() => {
          dispatch(logout())
      })
  }

  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-300 rounded-full'
            onClick={logoutHandler}>
        Logout
    </button>
  )
}

export default LogoutBtn