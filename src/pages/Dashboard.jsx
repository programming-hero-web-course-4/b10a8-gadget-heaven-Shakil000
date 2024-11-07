import React, { useEffect, useState } from "react";
import Head from "../components/Head";
import Navbar from "../components/Navbar";
import { getProducts, removeProducts } from "../Utilities";
import DashboardProduct from "../components/DashboardProduct";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Dashboard = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch products initially and calculate total price
  useEffect(() => {
    const product = getProducts();
    setSelectedProduct(product);
    setSortedProducts(product);
    calculateTotalPrice(product);
  }, []);

  // Function to remove a product and recalculate the total price
  const removeProduct = (id) => {
    removeProducts(id);
    const product = getProducts();
    setSelectedProduct(product);
    setSortedProducts(product);
    calculateTotalPrice(product);
  };

  // Function to sort products by price
  const handleSort = (sortBy) => {
    if (sortBy === "price") {
      const sorted = [...sortedProducts].sort((a, b) => b.price - a.price);
      setSortedProducts(sorted);
    }
  };

  // Function to calculate the total price of all products
  const calculateTotalPrice = (products) => {
    const total = products.reduce((acc, product) => acc + product.price, 0);
    setTotalPrice(total);
  };

  const Purchase = () => {
    if (totalPrice > 0) {
      Swal.fire({
        imageUrl: "../../src/assets/Group.png",
        imageHeight: 50,
        title: "Payment Successful",
        text: "Thanks for purchasing",
        texts: `Total: ${totalPrice} Taka`,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops... <br/> Please select any product first",
        text: "You are not purchase anything",
      });
    }
  };

  return (
    <div>
      <Head />
      <div className="bg-[#9538E2] w-12/12 mx-auto">
        <Navbar
          mainTitle={
            <h1 className="text-5xl lg:w-8/12 mx-auto font-bold text-[#FFFFFF]">
              Dashboard
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
              className="px-6 py-2 rounded-full text-white border font-bold -pb-28"
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
        <div>
          <p className="font-bold -mt-11 text-2xl">Cart</p>
        </div>
        <div className="lg:flex gap-5 items-center justify-center">
          <p className="font-bold text-2xl mb-3">Total cost: {totalPrice}Tk</p>
          <button
            onClick={() => handleSort("price")}
            className="bg-white px-5 py-3 border border-violet-500 rounded-full text-[#9538E2] font-bold"
          >
            Sort by price
          </button>
          <button
            onClick={Purchase}
            className="bg-[#9538E2] px-5 py-3 rounded-full text-white font-bold"
          >
            Purchase
          </button>
        </div>
      </div>

      <div>
        {sortedProducts.map((sp, i) => (
          <DashboardProduct
            key={i}
            sp={sp}
            removeProduct={removeProduct}
            handleSort={handleSort}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
