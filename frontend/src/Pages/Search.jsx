import React from "react";
import search from "../assets/search_icon.png";

const Search = () => {
  return (
    <div className=" pt-20 min-h-screen w-full h-fit flex justify-center">
      <div className=" w-[95%] flex justify-center ">
        <div className="relative w-[25rem] ">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search here"
            className=" relative px-3 py-2 border-2 border-zinc-900 bg-transparent w-full rounded-full placeholder:text-zinc-800"
          />
          <div>
            <img src={search} alt="" className=" absolute right-3 cursor-pointer top-2.5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
