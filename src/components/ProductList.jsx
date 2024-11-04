import React, { useEffect, useState } from "react";
import Product from "./Product";
import { useLoaderData, useParams } from "react-router-dom";

const ProductList = () => {
  const products = useLoaderData();
console.log(products)
  // const param = useParams();
  const { category } = useParams();
//   console.log(category)

  const [eachProduct, setEachProduct] = useState([]);

  useEffect( () => {

    const filterByProduct = [...products].filter( product => product.category === category);
    setEachProduct(filterByProduct);
  }, [category, products])
  return (
    <div>
      <div className="grid grid-cols-3">
        {eachProduct.map((p, index) => (
          <Product key={index} p={p}></Product>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
