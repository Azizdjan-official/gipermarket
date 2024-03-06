import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'

const Mainlayout = () => {
  return (
    <div>
      <div><Header/></div>
      <div><Outlet/></div>
      <div><Footer/></div>
    </div>
  )
}

export default Mainlayout
