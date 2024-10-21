import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Desc = ({ url, token }) => {
  const [itemsData, setItemsData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const { id } = useParams();

  const fetchList = async () => {
    setLoading(true);
    const response = await axios.get(`${url}/api/item/list`);
    if (response.data.success) {
      response.data.data.map((item) => {
        if (item._id === id) {
          setItemsData(item)
        }
      });
    } else {
      toast.error(response.data.message);
    }
    setLoading(false);
  };

  const updateItem = async (itemId) => {
    try {
      const updatedData = {
        itemId: itemId,
        name : itemsData.name,
        type: itemsData.type,
        percentage: itemsData.percentage,
        newprice: itemsData.newprice,
        oldprice: itemsData.oldprice,
        color: itemsData.color,
        size: itemsData.size,
        brand: itemsData.brand,
        os: itemsData.os,
        screensize: itemsData.screensize,
        cpu: itemsData.cpu,
        display: itemsData.display,
        resolution: itemsData.resolution,
        refreshrate: itemsData.refreshrate,
        earplacement: itemsData.earplacement,
        formfactor: itemsData.formfactor
      }
  
      const response = await axios.post(`${url}/api/admin/update`,updatedData)
   
      if(response.success){
        toast.success(response.data.message)
      }
    } catch (err) {
      toast.success("Error occured")
    }
  }

  useEffect(() => {
    fetchList();
  }, [token]);

  return (
    <div className=" w-[85%] sm:w-[75%]  ml-[3vw] mb-10">
      <div className="pt-20 w-full min-h-screen flex justify-center overflow-hidden">
        {itemsData && (
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="500"
            className=" w-[100%] flex flex-col xl:flex-row justify-center items-center gap-0 lg:gap-10"
          >
            <div className=" w-[20rem] md:w-[25rem] lg:w-[30rem] h-full">
              <img src={itemsData.image} alt="" className="" />
            </div>
            <div className=" m-5 flex flex-col gap-2">
              <h1 className=" text-4xl font-semibold">
                {isEdit ? (
                  <input
                    type="text"
                    onChange={(e) =>
                      setItemsData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    value={itemsData.name}
                    className=" w-full sm:w-[30rem] px-2 py-1 bg-zinc-200 text-2xl border border-zinc-500 rounded"
                  />
                ) : (
                  itemsData.name
                )}
              </h1>
              <p className=" text-md font-medium  md:w-[600px] sm:[500px]">
                {isEdit ? (
                  <input
                    type="text"
                    onChange={(e) =>
                      setItemsData((prev) => ({
                        ...prev,
                        type: e.target.value,
                      }))
                    }
                    value={itemsData.type}
                    className=" w-full sm:w-[30rem] px-2 py-1 bg-zinc-200 border border-zinc-500 rounded"
                  />
                ) : (
                  itemsData.type
                )}
              </p>
              <div className=" my-5">
                <div className="flex gap-3 items-center">
                  <p className=" text-red-500 text-xl font-normal">
                    {isEdit ? (
                      <input
                        type="text"
                        onChange={(e) =>
                          setItemsData((prev) => ({
                            ...prev,
                            percentage: e.target.value,
                          }))
                        }
                        value={itemsData.percentage}
                        className=" w-[4rem] px-2 py-1 bg-zinc-200 border border-zinc-500 rounded"
                      />
                    ) : (
                      itemsData.percentage
                    )}
                  </p>
                  <p className=" text-xl font-medium text-zinc-800">
                    ₹
                    {isEdit ? (
                      <input
                        type="text"
                        onChange={(e) =>
                          setItemsData((prev) => ({
                            ...prev,
                            newprice: e.target.value,
                          }))
                        }
                        value={itemsData.newprice}
                        className=" w-[7rem] px-2 py-1 bg-zinc-200 border border-zinc-500 rounded"
                      />
                    ) : (
                      itemsData.newprice
                    )}
                  </p>
                </div>
                <p className=" text-sm  font-medium">
                  M.R.P :
                  <span className="line-through">
                    {" "}
                    ₹
                    {isEdit ? (
                      <input
                        type="text"
                        onChange={(e) =>
                          setItemsData((prev) => ({
                            ...prev,
                            oldprice: e.target.value,
                          }))
                        }
                        value={itemsData.oldprice}
                        className=" w-[7rem] px-2 py-1 bg-zinc-200 mt-1 border border-zinc-500 rounded"
                      />
                    ) : (
                      itemsData.oldprice
                    )}
                  </span>
                </p>
              </div>
              <div className=" w-[300px] flex flex-col gap-1">
                <p
                  className={
                    itemsData.color === ""
                      ? "hidden"
                      : " font-medium text-sm grid grid-cols-2  "
                  }
                >
                  Colors
                  <span className=" capitalize text-zinc-950 ">
                    {isEdit ? (
                      <input
                        type="text"
                        onChange={(e) =>
                          setItemsData((prev) => ({
                            ...prev,
                            color: e.target.value,
                          }))
                        }
                        value={itemsData.color}
                        className=" w-[10rem] px-2 py-1 bg-zinc-200 mt-1 border border-zinc-500 rounded"
                      />
                    ) : (
                      itemsData.color
                    )}
                  </span>
                </p>
                <p
                  className={
                    itemsData.size === ""
                      ? "hidden"
                      : " font-medium text-sm grid grid-cols-2  "
                  }
                >
                  RAM & ROM
                  <span className=" capitalize text-zinc-950 ">
                    {isEdit ? (
                      <input
                        type="text"
                        onChange={(e) =>
                          setItemsData((prev) => ({
                            ...prev,
                            size: e.target.value,
                          }))
                        }
                        value={itemsData.size}
                        className=" w-[10rem] px-2 py-1 bg-zinc-200 mt-1 border border-zinc-500 rounded"
                      />
                    ) : (
                      itemsData.size
                    )}
                  </span>
                </p>
                <p
                  className={
                    itemsData.brand === ""
                      ? "hidden"
                      : " font-medium text-sm grid grid-cols-2  "
                  }
                >
                  Brand
                  <span className=" capitalize text-zinc-800 ">
                    {isEdit ? (
                      <input
                        type="text"
                        onChange={(e) =>
                          setItemsData((prev) => ({
                            ...prev,
                            brand: e.target.value,
                          }))
                        }
                        value={itemsData.brand}
                        className=" w-[10rem] px-2 py-1 bg-zinc-200 mt-1 border border-zinc-500 rounded"
                      />
                    ) : (
                      itemsData.brand
                    )}
                  </span>
                </p>
                <p
                  className={
                    itemsData.os === ""
                      ? "hidden"
                      : " font-medium text-sm grid grid-cols-2  "
                  }
                >
                  OS
                  <span className=" capitalize text-zinc-950 ">
                    {isEdit ? (
                      <input
                        type="text"
                        onChange={(e) =>
                          setItemsData((prev) => ({
                            ...prev,
                            os: e.target.value,
                          }))
                        }
                        value={itemsData.os}
                        className=" w-[7rem] px-2 py-1 bg-zinc-200 mt-1 border border-zinc-500 rounded"
                      />
                    ) : (
                      itemsData.os
                    )}
                  </span>
                </p>
                <p
                  className={
                    itemsData.screensize === ""
                      ? "hidden"
                      : " font-medium text-sm grid grid-cols-2  "
                  }
                >
                  Screen Size
                  <span className=" capitalize text-zinc-950 ">
                    {isEdit ? (
                      <input
                        type="text"
                        onChange={(e) =>
                          setItemsData((prev) => ({
                            ...prev,
                            screensize: e.target.value,
                          }))
                        }
                        value={itemsData.screensize}
                        className=" w-[10rem] px-2 py-1 bg-zinc-200 mt-1 border border-zinc-500 rounded"
                      />
                    ) : (
                      itemsData.screensize
                    )}
                  </span>
                </p>
                <p
                  className={
                    itemsData.cpu === ""
                      ? "hidden"
                      : " font-medium text-sm grid grid-cols-2  "
                  }
                >
                  CPU
                  <span className=" capitalize text-zinc-950 ">
                    {isEdit ? (
                      <input
                        type="text"
                        onChange={(e) =>
                          setItemsData((prev) => ({
                            ...prev,
                            cpu: e.target.value,
                          }))
                        }
                        value={itemsData.cpu}
                        className=" w-[10rem] px-2 py-1 bg-zinc-200 mt-1 border border-zinc-500 rounded"
                      />
                    ) : (
                      itemsData.cpu
                    )}
                  </span>
                </p>
                <p
                  className={
                    itemsData.display === ""
                      ? "hidden"
                      : " font-medium text-sm grid grid-cols-2  "
                  }
                >
                  Display
                  <span className=" capitalize text-zinc-950 ">
                    {isEdit ? (
                      <input
                        type="text"
                        onChange={(e) =>
                          setItemsData((prev) => ({
                            ...prev,
                            display: e.target.value,
                          }))
                        }
                        value={itemsData.display}
                        className=" w-[10rem] px-2 py-1 bg-zinc-200 mt-1 border border-zinc-500 rounded"
                      />
                    ) : (
                      itemsData.display
                    )}
                  </span>
                </p>
                <p
                  className={
                    itemsData.resolution === ""
                      ? "hidden"
                      : " font-medium text-sm grid grid-cols-2  "
                  }
                >
                  Resolution
                  <span className=" capitalize text-zinc-950 ">
                    {isEdit ? (
                      <input
                        type="text"
                        onChange={(e) =>
                          setItemsData((prev) => ({
                            ...prev,
                            resolution: e.target.value,
                          }))
                        }
                        value={itemsData.resolution}
                        className=" w-[10rem] px-2 py-1 bg-zinc-200 mt-1 border border-zinc-500 rounded"
                      />
                    ) : (
                      itemsData.resolution
                    )}
                  </span>
                </p>
                <p
                  className={
                    itemsData.refreshrate === ""
                      ? "hidden"
                      : " font-medium text-sm grid grid-cols-2  "
                  }
                >
                  Refreshrate
                  <span className=" capitalize text-zinc-950 ">
                    {isEdit ? (
                      <input
                        type="text"
                        onChange={(e) =>
                          setItemsData((prev) => ({
                            ...prev,
                            refreshrate: e.target.value,
                          }))
                        }
                        value={itemsData.refreshrate}
                        className=" w-[10rem] px-2 py-1 bg-zinc-200 mt-1 border border-zinc-500 rounded"
                      />
                    ) : (
                      itemsData.refreshrate
                    )}
                  </span>
                </p>
                <p
                  className={
                    itemsData.earplacement === ""
                      ? "hidden"
                      : " font-medium text-sm grid grid-cols-2  "
                  }
                >
                  Ear Placements
                  <span className=" capitalize text-zinc-950 ">
                    {isEdit ? (
                      <input
                        type="text"
                        onChange={(e) =>
                          setItemsData((prev) => ({
                            ...prev,
                            earplacement: e.target.value,
                          }))
                        }
                        value={itemsData.earplacement}
                        className=" w-[10rem] px-2 py-1 bg-zinc-200 mt-1 border border-zinc-500 rounded"
                      />
                    ) : (
                      itemsData.earplacement
                    )}
                  </span>
                </p>
                <p
                  className={
                    itemsData.formfactor === ""
                      ? "hidden"
                      : " font-medium text-sm grid grid-cols-2  "
                  }
                >
                  Form Factor
                  <span className=" capitalize text-zinc-950 ">
                    {isEdit ? (
                      <input
                        type="text"
                        onChange={(e) =>
                          setItemsData((prev) => ({
                            ...prev,
                            formfactor: e.target.value,
                          }))
                        }
                        value={itemsData.formfactor}
                        className=" w-[10rem] px-2 py-1 bg-zinc-200 mt-1 border border-zinc-500 rounded"
                      />
                    ) : (
                      itemsData.formfactor
                    )}
                  </span>
                </p>
              </div>
              <div className=" md:w-[600px] sm:[500px]">
                <h1 className=" text-lg my-3 font-zinc-800 font-semibold underline">
                  About the device
                </h1>
                <p className=" text-justify leading-snug text-md font-medium text-zinc-900">
                  {" "}
                  {isEdit ? (
                    <textarea
                      onChange={(e) =>
                        setItemsData((prev) => ({
                          ...prev,
                          description: e.target.value,
                        }))
                      }
                      value={itemsData.description}
                      name="description"
                      rows="6"
                      className="w-[20rem] bg-zinc-200 px-3 py-1 border-2 outline-orange-600/50 outline-1 border-zinc-600 rounded-md bg-transparent placeholder:text-zinc-600"
                    ></textarea>
                  ) : (
                    itemsData.description
                  )}
                </p>
              </div>

              {isEdit ? (
                <button onClick={() => {updateItem(itemsData._id); setIsEdit(false)}} className=" border-2 border-orange-600 px-5 py-2 bg-zinc-100 w-[10rem] rounded-full hover:bg-orange-600 hover:scale-105 transition-all duration-500 hover:text-white">Save</button>
              ) : (
                <button onClick={() => setIsEdit(true)} className=" border-2 border-orange-600 px-5 py-2 bg-zinc-100 w-[10rem] rounded-full hover:bg-orange-600 hover:scale-105 transition-all duration-500 hover:text-white">Edit</button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Desc;
