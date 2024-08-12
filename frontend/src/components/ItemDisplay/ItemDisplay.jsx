import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import rating from "../../assets/rating_starts.png";

const ItemDisplay = ({
  id,
  name,
  image,
  oldprice,
  newprice,
  percentage,
}) => {

  const setTopOfWindow = () => {
    window.scrollTo(0, 0);
  }

  const navigate = useNavigate();

  return (
    <div 
      onClick={() => {navigate(`/description/${id}`); setTopOfWindow()}}
      className=" w-[200px] cursor-pointer border-2 border-zinc-600 rounded-sm"
    >
      <div className=" grid place-items-center">
        <img src={image} alt="" className=" p-2" />
      </div>
      <div className=" bg-gradient-to-tr from-orange-300 via-zinc-300 to-[#073b056b] px-2 py-2">
        <h1 className=" text-md font-semibold my-2 leading-none">{name}</h1>
        <img src={rating} alt="" className=" h-5 mb-3" />
        <div className=" flex gap-2 items-center font-medium ">
          <p className=" text-sm line-through ">₹{oldprice}</p>
          <p className=" text-lg text-orange-800 font-semibold">₹{newprice}</p>
        </div>
        <p className=" text-sm font-medium">{percentage}</p>
      </div>
    </div>
  );
};

export default ItemDisplay;
