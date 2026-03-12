import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { detail } from '../../details';
const Form = () => {
  const { id } = useParams();
  if (id) {
    // alert(id);
  }
  const student = detail.find((e) => e.SN == id)
  const Navigate = useNavigate();

  console.log(student);
  const [name, setName] = useState(student ? student.NAME : "");
  const [email, setEmail] = useState(student ? student.EMAIL : "");
  const [cls, setCls] = useState(student ? student.CLASS : "");
  const [phone, setPhone] = useState(student ? student.PHONE : "");
  const [total, setTotal] = useState(student ? student.TOTALFEE : "");
  const [paid, setPaid] = useState(student ? student.PAIDAMOUNT : "");
  const [due, setDue] = useState(student ? student.DUEAMOUNT : "");
  const [status, setStatus] = useState(student ? student.STATUS : "");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let error = {};

    if (!name.trim()) {
      error.name = "name is required"
    }

    if (!email.trim()) {
      error.email = "email is required"
    }
    if (!cls.trim()) {
      error.cls = "class is required"
    }
    if (!phone.trim()) {
      error.phone = "phone number is required"
    }
    if (!total.trim()) {
      error.total = "total fee is required"
    }
    if (!paid.trim()) {
      error.paid = "paid amount is required"
    }
    if (!due.trim()) {
      error.due = "due amount is required"
    }

    if (!status.trim()) {
      error.status = "status is required"
    }
    setErrors(error);
    console.log(errors);
    if (Object.keys(error).length === 0) {
      alert("Validation passed")
    }
  }

  const Register = "Register Form"
  const edit = "Update student";
  return (
    <div className='min-h-screen w-screen bg-amber-100 flex justify-center'>
      <form onSubmit={handleSubmit} className='h-fit py-4 w-[30%] bg-white mt-4'>
        <h1 onClick={() => Navigate("/student")} className='pt-2 text-end pr-5 cursor-pointer font-bold'>X</h1>
        <h1 className='font-bold text-xl flex justify-center'>{student ? edit : Register}</h1>
        <div className='mt-5 px-5 pt-2 flex flex-col'>
          <label>Enter name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className={`border-2  ${student ? "border-blue-600" : "border-red-950"}  rounded-md py-1`} placeholder='Enter your name' />
          <p className='text-red-500'>{errors ? errors.name : ""}</p>
        </div>
        <div className='px-5 pt-1 flex flex-col'>
          <label>Enter email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} className={`border-2 ${student ? "border-blue-600" : "border-red-950"} py-1 rounded-md`} placeholder='Enter your email' />
          <p className='text-red-500'>{errors ? errors.email : ""}</p>
        </div>
        <div className='px-5 pt-1 flex flex-col'>
          <label>Enter class</label>
          <input value={cls} onChange={(e) => setCls(e.target.value)} type='number' className={`border-2 ${student ? "border-blue-600" : "border-red-950"} py-1 rounded-md`} placeholder='Enter class' />
          <p className='text-red-500'>{errors ? errors.cls : ""}</p>
        </div>
        <div className='px-5 pt-1 flex flex-col'>
          <label>Enter contact detail</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} type='number' className={`border-2 ${student ? "border-blue-600" : "border-red-950"}rounded-md py-1`} placeholder='Enter contact detail' />
          <p className='text-red-500'>{errors ? errors.phone : ""}</p>
        </div>
        <div className='px-5 pt-1 flex flex-col'>
          <label>Enter total fee</label>
          <input value={total} onChange={(e) => setTotal(e.target.value)} type='number' className={`border-2 ${student ? "border-blue-600" : "border-red-950"} rounded-md `} placeholder='Enter total fee' />
          <p className='text-red-500'>{errors ? errors.total : ""}</p>
        </div>
        <div className='px-5 pt-1 flex flex-col'>
          <label>Enter paid amount</label>
          <input value={paid} onChange={(e) => setPaid(e.target.value)} type='number' className='border-2 rounded-md' placeholder='Enter paid amount' />
          <p className='text-red-500'>{errors ? errors.paid : ""}</p>
        </div>
        <div className='px-5 pt-1 flex flex-col'>
          <label>Enter due amount</label>
          <input value={due} onChange={(e) => setDue(e.target.value)} type='number' className='border-2 rounded-md' placeholder='Enter due amount' />
          <p className='text-red-500'>{errors ? errors.due : ""}</p>
        </div>

        <div className='px-5 pt-1 flex flex-col'>
          <label>Enter status</label>
          <input value={status} onChange={(e) => setStatus(e.target.value)} type='text' className='border-2 rounded-md' placeholder='Enter status' />
          <p className='text-red-500'>{errors ? errors.status : ""}</p>
        </div>

        <div className='h-[20%] py-10 flex justify-center'>
          <input type="submit" value="Register" className='bg-blue-400 rounded-xl h-10 w-70 ' />
        </div>
      </form>
    </div>
  )
}

export default Form;
