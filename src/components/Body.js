import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Head from './Head'
import ButtonComponent from './ButtonComponent'

function Body() {
  return (
    <>
    <Head />
    <div className='flex'>
        <Sidebar />
        <Outlet />
    </div>
    </>
  )
}

export default Body