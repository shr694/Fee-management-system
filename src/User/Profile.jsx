import React from 'react'
import ab from '../assets/image/one.jpg'
import { ContainerIcon, DonutIcon, GemIcon, SquareIcon } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { detail } from "../details"

const Profile = () => {
  const { id } = useParams();

  const data = detail;

  const std = data.find((obj) => obj.SN == id);

  return (
    <div className='h-screen w-screen bg-cyan-200'>
      <div className=' text-center p-10 h-[20%]'>
        <h1 className='text-2xl font-bold text-indigo-600'>Student Profile Page Design Example</h1>
        <p className='font-semibold'>A responsive student profile page design</p>
      </div>


      <div className='h-[90%]  flex justify-around'>
        <div className='h-[60%] w-[20%] bg-amber-50  rounded-md ml-6'>
          <div className='h-[65%]'>
            <div className='h-[70%] flex justify-center'>
              <img className='h-full rounded-full mt-4' src={ab} />
            </div>
            <div>
              <p className='text-center font-bold my-4'>{std.NAME}</p>
            </div>
          </div>
          <div className='px-6'>
            <p>Student ID:{std.ID}</p>
            <p>Class:{std.CLASS}</p>
            <p>Section:{std.Section}</p>
          </div>
        </div>


        <div className='w-[70%] ml-5'>
          <div className='h-[50%] w-[90%]  rounded-xl bg-amber-50'>
            <p className='font-bold ml-10 py-6 '>General Information</p>
            <table className='border w-[80%] ml-8'>
              <tr>
                <td className='border px-2 py-2'>Roll</td>
                <td className='border text-center'>:</td>
                <td className='border px-2'>{std.Roll}</td>
              </tr>
              <tr>
                <td className='border px-2 py-2'>Academic Year</td>
                <td className='border text-center'>:</td>
                <td className='border px-2'>{std.YEAR}</td>
              </tr>
              <tr>
                <td className='border px-2 py-2'>Gender</td>
                <td className='border text-center'>:</td>
                <td className='border px-2'>{std.GENDER}</td>
              </tr>
              <tr>
                <td className='border px-2 py-2'>Religion</td>
                <td className='border text-center'>:</td>
                <td className='border px-2'>{std.RELIGION}</td>
              </tr>
              <tr>
                <td className='border px-2 py-2'>Blood</td>
                <td className='border text-center'>:</td>
                <td className='border px-2'>{std.BLOOD}</td>
              </tr>
            </table>
          </div>


          <div className='h-[30%] w-[90%] bg-amber-50 mt-8 rounded-xl'>
            <p className='font-bold px-5 py-4'>Other Information</p>
            <p className=' px-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam aut veritatis distinctio, nesciunt rerum quo similique deleniti ratione voluptate laudantium ullam id hic labore veniam, aliquid est totam consequatur temporibus?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;
