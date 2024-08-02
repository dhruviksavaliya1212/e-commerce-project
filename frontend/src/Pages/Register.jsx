import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from "react-toastify";

const Register = ({url, setToken}) => {

  const navigate = useNavigate();

  const[loading,setLoading] = useState(false);
  const [data,setData] = useState({
    name : "",
    email : "",
    password : ""
  })

  const onChangeHandler = (e) => {
    const value = e.target.value;
    const name =  e.target.name;
    setData((prev)=>({...prev,[name]:value}))
    console.log(data)
  }

  const onRegister = async (e) => {
    setLoading(true)
    e.preventDefault()
    try {
      const response = await axios.post(`${url}/api/user/register`, data);
      console.log(response)
      if(response.data.success){
        navigate("/");
        setToken(response.data.token)
        localStorage.setItem("token", response.data.token);
      }
      toast.success(response.data.message);

    } catch (err) {
      toast.error(response.data.message);
    }
    setLoading(false)
  }

  return loading ? (
    <div className=" flex w-[70%] justify-center items-center h-[400px]">
      <div class="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-orange-600"></div>
    </div>
  ): (
    <div className=" mt-7 w-full min-h-screen h-fit flex items-center justify-center">
      <form
        onSubmit={onRegister}
        action=""
        className=" border-2 border-zinc-700 rounded-md px-4 py-5 w-fit flex flex-col gap-4"
      >
        <h1 className=" text-2xl font-bold">Welcome</h1>
        <h1 className=" text-xl font-semibold">Register Here.</h1>
        <input
          onChange={onChangeHandler}
          type="text"
          name="name"
          placeholder="Enter name"
          className=" px-3 py-1 bg-transparent border-2 border-zinc-600 placeholder:text-zinc-700 font-medium w-[20rem]"
        />
        <input
          onChange={onChangeHandler}
          value={data.email}
          type="email"
          name="email"
          placeholder="Enter email"
          className=" px-3 py-1 bg-transparent border-2 border-zinc-600 placeholder:text-zinc-700 font-medium w-[20rem]"
        />
        <input
          onChange={onChangeHandler}
          value={data.password}
          type="password"
          name="password"
          placeholder="Enter Password"
          className=" px-3 py-1 bg-transparent border-2 border-zinc-600 placeholder:text-zinc-700 font-medium w-[20rem]"
        />
        <div className=" w-full flex justify-center">
          <button
            type="submit"
            className=" bg-[#FA4F07] text-md w-full py-2 uppercase font-medium"
          >
            Register
          </button>
        </div>
        <div className=" flex justify-between">
          <div className=" flex gap-1 ">
            <input
              type="checkbox"
              name="check"
              className=" cursor-pointer"
            />
            <p className=" text-sm font-medium">Remember Me</p>
          </div>
        </div>
        <p className="text-sm font-medium">
          Read company's{" "}
          <span className="text-sm font-medium text-blue-800 cursor-pointer underline">
            privacy policy
          </span>
        </p>
        <div>
          <Link to="/login" className="text-sm font-medium">
            You have an account{" "}
            <span className="text-sm font-medium text-blue-800 cursor-pointer underline">
              Login here
            </span>
          </Link>
        </div>
      </form>
      
    </div>
  );
};

export default Register;
