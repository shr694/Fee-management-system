
import React from 'react'
import Dashboard from './Fee management system/Dashboard'
import StudentManagement from './Fee management system/StudentManagement'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Fee management system/Components/Nav'
import Sidebar from './Fee management system/Components/Sidebar'
import LoginForm from './Fee management system/Studentform/LoginForm'
import Form from './Fee management system/Studentform/Form'
import User from './User/Users'
import Card from './Fee management system/Components/Card'
import Due from './User/Due'
import Profile from './User/Profile'




const App = () => {
  return (

    <>
      <BrowserRouter>
        <Routes>

          <Route path="/loginform" element={<LoginForm />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/student' element={<StudentManagement />} />
          {/* thid id for register */}
          <Route path="/form" element={<Form />} />

          {/* this is for editing student data */}
          <Route path="/form/:id" element={<Form />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/users" element={<User />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </BrowserRouter>


    </>

  )
}

export default App

