import React from 'react'
import '../Sidebar/sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className=' w-[18%] min-h-screen border-2 border-zinc-500 border-y-0 '>
      <div className=" pt-12 pl-[20%] flex flex-col gap-5 text-md font-medium text-zinc-800">
        <NavLink to='/add' className="sidebar-option  flex flex-col lg:flex-row items-center gap-3 border-2 border-r-0 border-zinc-500 px-2 py-[10px] rounded-l-md cursor-pointer">
          <img src={assets.add_icon} alt="" />
          <p className=' hidden sm:block'>Add Items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option flex flex-col lg:flex-row items-center gap-3 border-2 border-r-0 border-zinc-500 px-2 py-[10px] rounded-l-md cursor-pointer">
          <img src={assets.order_icon} alt="" />
          <p className='hidden sm:block'>List Items</p>
        </NavLink>
        <NavLink to='/orders' className=" sidebar-option flex flex-col lg:flex-row items-center gap-3 border-2 border-r-0 border-zinc-500 px-2 py-[10px] rounded-l-md cursor-pointer">
          <img src={assets.order_icon} alt="" />
          <p className=' hidden sm:block'>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar