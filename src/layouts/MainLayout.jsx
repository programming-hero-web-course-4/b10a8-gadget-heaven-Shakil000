import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
// import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Toaster />
            {/* <Navbar></Navbar> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;