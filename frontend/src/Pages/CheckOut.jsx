import axios from "axios";
import React, { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CheckOut = ({ getTotalCartAmount, cartItem, setCartItem, item_list, token, url }) => {

  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
    
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];
    item_list.map((item)=>{
      if(cartItem[item._id]>0){
        let itemInfo = item;
        itemInfo['quentity'] = cartItem[item._id];
        orderItems.push(itemInfo);    
      }
    })

    let orderData = {
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+99
    }

    const response = await axios.post(url+"/api/order/place", orderData, {headers:{token}});
    if(response.data.success) {
      toast.success("Order placed successfully")
    }
    else{
      toast.error("error")
    }
    navigate('/');
  }

  return (
    <div className=" w-full flex justify-center">
      <div className="pt-24 min-h-screen md:w-[85%] w-[95%]">
        <form onSubmit={placeOrder}
          method="post"
          className="flex lg:items-start items-center justify-between gap-5 lg:gap-10 mb-20 flex-col lg:flex-row "
        >
          <div className="place-order-left">
            <p className="text-3xl text-zinc-800 font-semibold mb-8">
              Delivery information
            </p>
            <div className=" flex gap-2">
              <input
                required
                onChange={onChangeHandler}
                value={data.firstName}
                type="text"
                name="firstName"
                id=""
                placeholder="First name"
                className="w-full  bg-transparent border border-zinc-700 px-3 py-1 rounded-lg mb-2 text-lg placeholder:text-zinc-500 font-medium outline-orange-700 outline-1"
              />
              <input
                required
                onChange={onChangeHandler}
                value={data.lastName}
                type="text"
                name="lastName"
                id=""
                placeholder="Last name"
                className="w-full  bg-transparent border border-zinc-700 px-3 py-1 rounded-lg mb-2 text-lg placeholder:text-zinc-500 font-medium outline-orange-700 outline-1"
              />
            </div>
            <input
              required
              onChange={onChangeHandler}
              value={data.email}
              type="email"
              name="email"
              id=""
              placeholder="Email address"
              className="w-full  bg-transparent border border-zinc-700 px-3 py-1 rounded-lg mb-2 text-lg placeholder:text-zinc-500 font-medium outline-orange-700 outline-1"
            />
            <input
              required
              onChange={onChangeHandler}
              value={data.street}
              type="text"
              name="street"
              id=""
              placeholder="Street"
              className="w-full  bg-transparent border border-zinc-700 px-3 py-1 rounded-lg mb-2 text-lg placeholder:text-zinc-500 font-medium outline-orange-700 outline-1"
            />
            <div className=" flex gap-2">
              <input
                required
                onChange={onChangeHandler}
                value={data.city}
                type="text"
                name="city"
                id=""
                placeholder="City"
                className="w-full  bg-transparent border border-zinc-700 px-3 py-1 rounded-lg mb-2 text-lg placeholder:text-zinc-500 font-medium outline-orange-700 outline-1"
              />
              <input
                required
                onChange={onChangeHandler}
                value={data.state}
                type="text"
                name="state"
                id=""
                placeholder="State"
                className="w-full  bg-transparent border border-zinc-700 px-3 py-1 rounded-lg mb-2 text-lg placeholder:text-zinc-500 font-medium outline-orange-700 outline-1"
              />
            </div>
            <div className=" flex gap-2">
              <input
                required
                onChange={onChangeHandler}
                value={data.zipcode}
                type="text"
                name="zipcode"
                id=""
                placeholder="Zip code"
                className="w-full  bg-transparent border border-zinc-700 px-3 py-1 rounded-lg mb-2 text-lg placeholder:text-zinc-500 font-medium outline-orange-700 outline-1"
              />
              <input
                required
                onChange={onChangeHandler}
                value={data.country}
                type="text"
                name="country"
                id=""
                placeholder="Country"
                className="w-full  bg-transparent border border-zinc-700 px-3 py-1 rounded-lg mb-2 text-lg placeholder:text-zinc-500 font-medium outline-orange-700 outline-1"
              />
            </div>
            <input
              required
              onChange={onChangeHandler}
              value={data.phone}
              type="text"
              name="phone"
              id=""
              placeholder="Phone"
              className="w-full  bg-transparent border border-zinc-700 px-3 py-1 rounded-lg mb-2 text-lg placeholder:text-zinc-500 font-medium outline-orange-700 outline-1"
            />
          </div>
          <div className="place-order-right mt-7">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-2xl text-zinc-800 font-semibold mb-2">
                Cart Totals
              </h2>
              <div className=" w-[20em] sm:w-[30em] lg:w-[25em] my-2 ">
                <div className="flex justify-between my-1 text-zinc-700 font-medium text-lg">
                  <p>Subtotal</p>
                  <p>₹{getTotalCartAmount()}</p>
                </div>
                <hr className="w-full border-zinc-400 my-1 border" />
                <div className="flex justify-between text-zinc-700 font-medium text-lg">
                  <p>Delivery fee</p>
                  <p>₹{getTotalCartAmount() === 0 ? 0 : 99}</p>
                </div>
                <hr className="w-full border-zinc-400 my-1 border" />
                <div className="flex justify-between text-zinc-700 font-medium text-lg">
                  <p>Total</p>
                  <p>
                    ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 99}
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <div className=" flex gap-2">
                   <h1 className=" font-medium text-zinc-800">Cash on delivery</h1>
                </div>
              </div>
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700/95 transition-all py-2 w-[10em] text-lg font-medium rounded-full mt-3 shadow-md shadow-zinc-800"
              >
                Place Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
