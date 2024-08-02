import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import search from "../../assets/search_icon.png";
import cart from "../../assets/basket_icon.png";
import { Link, useNavigate } from "react-router-dom";
import profile from "../../assets/profile_icon.png";
import logout from "../../assets/logout_icon.png";
import bag from "../../assets/bag_icon.png";
import '../Navbar/navbar.css'

const Navbar = ({ token, setToken }) => {
  const navigate = useNavigate();

  const [nav, setNav] = useState("Home");

  const hanldeClick = (newNav) => {
    setNav(newNav);
  };

  const logOut = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="w-full z-20 bg-transparent backdrop-blur-sm  md:w-[98%] fixed lg:w-[95%] h-14 pr-5 mt-1 lg:mt-0 scroll-smooth">
      <div className=" w-full flex items-center justify-between">
        <div className=" h-full">
          <img src={logo} alt="" className=" h-10 sm:h-14" />
        </div>
        <div className=" md:flex gap-3 font-medium hidden">
          <Link
            to="/"
            onClick={() => hanldeClick("Home")}
            className={
              nav === "Home" ? "pb-1 border-b-[2.5px] border-[#FA4F07]" : ""
            }
          >
            Home
          </Link>
          <a
            onClick={() => hanldeClick("Electronics")}
            href="#items"
            className={
              nav === "Electronics"
                ? "pb-1 border-b-[2.5px] border-[#FA4F07]"
                : ""
            }
          >
            Electronics
          </a>
          <a
            onClick={() => hanldeClick("Mobile-app")}
            href="#app"
            className={
              nav === "Mobile-app"
                ? "pb-1 border-b-[2.5px] border-[#FA4F07]"
                : ""
            }
          >
            Mobile-App
          </a>
          <a
            onClick={() => hanldeClick("Contact-us")}
            href="#footer"
            className={
              nav === "Contact-us"
                ? "pb-1 border-b-[2.5px] border-[#FA4F07]"
                : ""
            }
          >
            Contact-Us
          </a>
        </div>
        <div className=" flex gap-4 items-center ">
          <img
            onClick={() => navigate("/search")}
            src={search}
            alt=""
            className=" h-5 cursor-pointer"
          />
          <img
            onClick={() => navigate("/cart")}
            src={cart}
            alt=""
            className=" h-6 cursor-pointer"
          />
          {!localStorage.getItem("token") ? (
            <Link
              to="/login"
              type="button"
              value="submit"
              className=" bg-[#FA4F07] px-5 py-1 tex-md font-semibold uppercase rounded-full shadow-md shadow-orange-400"
            >
              Login
            </Link>
          ) : (
            <div className="navbar-profile relative transition-all duration-100">
              <img src={profile} alt="" className=" w-6 " />
              <ul className=" w-[8em] hidden nav-profile-dropdown absolute right-0 top-8 gap-1 flex-col bg-zinc-200 rounded-md border-2 border-orange-600 font-medium ">
                <li
                  onClick={() => navigate("/myorders")}
                  className=" mx-4 my-3 cursor-pointer flex gap-2 text-md"
                >
                  <img src={bag} alt="" className="w-6" />{" "}
                  <p className=" hover:text-orange-700">Orders</p>
                </li>
                <hr className=" border-2 border-orange-600 mx-2" />
                <li
                  onClick={logOut}
                  className=" mx-4 my-3 cursor-pointer flex gap-2 text-md"
                >
                  <img src={logout} alt="" className="w-6" />{" "}
                  <p className=" hover:text-orange-700">Logout</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
