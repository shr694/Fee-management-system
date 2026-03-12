import React from 'react'

import Sidebar from './Sidebar';
import Nav from './nav';
import Table from './table';

const User = () => {
  return (
    <div className='bg-amber-200 h-screen w-screen'>
     <div className='bg-amber-50 h-12 w-full'>
     <Nav/>
      </div>
     <div className='h-full bg-gray-300 flex  gap-5'  >
        <div className='w-[30%] bg-emerald-500 '>
      <Sidebar /> 

        </div>
      <div className='h-screen bg-white w-full  ml-5 mr-8'>
        
        <Table/>
        
        </div>
     </div>

    </div>
  )
}

export default User;
