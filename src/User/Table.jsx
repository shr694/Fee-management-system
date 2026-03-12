import React, { useState } from 'react'
import { detail } from '../details';
import Due from './Due';

const Table = () => {
  const [show, setShow] = useState(false)
  return (
    <div className=' bg-gray-300 h-full flex flex-col'>
      <div className='h-[15%] bg-cyan-300 mt-4  rounded-2xl w-full flex justify-around'>
        <div>
          <p className='mt-2'>Overall Summary</p>
          <p className='mt-4 font-bold text-xl'>Total Due</p>
          <p className=' bg-amber-50 w-fit px-4 rounded-3xl'>80,000</p>
        </div>
        <div className='mt-12'>
          <p className='font-bold text-xl'>Total Paid</p>
          <p className='bg-amber-50 w-fit px-4 rounded-3xl'>220,000</p>
        </div>
        <div className='mt-10 font-bold'>
          <p>Next Due Date</p>
          <p>0ctober 15,2026</p>
        </div>
        <div className='mt-10'>
          <p onClick={() => setShow(true)} className='bg-orange-400 cursor-pointer text-white rounded-xl w-30 text-center h-8'>Pay Due</p>
        </div>
      </div>
      <table className='mt-5 rounded-xl border bg-white w-full'>
        <thead className='border h-10'>
          <tr className='bg-blue-400 border'>
            <td className='border'>Total Fee</td>
            <td className='border'>Paid Fee</td>
            <td className='border'>Due Fee</td>
            <td className='border'>Status Fee</td>
          </tr>
        </thead>
        <tbody className='border'>
          {detail.map((std, index) => (
            <tr key={index} className='border'>
              <td className='border'>{std.TOTALFEE}</td>
              <td className='border'>{std.PAIDAMOUNT}</td>
              <td className='border'>{std.DUEAMOUNT}</td>
              <td className='border'>{std.STATUS}</td>
            </tr>
          )
          )}

        </tbody>
      </table>

      {
        show && (
          <div className='absolute inset-0 bg-black/70 h-screen w-screen'>
            <Due setShow={setShow} />
          </div>
        )
      }


    </div>
  )
}

export default Table;
