import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  return (
      <div className="bg-[#9538E2] w-11/12 rounded-xl mt-14 mx-auto">
    <div className="border-x border-gray-300 -mx-2 rounded my-2">
      <div className="navbar max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <NavLink to="/" className={({isActive}) => `font-bold ${isActive ? 'text-green-400 underline' : ''}`}>Home</NavLink>
              <NavLink to="statistics" className={({isActive}) => `font-bold ${isActive ? 'text-green-400 underline' : ''}`}>Statistics</NavLink>
              <NavLink to="dashboard" className={({isActive}) => `font-bold ${isActive ? 'text-green-400 underline' : ''}`}>Dashboard</NavLink>
            </ul>
          </div>
          <Link to="/" className="text-xl text-white">
            Gadget haven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex text-white">
          <ul className="space-x-9">
          <NavLink to="/" className={({isActive}) => `font-bold ${isActive ? 'text-green-400 underline' : ''}`}>Home</NavLink>
              <NavLink to="statistics" className={({isActive}) => `font-bold ${isActive ? 'text-green-400 underline' : ''}`}>Statistics</NavLink>
              <NavLink to="dashboard" className={({isActive}) => `font-bold ${isActive ? 'text-green-400 underline' : ''}`}>Dashboard</NavLink>
          </ul>
        </div>
        <div className="navbar-end flex gap-5">
        <BsCartCheck  className="rounded-full bg-white h-10 w-10 p-2"/>
        <FaRegHeart className="circle rounded-full bg-white h-10 w-10 p-2"/>
        </div>
      </div>
      <div className="text-center pt-10 pb-52">
        <h1 className="text-5xl font-bold text-[#FFFFFF]">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
        <p className="text-[16px] text-[#FFFFFF] py-10">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
        <button className="bg-white px-5 py-2 rounded-full text-[#9538E2] font-bold">Shop Now</button>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
