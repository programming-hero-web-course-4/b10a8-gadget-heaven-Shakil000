import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsCartCheck } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { getProducts } from '../Utilities';
import { wishGetProducts } from '../Utilities/wish';

const Head = () => {

  const [cartCount, setCartCount] = useState(0);
  const [wishCartCount, setWishCartCount] = useState(0);

  useEffect(() => {
    // Retrieve the cart items and set the count
    const cartItems = getProducts();
    setCartCount(cartItems.length);
  }, []);

  useEffect(() => {
    const wishCartItems = wishGetProducts();
    setWishCartCount(wishCartItems.length);
  }, []);


    return (
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
              <NavLink to="/statistics" className={({isActive}) => `font-bold ${isActive ? 'text-green-400 underline' : ''}`}>Statistics</NavLink>
              <NavLink to="/dashboard" className={({isActive}) => `font-bold ${isActive ? 'text-green-400 underline' : ''}`}>Dashboard</NavLink>
              <NavLink to="/blog" className={({isActive}) => `font-bold ${isActive ? 'text-green-400 underline' : ''}`}>Blogs</NavLink>
            </ul>
          </div>
          <Link to="/" className="text-xl text-black">
            Gadget haven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex text-black">
          <ul className="space-x-9">
          <NavLink to="/" className={({isActive}) => `font-bold ${isActive ? 'text-green-400 underline' : ''}`}>Home</NavLink>
              <NavLink to="/statistics" className={({isActive}) => `font-bold ${isActive ? 'text-green-400 underline' : ''}`}>Statistics</NavLink>
              <NavLink to="/dashboard" className={({isActive}) => `font-bold ${isActive ? 'text-green-400 underline' : ''}`}>Dashboard</NavLink>
              <NavLink to="/blog" className={({isActive}) => `font-bold ${isActive ? 'text-green-400 underline' : ''}`}>Blogs</NavLink>

          </ul>
        </div>
        <div className="navbar-end flex gap-5">
    <Link to="/dashboard" aria-label="Shopping Cart">
        <BsCartCheck className="rounded-full bg-white h-10 w-10 p-2" />
        {cartCount > 0 && (
            <p className='absolute top-5 right-14 lg:right-32 bg-red-500 text-white rounded-full px-2 text-xs'>
                {cartCount}
            </p>
        )}
    </Link>
    <Link to="/wishlist" aria-label="Wishlist">
        <FaRegHeart className="circle rounded-full bg-white h-10 w-10 p-2" />
        {wishCartCount > 0 && (
            <p className='absolute top-5 right-1 lg:right-48 bg-red-500 text-white rounded-full px-2 text-xs'>
                {wishCartCount}
            </p>
        )}
    </Link>
</div>
      </div>
    );
};

export default Head;


