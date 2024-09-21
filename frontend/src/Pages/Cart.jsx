import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({
  cartItem,
  removeFromCart,
  getTotalCartAmount,
  item_list,
}) => {

  const navigate = useNavigate();

  return  (
    <div className=" min-h-screen w-full pt-20 flex  justify-center">
      <div className=" w-[95%]">
        {getTotalCartAmount() ? (
          <div>
            <div className=" hidden sm:grid sm:grid-cols-[1fr_2fr_1fr_0.5fr_1fr_1fr] item-center justify-center p-5 font-semibold border-b-2 border-b-zinc-800 bg-orange-500/50  shadow-md shadow-zinc-600">
              <p>Image</p>
              <p>Name</p>
              <p>Price</p>
              <p>Quentity</p>
              <p>Total</p>
              <p>Action</p>
            </div>
            <div className=" flex flex-col justify-center items-center gap-3">
              {item_list.map((item, index) => {
                if (cartItem[item._id] > 0) {
                  return (
                    <div
                      key={index}
                      className=" w-[250px] sm:w-full grid sm:grid-cols-[1fr_2fr_1fr_0.5fr_1fr_1fr] p-2 border-2 sm:border-0 sm:border-b-2 border-zinc-800 sm:border-b-zinc-800 items-center justify-center font-medium gap-1 sm:gap-0"
                    >
                      <img
                        src={item.image}
                        alt=""
                        className="h-60 sm:h-14"
                      />
                      <h2 className=" font-semibold text-lg sm:text-md text-center sm:text-left">
                        {item.name}
                      </h2>
                      <h3 className=" text-center sm:text-left">
                        <span className=" sm:hidden mr-5">Price</span>₹
                        {item.newprice}
                      </h3>
                      <h2 className=" text-center sm:text-left">
                        <span className=" sm:hidden mr-5">Quantity</span>
                        {cartItem[item._id]}
                      </h2>
                      <h2 className=" text-center sm:text-left">
                        <span className=" sm:hidden mr-5">Total</span>₹
                        {parseInt(item.newprice) * cartItem[item._id]}
                      </h2>
                      <button
                        onClick={() => removeFromCart(item._id)}
                        className=" mb-3 sm:mb-0 bg-red-600 w-[8rem] ml-14 sm:ml-0 md:w-[6rem] px-3 py-2 shadow-md shadow-zinc-700 rounded-full text-sm font-semibold cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  );
                }
              })}
            </div>
            <div>
              <div className=" my-10 w-full flex flex-col items-center justify-center">
                <div className=" ">
                  <h1 className=" text-2xl font-semibold">Cart Total</h1>
                </div>
                <div className=" font-medium border-b-2 border-b-zinc-800 mt-2 flex w-[20rem] sm:w-[30rem] justify-between">
                  <p>SubTotal</p>
                  <p>₹{getTotalCartAmount()}</p>
                </div>
                <div className=" font-medium border-b-2 border-b-zinc-800 flex mt-2 w-[20rem] sm:w-[30rem]  justify-between">
                  <p className=" ">Delivery Fee</p>
                  <p>₹99</p>
                </div>
                <div className=" font-medium flex mt-2  w-[20rem] sm:w-[30rem]  justify-between">
                  <p>Total</p>
                  <p>₹{getTotalCartAmount() + 99}</p>
                </div>
                <button onClick={()=> navigate('/checkout')} className=" bg-orange-600 px-5 py-2 shadow-md shadow-zinc-700 rounded-full font-semibold cursor-pointer">
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <h1 className=" text-xl font-semibold">Your cart is empty. please add items to place an order.</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
