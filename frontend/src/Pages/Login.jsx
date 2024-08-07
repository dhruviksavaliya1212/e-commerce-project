import React, { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = ({url,setToken}) => {

  const navigate = useNavigate();

  const[loading,setLoading] = useState(false)

  const[data,setData] = useState({
    email:"",
    password:""
  })

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev)=>({...prev,[name]:value}))
  }

  const handleLogin = async (e)=>{
    setLoading(true)
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/api/user/login`, data);
      if(response.data.success){
        navigate('/')
        setToken(response.data.token)
        localStorage.setItem('token', response.data.token);
        toast.success(response.data.message) 
      }
      if(!response.data.success){
        toast.error(response.data.message)
      }
    } catch (err) {
        toast.error("Error Occured")
    }
    setLoading(false)
  }

  return loading ? (
    <div className=" flex w-full justify-center items-center h-screen">
      <div class="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-orange-600"></div>
    </div>
  ): (
    <div className=" mt-7 min-h-screen w-full h-fit flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        action=""
        className=" border-2 border-zinc-700 rounded-md px-4 py-5 w-fit flex flex-col gap-4"
      >
        <h1 className=" text-2xl font-bold">Welcome Back!</h1>
        <h1 className=" text-xl font-semibold">Login Here.</h1>
        <input
          onChange={onChangeHandler}
          value={data.email}
          type="email"
          name="email"
          placeholder="Enter email"
          className=" px-3 py-1 bg-transparent border-2 border-zinc-600 placeholder:text-zinc-700 font-medium w-[18rem] sm:w-[20rem]"
        />
        <input
        onChange={onChangeHandler}
        value={data.password}
          type="password"
          name="password"
          placeholder="Enter Password"
          className=" px-3 py-1 bg-transparent border-2 border-zinc-600 placeholder:text-zinc-700 font-medium w-[18rem] sm:w-[20rem]"
        />
        <div className=" w-full flex justify-center">
          <button
            type="submit"
            className=" bg-[#FA4F07] text-md w-full py-2 uppercase font-medium"
          >
            Login
          </button>
        </div>
        <div className=" flex justify-between">
          <div className=" flex gap-1 ">
            <input type="checkbox" name="check" id="" className=" cursor-pointer" />
            <p className=" text-sm font-medium">Remember Me</p>
          </div>
          <p className=" text-sm font-medium text-blue-800 cursor-pointer underline">Forgot password?</p>
        </div>
        <p className="text-sm font-medium">Read company's <span className="text-sm font-medium text-blue-800 cursor-pointer underline">privacy policy</span></p>
        <div>
          <Link to="/register" className="text-sm font-medium">Don't have an account <span className="text-sm font-medium text-blue-800 cursor-pointer underline">Register here</span></Link>
        </div>
      </form>
      
    </div>
  );
};

export default Login;
