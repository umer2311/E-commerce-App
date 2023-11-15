import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft,faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import Carousel from './Carso.jsx';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 20,
    image: '',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 30,
    image: 'product2.jpg',
  },
  {
    id: 3,
    name: 'Silk Blur Moisturising Primer',
    price: 50,
    image: 'https://praush.com/cdn/shop/files/Silk-blur_-Kajal_-Liner_de3695e5-208e-4c8b-a022-053681883dec.jpg?v=1693995822&width=600',
  },
  // Add more products as needed
];

function CarouselPage() {
  const [currentProduct, setCurrentProduct] = useState(products[0]);

  const handlePrev = () => {
    const currentIndex = products.findIndex((product) => product.id === currentProduct.id);
    const newIndex = (currentIndex - 1 + products.length) % products.length;
    setCurrentProduct(products[newIndex]);
  };

  const handleNext = () => {
    const currentIndex = products.findIndex((product) => product.id === currentProduct.id);
    const newIndex = (currentIndex + 1) % products.length;
    setCurrentProduct(products[newIndex]);
  };

  return (
    <>
      <div className='bg-red-200 flex justify-between '>
        <div className='w-1/2 bg-white my-10 rounded-tr-lg rounded-br-lg'>
          <h1 className='pt-12 mx-8 underline font-serif font-bold   text-4xl'>Our Mission</h1>
          <p className='  flex text-center text-sm p-12 ml-6 mr-4'>Real beauty starts truly with your skin. But independent from age, sex and race it can be challenging to find the right skincare products.<br/>
                 <br />
                 
            We take care of that by selecting only quality products. <br />
               <br />
            Luxe, lightweight, and made with the perfect blend of cashmere and cotton, our Sonoma Pillows and Throws are inspired by the basics we turn to season after season. Get to know the cozy essentials that will elevate your space in an instant.</p>
            <button className="bg-[#292a42] hover:bg-pink-bl  text-white font-bold py-4 px-8 m-8 rounded-full ">Premium Products</button>
        </div>
        <div className=" w-1/2 flex justify-between" >
          <div className='flex items-center'>
          <button className='ml-10 text-2xl  ' onClick={handlePrev}><FontAwesomeIcon icon={faCircleArrowLeft} /></button>
          </div>
          <div >
          <Carousel product={currentProduct} />
          </div>
          <div className='flex items-center' >
            <button className='mr-10 text-2xl' onClick={handleNext}><FontAwesomeIcon icon={faCircleArrowRight} /></button>
            </div>
        </div>
      </div>
    </>
  );
}

export default CarouselPage;
