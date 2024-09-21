import React, { useContext, useEffect, useState } from "react";
import add from "../../assets/add_icon_green.png";
import remove from "../../assets/remove_icon_red.png";
import { useParams } from "react-router-dom";

const Desc = ({
  addToCart,
  removeFromCart,
  cartItem,
  itemsData,
  setItemsData,
  url,
  item_list,
}) => {
  const { id } = useParams();

  useEffect(() => {
    item_list.map((item) => {
      if (item._id === id) {
        setItemsData(item);
      }
    });
  }, [id]);

  return (
    <div className=" min-h-screen">
      <div className="pt-20  w-full flex justify-center overflow-hidden">
        {itemsData ? (
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="500"
            className=" w-[95%] flex flex-col lg:flex-row justify-center items-center gap-0 lg:gap-10"
          >
            <div className=" w-[20rem] md:w-[25rem] lg:w-[30rem] h-full">
              <img src={itemsData.image} alt="" className="" />
            </div>
          </div>
        ) : null}
      </div>
    <div className="pt-20 w-full min-h-screen flex justify-center overflow-hidden">
      {itemsData ? (
        <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="500" className=" w-[95%] flex flex-col lg:flex-row justify-center items-center gap-0 lg:gap-10">
          <div className=" w-[20rem] md:w-[25rem] lg:w-[30rem] h-full">
            <img src={itemsData.image} alt="" className="" />
          </div>
          <div className=" m-5 flex flex-col gap-2">
            <h1 className=" text-4xl font-semibold">{itemsData.name}</h1>
            <p className=" text-md font-medium  md:w-[600px] sm:[500px]">{itemsData.type}</p>
            <div className=" my-5">
              <div className="flex gap-3 items-center">
                <p className=" text-red-500 text-xl font-normal">
                  {itemsData.percentage}
                </p>
                <p className=" text-xl font-medium text-zinc-800">
                  ₹{itemsData.newprice}
                </p>
              </div>
              <p className=" text-sm  font-medium">
                M.R.P :
                <span className="line-through"> ₹{itemsData.oldprice}</span>
              </p>
            </div>
            <div className=" m-5 flex flex-col gap-2">
              <h1 className=" text-4xl font-semibold">{itemsData.name}</h1>
              <p className=" text-md font-medium  md:w-[600px] sm:[500px]">
                {itemsData.type}
              </p>
              <div className=" my-5">
                <div className="flex gap-3 items-center">
                  <p className=" text-red-500 text-xl font-normal">
                    {itemsData.percentage}
                  </p>
                  <p className=" text-xl font-medium text-zinc-800">
                    ₹{itemsData.newprice}
                  </p>
                </div>
                <p className=" text-sm  font-medium">
                  M.R.P :
                  <span className="line-through"> ₹{itemsData.oldprice}</span>
                </p>
              </div>
              <div className=" w-[300px] flex flex-col gap-1">
                <p
                  className={
                    itemsData.color === ""
                      ? "hidden"
                      : " font-medium text-sm grid grid-cols-2  "
                  }
                >
                  Colors
                  <span className=" capitalize text-zinc-950 ">
                    {itemsData.color}
                  </span>
                </p>
                <p
                  className={
                    itemsData.size === ""
                      ? "hidden"
                      : " font-medium text-sm grid grid-cols-2  "
                  }
                >
                  RAM & ROM
                  <span className=" capitalize text-zinc-950 ">
                    {itemsData.size}
                  </span>
                </p>
                <p
                  className={
                    itemsData.brand === ""
                      ? "hidden"
                      : " font-medium text-sm grid grid-cols-2  "
                  }
                >
                  Brand
                  <span className=" capitalize text-zinc-800 ">
                    {itemsData.brand}
                  </span>
                </p>
                <p
                  className={
                    itemsData.os === ""
                      ? "hidden"
                      : " font-medium text-sm grid grid-cols-2  "
                  }
                >
                  OS
                  <span className=" capitalize text-zinc-950 ">
                    {itemsData.os}
                  </span>
                </p>
                <p
                  className={
                    itemsData.screensize === ""
                      ? "hidden"
                      : " font-medium text-sm grid grid-cols-2  "
                  }
                >
                  Screen Size
                  <span className=" capitalize text-zinc-950 ">
                    {itemsData.screensize}
                  </span>
                </p>
                <p
                  className={
                    itemsData.cpu === ""
                      ? "hidden"
                      : " font-medium text-sm grid grid-cols-2  "
                  }
                >
                  CPU
                  <span className=" capitalize text-zinc-950 ">
                    {itemsData.cpu}
                  </span>
                </p>
                <p
                  className={
                    itemsData.display === ""
                      ? "hidden"
                      : " font-medium text-sm grid grid-cols-2  "
                  }
                >
                  Display
                  <span className=" capitalize text-zinc-950 ">
                    {itemsData.display}
                  </span>
                </p>
                <p
                  className={
                    itemsData.resolution === ""
                      ? "hidden"
                      : " font-medium text-sm grid grid-cols-2  "
                  }
                >
                  Resolution
                  <span className=" capitalize text-zinc-950 ">
                    {itemsData.resolution}
                  </span>
                </p>
                <p
                  className={
                    itemsData.refreshrate === ""
                      ? "hidden"
                      : " font-medium text-sm grid grid-cols-2  "
                  }
                >
                  Refreshrate
                  <span className=" capitalize text-zinc-950 ">
                    {itemsData.refreshrate}
                  </span>
                </p>
                <p
                  className={
                    itemsData.earplacement === ""
                      ? "hidden"
                      : " font-medium text-sm grid grid-cols-2  "
                  }
                >
                  Ear Placements
                  <span className=" capitalize text-zinc-950 ">
                    {itemsData.earplacement}
                  </span>
                </p>
                <p
                  className={
                    itemsData.formfactor === ""
                      ? "hidden"
                      : " font-medium text-sm grid grid-cols-2  "
                  }
                >
                  Form Factor
                  <span className=" capitalize text-zinc-950 ">
                    {itemsData.formfactor}
                  </span>
                </p>
              </div>
              <div className=" md:w-[600px] sm:[500px]">
                <h1 className=" text-lg my-3 font-zinc-800 font-semibold underline">
                  About the device
                </h1>
                <p className=" text-justify leading-snug text-md font-medium text-zinc-900">
                  {" "}
                  {itemsData.description}
                </p>
              </div>
              {!cartItem[id] ? (
                <div className=" my-5">
                  <a
                    onClick={() => addToCart(id)}
                    className=" bg-orange-600 px-5 py-2 shadow-md shadow-zinc-700 rounded-full font-semibold cursor-pointer"
                  >
                    Add to cart
                  </a>{" "}
                </div>
              ) : (
                <div className="w-fit px-1 py-1 rounded-full bg-orange-600 flex items-center gap-5 border-2 border-orange-600 ">
                  <img
                    onClick={() => removeFromCart(id)}
                    src={remove}
                    alt=""
                    className=" cursor-pointer hover:scale-110 h-9 transition-all"
                  />
                  <p className=" font-medium">{cartItem[id]}</p>
                  <img
                    onClick={() => addToCart(id)}
                    src={add}
                    alt=""
                    className=" cursor-pointer hover:scale-110 h-9 transition-all"
                  />
                </div>
              )}
            </div>
          </div>
      </div>
        ) : null}
    </div>
    </div>
  );
};

export default Desc;
