import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const List = ({ url }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const removeItem = async (itemId) => {
    setLoading(true);
    const response = await axios.post(`${url}/api/item/remove`, { id: itemId });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchList();
  }, []);

  return loading ? (
    <div className=" flex w-[70%] justify-center items-center h-[400px]">
      <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-orange-600"></div>
    </div>
  ) : (
    <div className=" w-[75%]  ml-[3vw] my-10">
      <p className="text-xl font-semibold text-zinc-800 mb-5 ">
        All Product list
      </p>
      <div className=" w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] items-center place-items-center gap-4 ">
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className=" w-[200px] cursor-pointer border-2 border-zinc-600 rounded-sm"
            >
              <div className=" grid place-items-center">
                <img src={item.image} alt="" className=" p-2" />
              </div>
              <div className=" bg-gradient-to-tr from-orange-300 via-zinc-300 to-[#073b056b] px-2 py-2">
                <h1 className=" text-md font-semibold my-2 leading-none">
                  {item.name}
                </h1>
                <div className=" flex gap-2 items-center font-medium ">
                  <p className=" text-sm line-through ">₹{item.oldprice}</p>
                  <p className=" text-lg text-orange-800 font-semibold">
                    ₹{item.newprice}
                  </p>
                </div>
                <div className=" flex gap-5 items-center">
                  <p className=" text-md font-medium">{item.percentage}</p>
                  <button onClick={() => removeItem(item._id)} className=" px-3 py-1 rounded border-2 bg-red-500 border-zinc-500 mt-3 font-semibold">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
