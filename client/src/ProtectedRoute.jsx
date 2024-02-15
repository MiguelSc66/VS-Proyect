import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

export default function ProtectedRoute() {
    const admin = useSelector((state) => state.isAdmin)
    console.log(admin)
    if(admin === false) return <Navigate to="/" replace/>


  return <Outlet/>
}
