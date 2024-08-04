import React from "react";
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
    title: "Free Shipping",
    description: "Free shipping on all order",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
    title: "Safe Money",
    description: "30 Days money back",
  },
  {
    id: 3,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
    title: "Online support 24/7",
    description: "Technical support 24/7",
  },
  {
    id: 4,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "Secure Payment",
    description: "All payment Secure",
  },
];

const Services = () => {
  return (
    <div className="w-full mt-5 flex justify-center">
      <div data-aos="fade-up" data-aos-delay="400" className=" w-[95%]">
        <div className=" w-full flex items-center justify-center text-2xl font-semibold text-[#fa3c07]">
          <h1 >Our Services</h1>
        </div>
        <div className=" mt-3 py-2 border-2 border-zinc-800 rounded-md">
          <div className="grid place-items-center mt-3  grid-cols-2 lg:grid-cols-4 gap-4 ">
            {ServiceData.map((data) => (
              <div  
                key={data.id}
                className="flex flex-col ml-3 items-center justify-center sm:items-start sm:flex-row gap-4 "
              >
                <span className="text-[#FA4F07]">{data.icon}</span>
                <div>
                  <h1 className="text-lg text-zinc-800 font-semibold">
                    {data.title}
                  </h1>
                  <h1 className=" text-sm">{data.description}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
