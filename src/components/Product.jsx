import React from "react";
import { Link } from "react-router-dom";

const Product = ({ p }) => {
  const {
    id,
    category,
    product_id,
    product_title,
    product_image,
    price,
    description,
    Specification,
    availability,
    rating,
  } = p;
  return (
    <div>
      <div className="border p-5 m-5 rounded">
        <div className=" bg-gray-50 rounded-xl">
          <div className="flex items-center justify-center">
            <img className="w-96 h-48" src={product_image} alt="" />
          </div>
        </div>
        <p className="text-2xl font-bold mt-4">{product_title}</p>
        <p className="text-2xl py-4 mb-2">Price: {price}</p>
        <Link
          to="/"
          className="bg-gray-50 border border-violet-600 px-6 py-3 text-violet-500 rounded-full my-4 font-bold"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Product;
