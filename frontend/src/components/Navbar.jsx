import React from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

const Navbar = () => {
  const user = true;
  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      {/* logo */}
      <Link to="/" className="flex gap-1">
        <div>
          <img src="./another.png" alt="logo" width={"65px"} height={"65px"} />
        </div>
        <div>
          <h1 className="text-lg font-medium mt-3">Blog Market</h1>
        </div>
      </Link>

      {/* search bar */}
      <div className="hidden md:flex items-center justify-center space-x-0  rounded-lg overflow-hidden px-1 py-2 shadow-lg">
        <label htmlFor="search">
          <BiSearchAlt className="w-7 h-7" />
        </label>
        <input
          className="outline-none px-3"
          id="search"
          type="text"
          placeholder="Search a post"
        />
      </div>

      {/* Login / Register */}
      <div className="flex items-center justify-center space-x-2 md:space-x-4">
        {user ? <Link to="/write">Write</Link> : <Link to="/login">Login</Link>}
        {user ? (
          <Link to="/profile">Profile</Link>
        ) : (
          <Link to="/register">Register</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
