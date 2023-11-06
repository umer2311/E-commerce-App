import React from 'react';
import Pic from "../../assets/images/product.png"


const ProductCard = ({ key,product }) => {

  
  const starRating = (numStars) => {
    const stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-500">★</span>
      );
    }
    return stars;
  };

  return (
    <div key={key} className="container mx-auto bg-white p-4 shadow-md rounded-lg max-w-sm relative transform transition-transform hover:shadow-red-400 border border-red-400">
    {product.isTrending && (
        <div  style={{ top: '-17px' }} className="absolute left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white  py-1 px-2">
          Trending
        </div>
      )}
      {product.saleDiscount && (
        <div style={{ top: '-17px' }} className="absolute left-1/2 transform -translate-x-1/2 bg-red-400 text-white  py-1 px-2">
          Sale ${product.saleDiscount}
        </div>
      )}
      <img src={Pic} alt={product.name} className="w-full h-auto" />
      <div className="mt-4">
        <p className="text-gray-600">{product.company}</p>
        <div className='flex justify-between items-center'>
          <p className="text-xl font-semibold">{product.name}</p>
        <div className="flex">
          {starRating(product.ratings)} 
          </div></div>
    
        {product?.saleDiscount ? (
            <div className='flex items-center gap-2 text-center '>
              <p className="text-gray-500 line-through text-base">${product.price}</p>
              <p className="text-red-400 text-2xl font-bold ">${product.saleDiscount}</p>
            </div>
          ) : (
            <p className="text-2xl font-bold mt-2 text-red-400">${product.price}</p>
          )}
        </div>
        <p className="text-gray-500">In Stock: {product.stock} units</p>
      </div>
  
  );
};

export default ProductCard;
