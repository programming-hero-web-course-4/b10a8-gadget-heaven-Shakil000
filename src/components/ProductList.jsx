import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useLoaderData, useParams } from "react-router-dom";

const ProductList = () => {
  const products = useLoaderData();
// console.log(products)
  // const param = useParams();
  const { category } = useParams();
//   console.log(category)
  const [eachProduct, setEachProduct] = useState([]);


  useEffect( () => {
    if(category){
      const filterByProduct = [...products].filter( product => product.category === category);
    setEachProduct(filterByProduct);
    }else{
      setEachProduct(products);
    }
  }, [category, products])
  return (
    <div>
   {eachProduct.length > 0 ? (
       <div className="lg:grid lg:grid-cols-3">
       {eachProduct.map((p, index) => (
         <Product key={index} p={p}></Product>
       ))}
     </div>
   ) : <p className="text-center font-bold text-violet-500 mt-10 text-4xl">Product not available</p>}
    </div>
  );
};

export default ProductList;
