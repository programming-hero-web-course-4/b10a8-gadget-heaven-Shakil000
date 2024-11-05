import React from 'react';
import Banner from '../components/Banner';
import Heading from '../components/Heading';
import { NavLink, Outlet, useLoaderData } from 'react-router-dom';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import { BsCartCheck } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

const Home = () => {

    const categories = useLoaderData();
    return (
        <div>
            <Navbar name={'Gadget haven'}
            icons={
                <ul className='flex gap-5'>
                    <BsCartCheck  className="rounded-full bg-white h-10 w-10 p-2"/>
                    <FaRegHeart className="circle rounded-full bg-white h-10 w-10 p-2"/>
                </ul>
            }
             mainTitle={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'} 
            menu={
                <ul className="space-x-9">
          <NavLink to="/" className={({isActive}) => `font-bold ${isActive ? 'text-green-400 underline' : ''}`}>Home</NavLink>
              <NavLink to="statistics" className={({isActive}) => `font-bold ${isActive ? 'text-green-400 underline' : ''}`}>Statistics</NavLink>
              <NavLink to="dashboard" className={({isActive}) => `font-bold ${isActive ? 'text-green-400 underline' : ''}`}>Dashboard</NavLink>
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