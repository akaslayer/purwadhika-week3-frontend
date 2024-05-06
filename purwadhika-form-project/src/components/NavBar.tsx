import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='px-28 py-4 bg-green-700'>
      <nav className='flex gap-28 items-center'>
        <h1 className='bg-slate-200 text-4xl font-bold'>Network Call Practice</h1>
        <ul className='flex gap-28 text-slate-200'>
          <Link to={"/"}><li>Users</li></Link >
          <Link to={"/register"}><li>Register</li></Link >
        </ul>
      </nav>
    </div>
  )
}

export default NavBar