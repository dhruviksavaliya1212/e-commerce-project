import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = "http://localhost:4000";
  return (
    <div className=' font-["outfit"] h-full w-full min-h-screen'>
      <ToastContainer />  {/* To display notifications */}
      <Navbar/>
      <hr className='border border-zinc-500'/>
      <div className=' flex '>
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add url={url}/>}/>
          <Route path='/list' element={<List url={url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
