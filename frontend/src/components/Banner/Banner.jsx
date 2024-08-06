import React, { useState } from "react";
import mobile2 from "../../assets/mobile.png";
import laptop1 from "../../assets/laptop.png";
import left from "../../assets/arrowleft.png";
import right from "../../assets/arrow.png";
import buds1 from "../../assets/buds.png";
import watch1 from "../../assets/watch.png";

const Banner = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  const banners = [
    {
      title: "Revolutionize Your Experience With OnePlus",
      description:
        "Unlock the future of your mobile experience with our cutting-edge mobile apps. Our innovative solutions are designed to transform your life, connect you with the world, and empower your team.",
      image: mobile2,
    },
    {
      title: "Discover the World of Laptops With Asus",
      description:
        "We are India's most trusted brands. Experience the power of a modern laptop with our innovative solutions. Our laptops are designed to boost your creativity, productivity, and overall well-being.",
      image: laptop1,
    },
    {
      title: "Upgrade Your Sound Experience with Oneplus",
      description:
        "Experience the ultimate sound experience with our high-quality earbuds. Our earbuds are designed to deliver crystal-clear audio, immersive soundscapes, and exceptional battery life.",
      image: buds1,
    },
    {
      title: "Experience the Future of Wearable Technology with Fasttrack",
      description:
        "Elevate your daily life with our smartwatch. Experience a seamless and intuitive wearable experience with our cutting-edge smartwatch features, such as 5G connectivity, AI-powered health monitoring, and customizable watch faces.",
      image: watch1,
    },
  ];

  const handleClick = (direction) => {
    if (direction === "right") {
      setBannerIndex((bannerIndex + 1) % banners.length);
    } else if (direction === "left") {
      setBannerIndex((bannerIndex - 1 + banners.length) % banners.length);
    }
  };

  return (
    <div className=" w-full flex justify-center">
      <div className=" w-[95%] flex relative">
        <img
        data-aos="fade-up" data-aos-duration="500"
          src={left}
          alt=""
          className=" bg-zinc-800 hover:scale-[1.1] transition-all h-8 mx-2 cursor-pointer  p-2 rounded-md absolute top-[50%] left-0 z-30"
          onClick={() => handleClick("left")}
        />
        <img
        data-aos="fade-up" data-aos-duration="500"
          src={right}
          alt=""
          className=" bg-zinc-800 hover:scale-[1.1] transition-all h-8 mx-2 cursor-pointer  p-2 rounded-md absolute top-[50%] right-0 z-30"
          onClick={() => handleClick("right")}
        />
        <div data-aos="zoom-in" data-aos-duration="500" className=" w-full h-fit flex-col gap-7 py-6 lg:flex-row flex justify-between rounded-md bg-gradient-to-tr from-orange-500 via-zinc-500 to-[#073b05fe] min-h-[380px] transition-all">
          <div className=" lg:w-1/2 w-full flex items-center justify-center flex-col lg:mx-20 gap-7">
            <h1 data-aos="fade-down" data-aos-duration="600" data-aos-delay="100" className=" text-xl text-center mx-2 lg:text-2xl font-semibold text-zinc-950">
              {banners[bannerIndex].title}
            </h1>
            <p data-aos="fade-down" data-aos-duration="700" data-aos-delay="200" className=" w-[80vw] sm:w-[25rem] font-medium text-gray-900 text-justify ">
              {banners[bannerIndex].description}
            </p>
            <button data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300" className=" bg-slate-800 text-zinc-200 hover:scale-[1.1] transition-all px-5 py-2 tex-md font-semibold uppercase rounded-full shadow-md shadow-zinc-500">
              Buy Today
            </button>
          </div>
          <div data-aos="flip-up" data-aos-duration="700" delay="300" className=" flex items-center lg:mr-20 w-full  justify-center lg:w-1/2">
            <img
              src={banners[bannerIndex].image}
              alt=""
              className=" rounded-2xl h-[20rem]  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;