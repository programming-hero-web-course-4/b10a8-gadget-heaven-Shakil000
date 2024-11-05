import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";


const Navbar = ({mainTitle, subTitle, button,button_w, name, menu, icons}) => {
  return (
      <div className="bg-[#9538E2] w-11/12 rounded-xl mx-auto">
    <div className="my-5">
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
            {name}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex text-white">
          {menu}
        </div>
        <div className="navbar-end flex gap-5">
        {icons}
        </div>
      </div>
      <div className="text-center pb-48">
        <h1 className="text-5xl w-8/12 mx-auto font-bold text-[#FFFFFF]">{mainTitle}</h1>
        <p className="text-[16px] text-[#FFFFFF] py-10 w-5/12 mx-auto">{subTitle}</p>
       <div className="space-x-3">
       <button className="bg-white px-6 py-2 rounded-full text-[#9538E2] font-bold">{button}</button>
       <button>{button_w}</button>
       </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
