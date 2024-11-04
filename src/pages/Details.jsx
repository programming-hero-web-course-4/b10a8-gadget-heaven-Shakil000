import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
const Details = () => {
  const { id } = useParams();
  const items = useLoaderData();

  const [item, setItem] = useState({});

  useEffect(() => {
    const findProducts = items.find((item) => item.id == id);
    setItem(findProducts);
  }, []);
  return (
    <div className="max-w-screen-md mx-auto flex border rounded-xl gap-5 -mt-48 bg-white">
      <div className="w-full">
        <img className="p-5" src={item.product_image} alt="" />
      </div>
      <div className="w-full p-5">
        <h1 className="text-2xl font-bold">{item.product_title}</h1>
        <p className="font-bold">Price: {item.price}</p>
        <p
          className={`border px-4 w-36 py-1 my-2 rounded-full font-bold ${
            item.availability
              ? "bg-green-100 text-green-300"
              : "bg-red-100 text-red-300"
          }`}
        >
          {item.availability ? item.availability : "Out of stock"}
        </p>
        <p>{item.description}</p>
        <ul>
          {" "}
          <p className="font-bold py-2">Specification: </p>
          {item.Specification?.map((spec, index) => (
            <li key={index}>
              {index + 1}. {spec}
            </li>
          ))}
        </ul>
        <p className="mb-5">{item.rating}</p>
     <div className="flex items-center justify-center gap-4">
     <Link className="bg-violet-600 border px-4 w-40 items-center justify-center gap-2 py-2 rounded-full font-bold text-green-300 flex">
          Add To Card <IoCartOutline />
        </Link>
          <FaRegHeart />
     </div>
      </div>
    </div>
  );
};

export default Details;
