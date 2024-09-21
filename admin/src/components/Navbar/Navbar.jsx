import React from "react";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({token, setToken}) => {

  const navigate = useNavigate();

  const setTopOfWindow = () => {
    window.scrollTo(0, 0);
  }

  const logout = () => {
    localStorage.removeItem('token');
    setToken("");
    navigate('/login');
  }

  return (
    <div className="flex justify-between items-center px-[4%] py-4">
      <img src={assets.logo} alt="" className="w-[12em]" />
      { !token ? (

      <Link
        onClick={setTopOfWindow()}
        to="/login"
        type="button"
        value="submit"
        className=" bg-[#FA4F07] px-5 py-1 tex-md font-semibold uppercase rounded-full shadow-md shadow-orange-400"
      >
        Login
      </Link>
      ) : (
        <button
        onClick={logout}
        type="button"
        value="submit"
        className=" bg-[#FA4F07] px-5 py-1 tex-md font-semibold uppercase rounded-full shadow-md shadow-orange-400"
      >
        Logout
      </button>
      )}
    </div>
  );
};

export default Navbar;
