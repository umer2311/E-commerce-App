// Carousel.js
import React from 'react';

const Carousel = ({ product }) => {
  return (
    <div className="bg-red-300 rounded-xl overflow-auto mt-10  ">
      <div className='flex justify-center font-semibold text-lg font-serif text-white mt-4'>Premium Line</div>
      <img className='w-80 h-80 m-6 rounded-md' src={product.image} alt={product.name} />
      <h2 className='flex justify-center text-xl font-bold'>{product.name}</h2>
      <p className='flex mb-4 justify-center text-xl font-bold font-sans'>${product.price}</p>
    </div>
  );
};

export default Carousel;
