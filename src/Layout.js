import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'

export default function Layout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>  
  )
}