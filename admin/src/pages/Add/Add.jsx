import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";
import FormData from "form-data";
import { toast } from "react-toastify";

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    type: "",
    description: "",
    newprice: "",
    oldprice: "",
    percentage: "",
    brand: "",
    size: "",
    os: "",
    cpu: "",
    screensize: "",
    display: "",
    resolution: "",
    refreshrate: "",
    earplacement: "",
    formfactor: "",
    color: "",
    category: "Mobile",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("type", data.type);
    formData.append("description", data.description);
    formData.append("newprice", Number(data.newprice));
    formData.append("oldprice", Number(data.oldprice));
    formData.append("percentage", data.percentage);
    formData.append("brand", data.brand);
    formData.append("color", data.color);
    formData.append("size", data.size);
    formData.append("os", data.os);
    formData.append("screensize", data.screensize);
    formData.append("display", data.display);
    formData.append("resolution", data.resolution);
    formData.append("refreshrate", data.refreshrate);
    formData.append("earplacement", data.earplacement);
    formData.append("formfactor", data.formfactor);
    formData.append("cpu", data.cpu);
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/item/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        type: "",
        description: "",
        newprice: "",
        oldprice: "",
        percentage: "",
        brand: "",
        color: "",
        size: "",
        os: "",
        screensize: "",
        display: "",
        resolution: "",
        refreshrate: "",
        earplacement: "",
        formfactor: "",
        cpu: "",
        category: "Mobile",
      });
      setImage(false);

      toast.success("Product Added");
    } else {
      toast.error(response.data.message);
    }
    setLoading(false);
  };

  return loading ? (
    <div className=" flex w-[70%] justify-center items-center h-[400px]">
      <div class="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-orange-600"></div>
    </div>
  ) : (
    <div className=" w-[70%] sm:ml-20 ml-5 mt-12 text-zinc-800 text-md">
      <form
        action=""
        className="flex flex-col gap-5 mb-10"
        onSubmit={onSubmitHandler}
      >
        <div className="flex flex-col gap-2 relative">
          <p className=" font-medium">Upload Image</p>
          <label htmlFor="images">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
              className=" w-[120px] cursor-pointer"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            name=""
            id="images"
            hidden
            required
          />
        </div>
        <div className=" flex flex-col sm:w-[350px] max-w-[350px] gap-2">
          <p className=" font-medium">Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
            className="px-3 py-[6px] border-2 outline-orange-700/50 outline-1 border-zinc-600 rounded-md bg-transparent placeholder:text-zinc-600 text-[17px]"
          />
        </div>
        <div className=" flex flex-col sm:w-[350px] max-w-[350px] gap-2">
          <p className=" font-medium">Product Type</p>
          <input
            onChange={onChangeHandler}
            value={data.type}
            type="text"
            name="type"
            placeholder="Type here"
            className="px-3 py-[6px] border-2 outline-orange-700/50 outline-1 border-zinc-600 rounded-md bg-transparent placeholder:text-zinc-600 text-[17px]"
          />
        </div>
        <div className=" flex flex-col sm:w-[350px] max-w-[350px] gap-2">
          <p className=" font-medium">Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write content here"
            className="px-3 py-1 border-2 outline-orange-600/50 outline-1 border-zinc-600 rounded-md bg-transparent placeholder:text-zinc-600"
          ></textarea>
        </div>
        <div className="flex flex-col sm:flex-row gap-10">
          <div className=" flex flex-col gap-2">
            <p className=" font-medium">Product Old Price</p>
            <input
              onChange={onChangeHandler}
              value={data.oldprice}
              type="number"
              name="oldprice"
              placeholder="₹100"
              className="px-3 py-[6px] border-2 outline-orange-700/50 outline-1 border-zinc-600 rounded-md bg-transparent placeholder:text-zinc-600 text-[17px] w-[11em]"
            />
          </div>
          <div className=" flex flex-col gap-2">
            <p className=" font-medium">Product New Price</p>
            <input
              onChange={onChangeHandler}
              value={data.newprice}
              type="number"
              name="newprice"
              placeholder="₹100"
              className="px-3 py-[6px] border-2 outline-orange-700/50 outline-1 border-zinc-600 rounded-md bg-transparent placeholder:text-zinc-600 text-[17px] w-[11em]"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-10">
          <div className=" flex flex-col gap-2">
            <p className=" font-medium">Product percentage</p>
            <input
              onChange={onChangeHandler}
              value={data.percentage}
              type="text"
              name="percentage"
              placeholder="-10%"
              className="px-3 py-[6px] border-2 outline-orange-700/50 outline-1 border-zinc-600 rounded-md bg-transparent placeholder:text-zinc-600 text-[17px] w-[11em]"
            />
          </div>
          <div className=" flex flex-col gap-2">
            <p className=" font-medium">Product Brand</p>
            <input
              onChange={onChangeHandler}
              value={data.brand}
              type="text"
              name="brand"
              placeholder="Apple"
              className="px-3 py-[6px] border-2 outline-orange-700/50 outline-1 border-zinc-600 rounded-md bg-transparent placeholder:text-zinc-600 text-[17px] w-[11em]"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-10">
          <div className=" flex flex-col gap-2">
            <p className=" font-medium">Product Color</p>
            <input
              onChange={onChangeHandler}
              value={data.color}
              type="text"
              name="color"
              placeholder=" Black"
              className="px-3 py-[6px] border-2 outline-orange-700/50 outline-1 border-zinc-600 rounded-md bg-transparent placeholder:text-zinc-600 text-[17px] w-[11em]"
            />
          </div>
          <div className=" flex flex-col gap-2">
            <p className=" font-medium">Product Size(RAM & ROM)</p>
            <input
              onChange={onChangeHandler}
              value={data.size}
              type="text"
              name="size"
              placeholder="12 GB & 128 GB"
              className="px-3 py-[6px] border-2 outline-orange-700/50 outline-1 border-zinc-600 rounded-md bg-transparent placeholder:text-zinc-600 text-[17px] w-[11em]"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-10">
          <div className=" flex flex-col gap-2">
            <p className=" font-medium">Product OS</p>
            <input
              onChange={onChangeHandler}
              value={data.os}
              type="text"
              name="os"
              placeholder="Operating System"
              className="px-3 py-[6px] border-2 outline-orange-700/50 outline-1 border-zinc-600 rounded-md bg-transparent placeholder:text-zinc-600 text-[17px] w-[11em]"
            />
          </div>
          <div className=" flex flex-col gap-2">
            <p className=" font-medium">Product CPU</p>
            <input
              onChange={onChangeHandler}
              value={data.cpu}
              type="text"
              name="cpu"
              placeholder="Snapdragon "
              className="px-3 py-[6px] border-2 outline-orange-700/50 outline-1 border-zinc-600 rounded-md bg-transparent placeholder:text-zinc-600 text-[17px] w-[11em]"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-10">
          <div className=" flex flex-col gap-2">
            <p className=" font-medium">Product Screen Size</p>
            <input
              onChange={onChangeHandler}
              value={data.screensize}
              type="text"
              name="screensize"
              placeholder="32 Inches"
              className="px-3 py-[6px] border-2 outline-orange-700/50 outline-1 border-zinc-600 rounded-md bg-transparent placeholder:text-zinc-600 text-[17px] w-[11em]"
            />
          </div>
          <div className=" flex flex-col gap-2">
            <p className=" font-medium">Product Display</p>
            <input
              onChange={onChangeHandler}
              value={data.display}
              type="text"
              name="display"
              placeholder="LED"
              className="px-3 py-[6px] border-2 outline-orange-700/50 outline-1 border-zinc-600 rounded-md bg-transparent placeholder:text-zinc-600 text-[17px] w-[11em]"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-10">
          <div className=" flex flex-col gap-2">
            <p className=" font-medium">Product Resolution</p>
            <input
              onChange={onChangeHandler}
              value={data.resolution}
              type="text"
              name="resolution"
              placeholder="4k"
              className="px-3 py-[6px] border-2 outline-orange-700/50 outline-1 border-zinc-600 rounded-md bg-transparent placeholder:text-zinc-600 text-[17px] w-[11em]"
            />
          </div>
          <div className=" flex flex-col gap-2">
            <p className=" font-medium">Product Refreshrate</p>
            <input
              onChange={onChangeHandler}
              value={data.refreshrate}
              type="text"
              name="refreshrate"
              placeholder="60 Hz"
              className="px-3 py-[6px] border-2 outline-orange-700/50 outline-1 border-zinc-600 rounded-md bg-transparent placeholder:text-zinc-600 text-[17px] w-[11em]"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-10">
          <div className=" flex flex-col gap-2">
            <p className=" font-medium">Product Ear Placement</p>
            <input
              onChange={onChangeHandler}
              value={data.earplacement}
              type="text"
              name="earplacement"
              placeholder="In ear"
              className="px-3 py-[6px] border-2 outline-orange-700/50 outline-1 border-zinc-600 rounded-md bg-transparent placeholder:text-zinc-600 text-[17px] w-[11em]"
            />
          </div>
          <div className=" flex flex-col gap-2">
            <p className=" font-medium">Product Form Factor</p>
            <input
              onChange={onChangeHandler}
              value={data.formfactor}
              type="text"
              name="formfactor"
              placeholder="True Wireless"
              className="px-3 py-[6px] border-2 outline-orange-700/50 outline-1 border-zinc-600 rounded-md bg-transparent placeholder:text-zinc-600 text-[17px] w-[11em]"
            />
          </div>
        </div>
        <div className=" flex flex-col sm:flex-row gap-10">
          <div className=" flex flex-col gap-2 max-w-[200px]">
            <p className=" font-medium">Product category</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
              name="category"
              className="bg-transparent px-3 py-2 border-2 border-zinc-500 rounded-md"
            >
              <option value="TV">TV</option>
              <option value="Mobile">Mobile</option>
              <option value="Laptop">Laptop</option>
              <option value="Smartwatch">Smartwatch</option>
              <option value="Buds">Buds</option>
              <option value="Tablet">Tablet</option>
              <option value="Powerbank">Powerbank</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className=" bg-orange-600 hover:bg-orange-700/95 w-[7em] px-3 py-2 text-lg font-semibold rounded-full shadow-md shadow-zinc-700"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
