import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Head from "./Head";
import { NavLink } from "react-router-dom";

const DashboardProduct = ({ wsp, wishRemoveProduct }) => {
  const {
    id,
    product_title,
    product_image,
    price,
    description,
  } = wsp;

  return (
    <NavLink to={`/products/${id}`}>
      <div className="w-11/12 mx-auto p-5 m-5">
      <div className="bg-gray-100 flex justify-between">
        <div className="flex gap-10">
          <img className="w-36 h-32 p-2" src={product_image} alt={product_title} />
          <div>
            <p className="text-2xl font-bold">{product_title}</p>
            <p className="text-gray-500 font-bold py-4">{description}</p>
            <p className="text-2xl">Price: {price}</p>
          </div>
        </div>
        <div className="flex items-center mr-10">
          <AiFillCloseCircle
            onClick={() => wishRemoveProduct(id)}
            className="text-5xl border-4 border-red-600 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
    </NavLink>
  );
};

export default DashboardProduct;
