import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const DashboardProduct = ({ sp, removeProduct }) => {
  const {
    id,
    product_title,
    product_image,
    price,
    description,
  } = sp;

  return (
    <div className="w-11/12 mx-auto p-5 m-5">
      <div className="bg-gray-100 lg:flex justify-between">
        <div className="lg:flex lg:gap-10">
          <img className="lg:w-36 lg:h-32 p-2" src={product_image} alt={product_title} />
          <div className="px-5">
            <p className="text-2xl font-bold">{product_title}</p>
            <p className="text-gray-500 font-bold py-4">{description}</p>
            <p className="text-2xl">Price: {price}</p>
          </div>
        </div>
        <div className="lg:flex ml-32 mt-5 lg:items-center lg:mr-10">
          <AiFillCloseCircle
            onClick={() => removeProduct(id)}
            className="text-5xl border-4 border-red-600 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardProduct;
