import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Head from "../components/Head";
import Navbar from "../components/Navbar";
import WishListProduct from "../components/WishListProduct";
import { wishGetProducts, wishRemoveProducts } from "../Utilities/wish";

const Wishlist = () => {
  const [wishSelectedProduct, setWishSelectedProduct] = useState([]);

  // Fetch products initially
  useEffect(() => {
    const wProduct = wishGetProducts(); // Fetch wishlist items
    setWishSelectedProduct(wProduct);
  }, []);

  // Function to remove a product and refresh the list
  const wishRemoveProduct = (id) => {
    wishRemoveProducts(id); // Remove product by id
    const wProduct = wishGetProducts(); // Fetch updated product list
    setWishSelectedProduct(wProduct); // Update state with new list
  };

  return (
    <div>
      <Head />
      <div className="bg-[#9538E2] w-full mx-auto">
        <Navbar
          mainTitle={
            <h1 className="text-5xl w-8/12 mx-auto font-bold text-white">
              Wishlist
            </h1>
          }
          button={
            <Link
              to="/dashboard"
              className="bg-white px-6 py-2 rounded-full text-[#9538E2] font-bold"
            >
              Cart
            </Link>
          }
          button_w={
            <Link
              to="/wishlist"
              className="px-6 py-2 rounded-full text-white border font-bold"
            >
              Wishlist
            </Link>
          }
          subTitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        />
      </div>

      <div className="flex justify-between items-center w-11/12 mx-auto pt-10">
        <p className="font-bold text-2xl">Wishlist</p>
        <Link to="/dashboard" className="bg-[#9538E2] px-5 py-3 rounded-full text-white font-bold">
          Go to Cart
        </Link>
      </div>

      <div>
        {wishSelectedProduct.map((wsp) => (
          <WishListProduct
            key={wsp.id}
            wsp={wsp}
            wishRemoveProduct={wishRemoveProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
