import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const List = ({url}) => {
  
  const [list, setList] = useState([]);
  const [loading,setLoading] = useState(false);

  const fetchList = async () => {
    setLoading(true);
    const response = await axios.get(`${url}/api/item/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error(response.data.message);
    }
    setLoading(false);
  };

  const removeFood = async(itemId) => {
    setLoading(true);
    const response = await axios.post(`${url}/api/item/remove`,{id:itemId});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message);
    }else{
      toast.error(response.data.message);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchList();
  }, []);

  return loading ? (
    <div className=" flex w-[70%] justify-center items-center h-[400px]">
      <div class="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-orange-600"></div>
    </div>
  ): (
    <div className=" w-[75%]  ml-[3vw] my-10">
      <p className="text-xl font-semibold text-zinc-800 mb-5 ">All Product list</p>
      <div className=" w-full grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] items-center place-items-center gap-4 ">
        {
          list.map((item,index) => {
            return (
              <div key={index} className=" w-[260px] flex justify-center flex-col items-center gap-1 px-3 py-2 border border-zinc-700 font-medium shadow-inner shadow-zinc-400" >
                <img src={`${url}/images/`+item.image} alt="" className=" w-[150px]" />
                <p>{item.name}</p>
                <p>{item.type}</p>
                <p>{item.color}</p>
                <p>{item.os}</p>
                <p>{item.category}</p>
                <p>₹{item.newprice}</p>
                <p onClick={() => removeFood(item._id)} className=" text-md bg-red-600 font-medium  text-zinc-300 cursor-pointer border border-zinc-500 w-fit px-5 py-1 rounded-full shadow-md shadow-zinc-600">Remove</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default List;
