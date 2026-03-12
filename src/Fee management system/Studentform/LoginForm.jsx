import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  
  const navigate= useNavigate();
  const[incorrect,setIncrrect]= useState("");
  const[name,setName]=useState("");
  const[password,setPassword]=useState("");
  const[errors,setErrors]=useState({});


  const handleSubmit=(e)=>{
   e.preventDefault();

  let error={};

   if(!name.trim()){
    error.name="name is required"
   }
 if(!password.trim()){
    error.password="password is required"
 }
 setErrors(error)

 if (Object.keys(error).length===0){
  if(name==="shruti" && password==="12345"){
     navigate("/users");

  }else if(
 name==="admin" && password==="12345"
  ){
    navigate("/")
  }else{
    setIncrrect("password or name is incorrect");

  }
 }
  }
  
  return (
   
    <div className='h-screen w-screen bg-gray-400 flex justify-center'>
    <form onSubmit={handleSubmit} className='h-[50%] w-[40%] bg-cyan-800 flex flex-col gap-4 mt-20'>
      <h1 className='font-bold flex justify-center mt-5 text-amber-50 text-3xl'>LOGIN</h1>
      <p>{incorrect?incorrect:""}</p>
      <div className='w-[90%]  flex flex-col gap-y-3 mt-6'>
        <div className='flex flex-col px-5 py-2'>
          <label className='text-white'>Username:</label>
          <input value={name} onChange={(e)=>setName(e.target.value)}  className='border-2 border-amber-50 rounded-md py-1' type="text" />
            <p className='text-red-500'></p>
          {
            errors?errors.name:""
          }

        </div>
<div className='flex flex-col px-5 py-2'>
          <label className='text-white'>Password:</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} className='border-2 border-amber-50 rounded-md py-1' type="text" />
          <p className='text-red-500'> {
            errors?errors.password:""
          }</p>
        </div>

      </div>
      <div className='w-[90%] h-[80%] flex flex-col gap-y-10 mt-6'>
        
        <div  className='flex justify-around'> 
          <input type="submit" value="Login" className='bg-blue-400 font-bold w-[30%] rounded-md py-2'/>
        </div>
      </div>
      
    </form>
    </div>
  )
}

export default LoginForm;
