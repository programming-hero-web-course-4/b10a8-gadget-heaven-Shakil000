import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({categories}) => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='flex gap-10'>
            <div className='w-72 border p-5 bg-white shadow-sm'>
            <h1 className='bg-[#9538E2] text-white border px-5 py-2 rounded-full'>All Products</h1>
            {
              categories.map(category =>  
                <Link to='/cards'><ul className='bg-gray-50 border px-4 py-2 rounded-full my-4 font-bold'>{category.category}</ul></Link>
                 
               )  
            }
        </div>
        <div className='w-full bg-yellow-300 border border-blue-600'>

        </div>
        </div>
        </div>
    );
};

export default Categories;

{/* <aside className="w-1/4 pr-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="font-semibold text-lg mb-4">All Product</h2>
          <ul className="space-y-2 text-sm">
            
          </ul>
        </div>
      </aside> */}