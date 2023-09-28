import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Post from "../components/Post";
import Loader from "../components/Loader";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:space-x-8">
        <div className="w-ful md:w-[70%] flex flex-col mt-8 md:mt-0">
          <h1 className="text-h1  pt-2">Your Posts:</h1>
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <div className="flex flex-col w-full md:w-[30%] space-y-4">
          <div className="p-2 ">
            <h1 className="text-h1 mb-8 ">Profile:</h1>
            <div className="space-y-2">
              <input
                type="text"
                className="px-4 py-2 outline-none text-gray-500 w-full border-[0.15px] border-black"
                placeholder="Your username"
              />
              <input
                type="email"
                className="px-4 py-2 outline-none text-gray-500 w-full border-[0.15px] border-black"
                placeholder="Your Email"
              />
              <input
                type="password"
                className="px-4 py-2 outline-none text-gray-500 w-full border-[0.15px] border-black"
                placeholder="Your Password"
              />
            </div>

            <div className="mt-8 space-x-4 flex items-center justify-center">
              <button className="text-white bg-black py-2 px-4 hover:bg-black/90 text-sm font-semibold">
                Update
              </button>
              <button className="text-white bg-black py-2 px-4 hover:bg-black/90 text-sm font-semibold">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
