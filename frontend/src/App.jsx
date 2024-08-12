import React, { useEffect, useState } from "react";
import "../src/App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Desc from "./components/Desc/Desc";
import Cart from "./Pages/Cart";
import Search from "./Pages/Search";
import Footer from './components/Footer/Footer'
export const url = "https://e-commerce-project-backend-85sa.onrender.com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import AOS from 'aos';
import 'aos/dist/aos.css'


const App = () => {

  useEffect(() => {
    AOS.init({

    })
    AOS.refresh();
  })

  const [cartItem, setCartItem] = useState({});
  const [itemsData, setItemsData] = useState([]);
  const [token,setToken] = useState("")
  const [item_list, setItem_list] = useState([]);
  const [loading,setLoading] = useState(false);

  const addToCart = async(itemId) => {
    if (!cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if(token){
      await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
    }
  };

  const removeFromCart = async(itemId) => {
    if (cartItem[itemId]) {
      setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
    if(token){
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      let itemInfo = item_list.find((product) => product._id === item);
      totalAmount += itemInfo.newprice * cartItem[item];
    }
    return totalAmount;
  };

  const fetchItem_list = async ( ) => {
    setLoading(true)
    const response = await axios.get (url+"/api/item/list");
    if(response.data.success){
      setItem_list(response.data.data);
    }
    setLoading(false)
  }

  const loadCartData = async (token) => {
    const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
    setCartItem(response.data.cartData);
  }

  useEffect(()=>{
    async function loadData(){
      await fetchItem_list();
      if(localStorage.getItem("token")){
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  },[]);

  return loading ? (
    <div className=" flex w-[100%] justify-center items-center h-[100vh]">
      <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-orange-600"></div>
    </div>
  ): (
    <div className=" h-full w-full flex font-['poppins'] flex-col justify-center items-center">
      <div className=" h-full w-[95%] ">
        <ToastContainer/>
        <Navbar token={token} setToken={setToken} />
      </div>
      <div className=" w-full xl:w-[80%]"> 
      <Routes>
        <Route path="/" element={<Home  item_list={item_list} url={url}/>}></Route>
        <Route path="/login" element={<Login url={url} setToken={setToken} />}></Route>
        <Route path="/register" element={<Register url={url} setToken={setToken}/>} />
        <Route path="/cart" element={<Cart removeFromCart={removeFromCart} cartItem={cartItem}  itemsData={itemsData} getTotalCartAmount={getTotalCartAmount} item_list={item_list} url={url} loadCartData={loadCartData} />} />
        <Route path="/search" element={<Search url={url} />} />
        <Route path="/description/:id" element={<Desc addToCart={addToCart} removeFromCart={removeFromCart} cartItem={cartItem} itemsData={itemsData} setItemsData={setItemsData} url={url} item_list={item_list}/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
