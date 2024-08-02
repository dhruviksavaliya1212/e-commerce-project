import React from "react";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-[4%] py-4">
      <img src={assets.logo} alt=""  className="w-[12em]"/>
      <img src={assets.profile_image} alt=""  className=" w-6"/>
    </div>
  );
};

export default Navbar;
