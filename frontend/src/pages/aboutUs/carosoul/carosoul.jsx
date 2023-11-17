import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "./Carso";

const products = [
  {
    id: 1,
    name: "Skincare Essentials",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Makeup Essentials",
    price: 60,
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Silk Blur Moisturising Primer",
    price: 50,
    image:
      "https://praush.com/cdn/shop/files/Silk-blur_-Kajal_-Liner_de3695e5-208e-4c8b-a022-053681883dec.jpg?v=1693995822&width=600",
  },
  // Add more products as needed
];

function CarouselPage() {
  const [currentProduct, setCurrentProduct] = useState(products[0]);

  const handlePrev = () => {
    const currentIndex = products.findIndex(
      (product) => product.id === currentProduct.id
    );
    const newIndex = (currentIndex - 1 + products.length) % products.length;
    setCurrentProduct(products[newIndex]);
  };

  const handleNext = () => {
    const currentIndex = products.findIndex(
      (product) => product.id === currentProduct.id
    );
    const newIndex = (currentIndex + 1) % products.length;
    setCurrentProduct(products[newIndex]);
  };

  return (
    <>
      <div className="bg-red-200 flex justify-between ">
        <div className="w-1/2 bg-white my-10 rounded-tr-lg rounded-br-lg">
          <h1 className="pt-12 mx-8 underline font-serif font-bold   text-4xl ">
            Our Mission
          </h1>
          <p className="  flex text-md p-12 ml-6 mr-4">
            Our mission is to provide an honest, scientific approach to beauty.
            We use safe and effective skin care ingredients that enrich the
            natural biology of your skin, to produce clinically proven results
            that last.
            <br />
            At Fresh Faced Skin Care we take immense pride in delivering science
            inspired beauty, and we live and breathe our mission every single
            day. Every skincare product we produce is thoroughly researched,
            features the highest quality ingredients, and is thoughtfully
            prepared in small batches right here in the USA, for optimal
            freshness and effectiveness. Every skincare service we provide is
            customized, corrective, and clinically founded, in order to ensure
            the very best skin care results. <br />
            <br />
            We have watched the beauty industry market mass-produced skincare
            products to unsuspecting consumers, and turn to prescriptions,
            silicone, needles, and injections, rather than harnessing the
            transformative power of real, quality ingredients on our natural
            skin. Our commitment is to provide you with a wholesome skincare
            solution that treats, corrects, and enriches your skin, naturally.
            Because we truly care.
          </p>
          <button className="bg-[#292a42] hover:bg-pink-bl  text-white font-bold py-4 px-8 m-8 rounded-full ">
            Premium Products
          </button>
        </div>
        <div className=" w-1/2 flex justify-between">
          <div className="flex items-center">
            <button className="ml-10 text-2xl  " onClick={handlePrev}>
              <FontAwesomeIcon icon={faCircleArrowLeft} />
            </button>
          </div>
          <div>
            <Carousel product={currentProduct} />
          </div>
          <div className="flex items-center">
            <button className="mr-10 text-2xl" onClick={handleNext}>
              <FontAwesomeIcon icon={faCircleArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselPage;