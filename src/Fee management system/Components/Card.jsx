import {Users} from 'lucide-react'
import React from 'react'

const Card = ({title,number,icon:Icon}) => {
  return (
    <div className='bg-blue-500 h-[90%] w-[30%] rounded-md hover:bg-blue-400 text-white'>
    <p className='mt-2 bg-amber-100/50 w-fit p-1 rounded-full ml-4'><Icon size={24}/></p>
    <h1 className='text-sm font-normal pt-4 ml-4'>{title}</h1>
    <p className='text-2xl ml-4'>{number}</p>
    </div>
  )
}

export default Card;
