import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Orders from './pages/Order/Orders'
import Login from './pages/Login/Login'

const App = () => {
  const [token,setToken] = useState("");
  const url = "http://localhost:4000";

  useEffect(()=>{
    if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"));
    }
  },[])
  return (
    <div className=' font-["outfit"] h-full w-full min-h-screen'>
      <ToastContainer />  {/* To display notifications */}
      <Navbar token={token} setToken={setToken}/>
      <hr className='border border-zinc-500'/>
      <div className=' flex '>
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add url={url} token={token}/>}/>
          <Route path='/list' element={<List url={url} token={token}/>}/>
          <Route path='/orders' element={<Orders url={url} token={token}/>}/>
          <Route path='/login' element={<Login url={url} setToken={setToken}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
