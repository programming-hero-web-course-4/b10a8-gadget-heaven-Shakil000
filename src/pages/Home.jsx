import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Heading from '../components/Heading';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import { BsCartCheck } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi"; // Menu icon import
import { getProducts } from '../Utilities';
import { wishGetProducts } from '../Utilities/wish';
import { Helmet } from 'react-helmet';

const Home = () => {
    const categories = useLoaderData();
    const [cartCount, setCartCount] = useState(0);
    const [wishCartCount, setWishCartCount] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu

    useEffect(() => {
        // Retrieve the cart items and set the count
        const cartItems = getProducts();
        setCartCount(cartItems.length);
    }, []);

    useEffect(() => {
        const wishCartItems = wishGetProducts();
        setWishCartCount(wishCartItems.length);
    }, []);

    // Toggle menu function
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="p-4 md:p-6 lg:p-8">
          <Helmet>
            <title>
              Home | Gadget Haven
            </title>
          </Helmet>
            <Navbar
                name={'Gadget Haven'}
                icons={
                    <ul className='flex gap-5 relative'>
                        <li className="relative">
                            <Link to="/dashboard" aria-label="Shopping Cart">
                                <BsCartCheck className="rounded-full bg-white h-8 w-8 p-2 md:h-10 md:w-10" />
                                {cartCount > 0 && (
                                    <p className='absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs md:text-sm'>
                                        {cartCount}
                                    </p>
                                )}
                            </Link>
                        </li>
                        <li className="relative">
                            <Link to="/wishlist" aria-label="Wishlist">
                                <FaRegHeart className="rounded-full bg-white h-8 w-8 p-2 md:h-10 md:w-10" />
                                {wishCartCount > 0 && (
                                    <p className='absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs md:text-sm'>
                                        {wishCartCount}
                                    </p>
                                )}
                            </Link>
                        </li>
                    </ul>
                }
                mainTitle={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'}
                menu={
                    <div className="relative">
                        <button onClick={toggleMenu} className="md:hidden text-2xl p-2">
                            <FiMenu />
                        </button>
                        <ul className={`space-x-4 md:space-x-6 lg:space-x-9 flex flex-col md:flex-row items-start md:items-center ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                            <NavLink to="/" className={({ isActive }) => `font-bold ${isActive ? 'text-green-400 underline' : ''}`}>Home</NavLink>
                            <NavLink to="statistics" className={({ isActive }) => `font-bold ${isActive ? 'text-green-400 underline' : ''}`}>Statistics</NavLink>
                            <NavLink to="dashboard" className={({ isActive }) => `font-bold ${isActive ? 'text-green-400 underline' : ''}`}>Dashboard</NavLink>
                            <NavLink to="blog" className={({ isActive }) => `font-bold ${isActive ? 'text-green-400 underline' : ''}`}>Blogs</NavLink>
                        </ul>
                    </div>
                }
                subTitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
                button='Shop Now'
            />
            <Banner />
            <Heading title={'Explore Cutting-Edge Gadgets'} />
            <Categories categories={categories} />
        </div>
    );
};

export default Home;
