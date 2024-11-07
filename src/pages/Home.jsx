import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Heading from '../components/Heading';
import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import { BsCartCheck } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { getProducts } from '../Utilities';
import { wishGetProducts } from '../Utilities/wish';

const Home = () => {

    const categories = useLoaderData();

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
        <div>
             
            <Navbar name={'Gadget haven'}
            icons={
                <ul className='flex gap-5'>
                    <Link to="/dashboard"> <BsCartCheck  className="rounded-full bg-white h-10 w-10 p-2"/><p className='absolute top-5 lg:right-44 right-5 bg-red-500 text-white rounded-full px-2 text-xs'>{cartCount}</p></Link>
                    <Link to="/wishlist"> <FaRegHeart className="circle rounded-full bg-white h-10 w-10 p-2"/><p className='absolute top-5 lg:right-28 right-20 bg-red-500 text-white rounded-full px-2 text-xs'>{wishCartCount}</p></Link>
                </ul>
            }
             mainTitle={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'} 
            menu={
                <ul className="space-x-9">
          <NavLink to="/" className={({isActive}) => `font-bold ${isActive ? 'text-green-400 underline' : ''}`}>Home</NavLink>
              <NavLink to="statistics" className={({isActive}) => `font-bold ${isActive ? 'text-green-400 underline' : ''}`}>Statistics</NavLink>
              <NavLink to="dashboard" className={({isActive}) => `font-bold ${isActive ? 'text-green-400 underline' : ''}`}>Dashboard</NavLink>
              <NavLink to="blog" className={({isActive}) => `font-bold ${isActive ? 'text-green-400 underline' : ''}`}>Blogs</NavLink>

          </ul>
            }
            subTitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'} 
            button= 'Shop Now'>
            </Navbar>
            <Banner></Banner>

            <Heading title={'Explore Cutting-Edge Gadgets'}></Heading>
           
            <Categories categories={categories}></Categories>
        </div>
    );
};

export default Home;