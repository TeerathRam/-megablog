import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from "../../store/authSlice"
import authService from "../../appwrite/auth" // check for correct import
import {Button } from "../index"

function LogoutBtn() {
  const dispatch = useDispatch()

  const logoutHandler = () => {
      authService.logout().then(() => {
          dispatch(logout())
      })
  }

  return (
    <Button classname='inline-block px-6 py-2 duration-200 hover:bg-blue-300 rounded-full ml-4'
            textColor='text-black-900'
            onClick={logoutHandler}>
        Logout
    </Button>
  )
}

export default LogoutBtn