import React from "react";
import Post from "../components/Post";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-[200px]">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <Footer />
    </>
  );
};

export default Home;
