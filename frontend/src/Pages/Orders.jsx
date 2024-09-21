import axios from 'axios'
import React, { useEffect, useState } from 'react'
import parcel from '../assets/parcel_icon.png'
import { toast } from 'react-toastify'

const Orders = ({url, token}) => {

  const[data, setData ] = useState([]);

  const fetchOrder = async(e) => {
    // e.preventDefault();
    try {
      const response = await axios.get(url+"/api/order/user", {headers:{token}})
      setData(response.data.data);
    } catch (err) {
      toast.error("something went wrong")
    }
  }

  useEffect(()=>{
    fetchOrder();
  },[])

  return (
    <div className='w-full flex justify-center min-h-screen'>
      <div className=' w-[85%] pt-20'>
      <h2 className=' font-semibold text-xl text-zinc-800'>My Orders</h2>
      <div className=" flex flex-col gap-5 mt-5">
        {
          data.map((order,index)=> {
            return(
              <div key={index} className=" grid md:grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] grid-cols-[2fr_2fr] sm:grid-cols-[1fr_2fr_1fr] items-center justify-center md:gap-5 gap-y-1.5 md:px-2 pl-4 pr-3 md:py-2 py-3 border-2 rounded-md border-zinc-700">
                <img src={parcel} alt="" className='w-14'/>
                <p>{order.items.map((item,index)=>{
                  if(index === order.items.length-1){
                    return item.name+" * "+item.quentity
                  }
                  else{
                    return item.name+" * "+item.quantity+", "
                  }
                })}</p>
                <p className='ml-4 mt-2 md:ml-0 md:mt-0'>₹{order.amount}</p>
                <p>Items: {order.items.length}</p>
                <p><span className=' text-orange-600'>&#x25cf;</span><b className=' text-zinc-700'>{order.status}</b></p>
                <button onClick={fetchOrder} className=' ml-2 mt-2 md:mt-0 mb-2 md:mb-0 py-2 bg-orange-600/90 w-[7em] rounded-md font-medium shadow-md shadow-zinc-800'>Track order</button>
              </div>
            )
          })
        }
      </div>
      </div>
    </div>
  )
}

export default Orders