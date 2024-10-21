import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import  assets  from "../../assets/parcel_icon.png";

const Orders = ({ url, token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(`${url}/api/order/list`);
    if (response.data.success) {
      setOrders(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const statusHandler = async (e, orderId) => {
    try {
      const response = await axios.post(`${url}/api/order/status`, {
        orderId,
        status: e.target.value,
      });
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (err) {
    }

  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    !token ? (
      <div className="text-center text-xl mt-5 ml-5 text-red-600">
        Please login
      </div>
    ) :  (
    <div className=" my-10 px-5 sm:px-10 w-[80%]">
      <h3 className=" text-xl text-zinc-800 font-semibold">Order Page</h3>
      <div className="">
        {orders.map((order, index) => {
          return (
            <div
              key={index}
              className=" mt-5 grid md:grid-cols-[0.5fr_2.5fr_1fr_0.5fr_1fr]  sm:grid-cols-[0.5fr_2fr_0.5fr] items-start gap-7 border-2 border-zinc-700 p-5 rounded-md"
            >
              <img src={assets} alt="" />
              <div className="">
                <p className=" font-medium mb-4">
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + " * " + item.quentity;
                    } else {
                      return item.name + " * " + item.quentity + ", ";
                    }
                  })}
                </p>
                <p className=" font-medium">
                  {order.address.firstName + " " + order.address.lastName}
                </p>
                <div>
                  <p>{order.address.street}</p>
                  <p>
                    {order.address.city +
                      " " +
                      order.address.state +
                      " " +
                      order.address.country +
                      " " +
                      order.address.zipcode}
                  </p>
                </div>
                <p className=" mt-3">{order.address.phone}</p>
              </div>
              <p className=" -mt-2 sm:-mt-0">Items: {order.items.length}</p>
              <p className=" -mt-6 sm:-mt-0">₹{order.amount}</p>
              <select
                value={order.status}
                onChange={(e) => {
                  statusHandler(e, order._id);
                }}
                className=" text-md bg-transparent border-2 cursor-pointer border-zinc-600 px-3 py-2 rounded-lg w-[12em] -mt-5 sm:-mt-0 "
              >
                <option value="Food Processing">Food Processing</option>
                <option value="Out For Delivery">Out For Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          );
        })}
      </div>
    </div>
    )
  );
};

export default Orders;
