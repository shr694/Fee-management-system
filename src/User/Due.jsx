import React, { useState } from 'react'

const Due = ({setShow}) => {
   const [submit,setSubmit]=useState()
   const[due,setDue]=useState("")
   const[errors,setErrors]=useState({})



  const  handleSubmit=(e)=>{
    e.preventDefault();
    
    let error= {};
    if(due<=5000 && due>=1000){
     alert("Validation passed") 
     setShow(false)


    }else{
      error.due="invalid amount"
    }
    setErrors(error);
  console.log(errors.due)
  }

  console.log(due)

  return (
<div className='h-screen flex justify-center items-center w-screen'>
<form onSubmit={handleSubmit} className='h-fit pt-2 pb-10 p-3 w-[50%] bg-blue-300 ml-5 '>
     <p className=' w-full text-end font-bold text-2xl mr-3 '> 
     <span  onClick={()=>setShow(false)} className='cursor-pointer'>x</span></p>

     <h1 className='text-center text-4xl '>Due Form</h1>
     <p className='text-red-400'>{errors?errors.due:""}</p>
   <div className=' flex gap-y-2 flex-col mt-6'>
    <label className=' font-semibold'>Total Amount: 5000</label>
    <div>
    <label  className='font-semibold'>Due Amount</label>
     <input value={due} onChange={(e)=>setDue(e.target.value)} type="number" className='border-2 ml-4 rounded-sm'/>
   </div>
   <button  type='submit' value={submit} onChange={(e)=>setSubmit(e.target.value)} className='bg-blue-600 py-2 w-[30%]  ml-25 mt-4 rounded-md'>Submit</button>
   </div>
</form>
</div>
  )
}

export default Due;
