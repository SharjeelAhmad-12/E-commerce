import React from "react";
import Button from "./Button";
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-[17rem]">
      <div
        className="mb-4 h-64 w-60 bg-center bg-cover bg-no-repeat rounded-md"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        {/* <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md opacity-0"
        /> */}
      </div>
      <div className="text-lg font-semibold">{product.name}</div>
      <div className="text-gray-600">${product.price}</div>
      <div className="text-yellow-500">⭐⭐⭐⭐⭐ {product.rating}</div>
      <div className="mt-4">
        <Button
          text="Add to Cart"
          className="bg-blue-400 hover:bg-blue-800 w-full"
        />
      </div>
    </div>
  );
};

export default ProductCard;
