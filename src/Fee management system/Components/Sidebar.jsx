import React from 'react'
import { useNavigate } from 'react-router-dom'


const Sidebar = () => {
  const navigate=useNavigate();
  
  return (
     <div className='flex flex-col gap-2'>
          <p onClick={()=>navigate("/")} className='mt-5  hover:bg-blue-800 hover:scale-100 hover:cursor-pointer duration-400 hover:text-white h-10'>Dashboard</p>
          <p onClick={()=>navigate("/student")} className='mt-2   hover:scale-100 duration:400 hover:cursor-pointer hover:bg-blue-800  hover:text-white h-10'> Student Management</p>
             

    </div>
  )
}

export default Sidebar
