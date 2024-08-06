import React from "react";
import mobile2 from "../../assets/mobile2.webp";
import laptop1 from "../../assets/laptop2.png";
import buds1 from "../../assets/buds1.png";
import tv1 from "../../assets/tv1.png";
import watch1 from "../../assets/watch1.png";
import tablet from "../../assets/tablet.png";
import powerbank from "../../assets/powerbak.png";

const Explore = ({category, setCategory}) => {
  return (
    <div id="items" className=" mt-10 w-full flex justify-center">
      <div data-aos="fade-up" data-aos-delay="400" data-aos-duration="500" className="md:w-[95%] w-[100%]">
        <div className=" flex justify-center">
          <h1 className=" text-2xl font-semibold text-orange-600 mb-5">
            Explore Electronics
          </h1>
        </div>
        <div className=" scrollbar-hide h-fit overflow-x-scroll flex items-center gap-16 px-2">
          <div className=" w-36 flex justify-center flex-col items-center ">
            <div onClick={() =>
                  setCategory((prev) =>
                    prev === "Mobile" ? "All" : "Mobile"
                  )
                } className={`${
                  category === "Mobile"
                    ? " border-[3px] border-zinc-900 "
                    : ""
                } w-28 h-28 border-2 cursor-pointer border-orange-800 bg-gradient-to-tr from-orange-500 via-zinc-500 to-[#073b05fe] grid place-items-center rounded-full`}>
              <img src={mobile2} alt=""  className=" w-14 rounded-md" />
            </div>
            <h1 className=" text-lg font-semibold mt-1 ">Mobiles</h1>
          </div>
          <div className=" w-36 flex justify-center flex-col items-center ">
            <div onClick={() =>
                  setCategory((prev) =>
                    prev === "Laptop" ? "All" : "Laptop"
                  )
                } className={`${
                  category === "Laptop"
                    ? " border-[3px] border-zinc-900 "
                    : ""
                } w-28 h-28 border-2 cursor-pointer border-orange-800 bg-gradient-to-tr from-orange-500 via-zinc-500 to-[#073b05fe] grid place-items-center rounded-full`}>
              <img src={laptop1} alt="" className=" w-20" />
            </div>
            <h1 className=" text-lg font-semibold mt-1 ">Laptops</h1>
          </div>
          <div className=" w-36 flex justify-center flex-col items-center ">
            <div onClick={() =>
                  setCategory((prev) =>
                    prev === "Buds" ? "All" : "Buds"
                  )
                } className={`${
                  category === "Buds"
                    ? " border-[3px] border-zinc-900 "
                    : ""
                } w-28 h-28 border-2 cursor-pointer border-orange-800 bg-gradient-to-tr from-orange-500 via-zinc-500 to-[#073b05fe] grid place-items-center rounded-full`}>
              <img src={buds1} alt="" className=" w-16" />
            </div>
            <h1 className=" text-lg font-semibold mt-1 ">Buds</h1>
          </div>
          <div className=" w-36 flex justify-center flex-col items-center ">
            <div onClick={() =>
                  setCategory((prev) =>
                    prev === "TV" ? "All" : "TV"
                  )
                } className={`${
                  category === "TV"
                    ? " border-[3px] border-zinc-900 "
                    : ""
                } w-28 h-28 border-2 cursor-pointer border-orange-800 bg-gradient-to-tr from-orange-500 via-zinc-500 to-[#073b05fe] grid place-items-center rounded-full`}>
              <img src={tv1} alt="" className=" w-20" />
            </div>
            <h1 className=" text-lg font-semibold mt-1 ">Smart TVs</h1>
          </div>
          <div className=" flex justify-center flex-col items-center ">
            <div onClick={() =>
                  setCategory((prev) =>
                    prev === "Smartwatch" ? "All" : "Smartwatch"
                  )
                } className={`${
                  category === "Smartwatch"
                    ? " border-[3px] border-zinc-900 "
                    : ""
                } w-28 h-28 border-2 cursor-pointer border-orange-800 bg-gradient-to-tr from-orange-500 via-zinc-500 to-[#073b05fe] grid place-items-center rounded-full`}>
              <img src={watch1} alt="" className=" w-16" />
            </div>
            <h1 className=" text-lg font-semibold mt-1 w-[8rem] ">
              Smart Watch
            </h1>
          </div>
          <div className=" w-36 flex justify-center flex-col items-center ">
            <div onClick={() =>
                  setCategory((prev) =>
                    prev === "Powerbank" ? "All" : "Powerbank"
                  )
                } className={`${
                  category === "Powerbank"
                    ? " border-[3px] border-zinc-900"
                    : ""
                } w-28 h-28 border-2 cursor-pointer border-orange-800 bg-gradient-to-tr from-orange-500 via-zinc-500 to-[#073b05fe] grid place-items-center rounded-full`}>
              <img src={powerbank} alt="" className=" w-9 mt-1" />
            </div>
            <h1 className=" text-lg font-semibold mt-1 ">Powerbank</h1>
          </div>
          <div className=" w-36 flex justify-center flex-col items-center ">
            <div onClick={() =>
                  setCategory((prev) =>
                    prev === "Tablet" ? "All" : "Tablet"
                  )
                } className={`${
                  category === "Tablet"
                    ? " border-[3px] border-zinc-900"
                    : ""
                } w-28 h-28 border-2 cursor-pointer border-orange-800 bg-gradient-to-tr from-orange-500 via-zinc-500 to-[#073b05fe] grid place-items-center rounded-full`}>
              <img src={tablet} alt="" className=" w-14 rounded-md" />
            </div>
            <h1 className=" text-lg font-semibold mt-1 ">Tablet</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
