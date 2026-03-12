import { UserIcon } from 'lucide-react'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='h-[50%] w-full  bg-red-500'>
      <div className='h-[50%] w-full flex justify-center'>
        <div className='bg-amber-200 h-[60%] w-[35%] mt-10'><UserIcon size={100}/></div>
      </div>
<div className='shadow-2xl w-full bg-emerald-500 h-[50%] py-5 px-4 text-white '>
<p>Name: Sameer Subba</p>
<p>Email:sumansnssssss</p>
<p>Class:9</p>
</div>
    </div>
  )
}

export default Sidebar
