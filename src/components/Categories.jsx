import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ProductList from './ProductList';

const Categories = ({categories}) => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='flex gap-10'>
            <div className='w-72 border p-5 bg-white shadow-sm'>
            <h1 className='bg-[#9538E2] text-white border px-5 py-2 rounded-full'>All Products</h1>
            {
              categories.map(category =>  
                <Link to={`category/${category.category}`}><ul className='bg-gray-50 border px-4 py-2 rounded-full my-4 font-bold'>{category.category}</ul></Link>
                 
               )  
            }
        </div>
        <div className='w-full bg-white shadow-sm border'>
            <Outlet></Outlet>
        </div>
        </div>
        </div>
    );
};

export default Categories;