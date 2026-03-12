import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='bg-gray-200 h-[10%] flex justify-between items-center p-3'>
      <h1 className='text-blue-700 font-bold text-xl '>Fee Management</h1>
      <Link to="/loginform">
      <button className='bg-blue-600 text-white font-bold rounded-xl text-md h-10 px-4 hover:scale-105'>Log out</button>
     </Link> 
    </div>
  )
}

export default Nav
