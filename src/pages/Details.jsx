import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { TbStarHalfFilled } from "react-icons/tb";
import Navbar from "../components/Navbar";
import Head from "../components/Head";
import { addProducts, getProducts } from "../Utilities";
import { wishAddProducts, wishGetProducts } from "../Utilities/wish";

const Details = () => {
  const { id } = useParams();
  const items = useLoaderData();

  const [item, setItem] = useState({});
  const [isActive, setIsActive] = useState(false);
  const [wishIsActive, setWishIsActive] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const findProducts = items.find((item) => item.id == id);
    setItem(findProducts);

    const localProduct = getProducts();
    const isExists = localProduct.find(item => item.id == findProducts.id);
    if (isExists) {
      setIsActive(true);
    }

    const wishLocalProduct = wishGetProducts();
    const isWishExists = wishLocalProduct.find(item => item.id == findProducts.id);
    if (isWishExists) {
      setWishIsActive(true);
    }
  }, [items, id]);

  // Retrieve the cart items and set the count
  useEffect(() => {
    const cartItems = getProducts();
    setCartCount(cartItems.length);
  }, []);

  const handleAddedToCart = (item) => {
    addProducts(item);
    setIsActive(true);
    const cartItems = getProducts();
    setCartCount(cartItems.length);
  };

  const handleWishList = (wishItem) => {
    wishAddProducts(wishItem);
    setWishIsActive(true);
  };

  return (
    <div>
      <Head cartCount={cartCount} />
      <Navbar
        mainTitle={"Product Details"}
        subTitle={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
      />
      <div className="max-w-screen-lg mx-auto flex border rounded-xl gap-5 -mt-60 bg-white">
        <div className="w-full">
          <img className="p-5" src={item.product_image} alt={item.product_title} />
        </div>
        <div className="w-full p-5">
          <h1 className="text-2xl font-bold">{item.product_title}</h1>
          <p className="font-bold">Price: {item.price}</p>
          <p
            className={`border px-4 w-36 py-1 my-2 rounded-full font-bold ${
              item.availability ? "bg-green-100 text-green-300" : "bg-red-100 text-red-300"
            }`}
          >
            {item.availability ? item.availability : "Out of stock"}
          </p>
          <p>{item.description}</p>
          <ul>
            <p className="font-bold py-2">Specification:</p>
            {item.Specification?.map((spec, index) => (
              <li key={index}>
                {index + 1}. {spec}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-1">
            <p className="font-bold py-3">Rating</p>
            <TbStarHalfFilled />
          </div>
          <div className="flex gap-7">
            <div className="rating space-x-3">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" defaultChecked />
              <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" defaultChecked />
              <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" defaultChecked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-0" />
            </div>
            <p className="mb-5">{item.rating}</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleAddedToCart(item)}
              disabled={isActive}
              className={`${isActive ? 'bg-gray-600' : 'bg-violet-600'} border px-4 w-40 items-center justify-center gap-2 py-2 rounded-full font-bold text-white flex`}
            >
              {isActive ? "Added to Cart" : "Add To Cart"}
              <IoCartOutline className="text-white" />
            </button>
            <button onClick={() => handleWishList(wishItem)}>
              <FaRegHeart className={`circle border rounded-full bg-white h-10 w-10 p-2 ${wishIsActive ? 'text-red-600' : 'text-violet-600'}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
