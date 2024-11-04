import React from 'react';

const Product = ({p}) => {

    const {id, category, product_id, product_title, product_image, price, description, Specification, availability,rating} = p;
    return (
        <div>
            <div>
            <div className="border p-5 m-5 rounded">
          <div className=" bg-gray-50 rounded-xl">
            <div className="flex p-5 items-center justify-center">
              <img className="w-40 h-52" src={product_image} alt="" />
            </div>
          </div>
          <p className="text-2xl font-bold">{product_title}</p>
          <p>{price}</p>
        </div>
            </div>
        </div>
    );
};

export default Product;