import React, { useState } from "react";
import search from "../assets/search_icon.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import rating from "../assets/rating_starts.png";
import { toast } from "react-toastify";

const Search = ({ url }) => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [name, setName] = useState();
  const [loading,setLoading] = useState(false);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${url}/api/item/search`, { name });
      if (response.data.success) {
        setData(response.data.data);
      }
    } catch (err) {
      toast.error("Product Not Found")
    }
    setLoading(false);
  };

  const setTopOfWindow = () => {
    window.scrollTo(0, 0);
  }

  return loading ? (
    <div className=" flex w-[100%] justify-center items-center h-screen">
      <div class="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-orange-600"></div>
    </div>
  ):  (
    <div className=" pt-20 min-h-screen w-full h-fit flex justify-center">
      <div className=" w-[95%] flex flex-col items-center  ">
        <div className="relative w-[21rem] sm:w-[25rem] ">
          <input
            onChange={(e) => {
              const value = e.target.value;
              setName(value);
            }}
            value={name}
            type="text"
            placeholder="Search here"
            className=" relative px-3 py-2 border-2 border-zinc-900 bg-transparent w-full rounded-full placeholder:text-zinc-800"
          />
          <div>
            <img
              onClick={fetchProduct}
              src={search}
              alt=""
              className=" absolute right-3 cursor-pointer top-2.5 h-5"
            />
          </div>
        </div>
        <div className=" w-full grid place-items-center grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-3 mt-5">
          {data.map((item, index) => {
            return (
              <div
                id="#items"
                onClick={() => {
                  navigate(`/description/${item._id}`);
                  setTopOfWindow();
                }}
                className=" w-[200px] cursor-pointer border-2 border-zinc-600 rounded-sm"
              >
                <div className=" grid place-items-center">
                  <img src={item.image} alt="" className=" p-2" />
                </div>
                <div className=" bg-gradient-to-tr from-orange-300 via-zinc-300 to-[#073b056b] px-2 py-2">
                  <h1 className=" text-md font-semibold my-2 leading-none">
                    {item.name}
                  </h1>
                  <img src={rating} alt="" className=" h-5 mb-3" />
                  <div className=" flex gap-2 items-center font-medium ">
                    <p className=" text-sm line-through ">₹{item.oldprice}</p>
                    <p className=" text-lg text-orange-800 font-semibold">
                      ₹{item.newprice}
                    </p>
                  </div>
                  <p className=" text-sm font-medium">{item.percentage}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
