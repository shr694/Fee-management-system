import { Cuboid, DollarSignIcon, EyeIcon, Pencil, SearchIcon, Trash, UsersIcon, Wallet2Icon } from 'lucide-react'
import Nav from './Components/Nav'
import Sidebar from './Components/Sidebar'
import { useState } from 'react'
import {detail} from '../details'
import { useMemo } from 'react'
import Card from './Components/Card'
import { Link, useNavigate } from 'react-router-dom'
const cardData = [
  {
    title: "Total Student ",
    number: 500,
    icon: UsersIcon
  },
  {
    title: "Total Number",
    number: 500,
    icon: Wallet2Icon
  },
  {
    title: "Total Student ",
    number: 500,
    icon: DollarSignIcon
  },
]
const Dashboard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = useMemo(() => {
    if (!detail) return;
    let tempData = [...detail];
    if (searchTerm) {

      tempData = tempData.filter((f) => {
        return f.NAME.toLowerCase().includes(searchTerm) ||
          f.CLASS.toLowerCase().includes(searchTerm) ||
          f.EMAIL.toLowerCase().includes(searchTerm) ||
          f.STATUS.toLowerCase().includes(searchTerm)
      })
    }
    return tempData;

  }, [searchTerm]);

  return (
    <div className='h-screen w-full bg-gray-200 '>
      <Nav />

      <div className='bg-gray-300 h-[90%] w-full  flex gap-4'>
        <div className='h-full bg-gray-400 p-4'>
          <Sidebar />
        </div>
        <div className='h-full  mt-2 ml-5 p-2'>
          <div className='w-full h-[35%] flex justify-around items-center font-bold py-8 px-8'>
            {cardData.map((obj) => (
              <Card title={obj.title} number={obj.number} icon={obj.icon} />
            ))}
          </div>
          <div className=' h-[10%]  flex justify-between  items-center '>

            <p>
              <input type="text" placeholder='Search...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='bg-white text-black px-8 text-sm ml-4 h-7 ' />
            </p>
            <Link to="/form">
              <button className='bg-blue-600 hover:scale-105 hover:shadow-amber-800 rounded-md h- mr-4 text-white py-2 px-4'> Add Student</button>
            </Link>
          </div>
          {filteredData ?
            <div className='h-full'>
              <table className='bg-white h-fit w-full border'>
                <thead className='border w-full'>
                  <tr className='bg-green-100 border w-full '>
                    <th className='border px-2'>SN</th>
                    <th className='border px-2'>NAME</th>
                    <th className='border px-2'>EMAIL </th>
                    <th className='border px-2'>CLASS</th>
                    <th className='border px-2'>PHONE</th>
                    <th className='border px-2'>TOTAL FEE</th>
                    <th className='border px-2'>DUE AMOUNT</th>
                    <th className='border px-2'>PAID AMOUNT</th>
                    <th className='border px-2'>STATUS</th>
                    <th className='border px-2'>ACTION</th>
                  </tr>
                </thead>
                <tbody>

                  {filteredData.map((std, index) => (
                    <tr key={index} className='border'>
                      <td className='border'> {std.SN}</td>
                      <td className='border'> {std.NAME}</td>
                      <td className='border'>{std.EMAIL}</td>
                      <td className='border'>{std.CLASS}</td>
                      <td className='border px-2 '>{std.PHONE}</td>
                      <td className='border px-2'>{std.TOTALFEE}</td>
                      <td className='border px-2'>{std.PAIDAMOUNT}</td>
                      <td className='border px-2'>{std.DUEAMOUNT}</td>
                      <td className='border px-2'>{std.STATUS}</td>
                      <td className='border flex gap-3'>
                        <p onClick={() => navigate(`/form/${std.SN}`)}><Pencil size={20} />

                        </p>
                        <p onClick={() => alert("do you want to delete")}><Trash size={20} /></p>
                        <p onClick={() => navigate(`/profile/${std.SN}`)}> <EyeIcon /></p>
                      </td>
                    </tr>
                  )
                  )}

                </tbody>
              </table>
            </div> : <div>no data found</div>
          }

        </div>

      </div>
    </div>



  )
}

export default Dashboard
