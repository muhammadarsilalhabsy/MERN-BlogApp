import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import { RxCross2 } from "react-icons/rx";

const EditPost = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const deleteCategory = (index) => {
    let temp = [...categories];
    temp.splice(index);
    setCategories(temp);
  };
  const addCategories = () => {
    let temp = [...categories];
    temp.push(category);
    setCategory("");
    setCategories(temp);
  };
  console.log(categories);
  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-[200px] mt-8 ">
        <h1 className="text-h1 md:text-3xl text-center">Edit Post</h1>

        <form className="flex flex-col w-full bg-slate-300 mt-4 space-y-4 md:space-y-8 p-4 rounded-md">
          {/* Title */}
          <input
            type="text"
            placeholder="Enter a post title"
            className="px-4 py-2 outline-none"
          />
          {/* Image */}
          <input accept="image/*" type="file" />

          {/* Categories */}
          <div className="flex flex-col">
            <div className="flex items-center ">
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="Enter post categories"
                className="py-2 px-4 outline-none w-full"
              />
              <div
                onClick={addCategories}
                className="py-2 px-6 font-semibold cursor-pointer bg-black text-white"
              >
                Add
              </div>
            </div>
            {categories.length !== 0 ? (
              <div className="flex mt-3 p-2 border-[0.15px] border-black bg-white">
                {categories?.map((name, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center space-x-2 mr-2 bg-gray-200 px-2 py-1 rounded-md border-black border-[0.15px]"
                  >
                    <p className="text-sm text-gray-700">{name}</p>
                    <RxCross2
                      onClick={() => deleteCategory(index)}
                      className="text-white hover:text-black bg-black hover:bg-red-500 rounded-full p-1 text-2xl cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>

          {/* Description */}
          <textarea
            cols="30"
            rows="10"
            className="outline-none px-4 py-2"
            placeholder="Enter post description..."
          ></textarea>

          {/* Submit button */}
          <button className="text-white py-2 text-xl bg-black mx-auto w-full md:w-[20%] font-semibold">
            Edit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default EditPost;
