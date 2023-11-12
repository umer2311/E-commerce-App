import React from "react";
// import "./components/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SerumImg from "../../../src/assets/images/SkinLightningBottle.webp";
// import Filter from "./components/filter";
import Filter from "./components/filter";
import { Navbar } from "../homepage/compoments/Navbar";

const Product = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-full bg-red-200 lg:flex  items-center  mx-auto lg:px-28  sm:px-0 lg:justify-between">
        <div className="left w-full my-4 lg:w-1/2 lg:my-7 p-2 lg:p-4 ">
          <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-2 lg:mb-4 font-serif">
            Serum
          </h2>

          <p className="text-xs lg:text-sm xl:text-base font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto vel
            quasi dolorum molestias consequuntur sint temporibus, exercitationem
            quo, aliquam, sunt aut adipisci provident tempore accusamus? Eaque
            quidem quaerat iusto, fugiat vero saepe voluptatibus cum nostrum
            aperiam odio unde dolorem nam doloribus aliquam excepturi tenetur?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            reprehenderit impedit eaque
            <br></br>
            <br />
            <br />? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eius veritatis, sit voluptatem illum sunt vitae.
          </p>

          <div className="underline mt-2 lg:mt-4">
            <a className="mr-2 text-xs lg:text-sm" href="/">
              View more
            </a>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>

        {/* right image div */}
        <div className="right  hidden lg:block  lg:w-1/2 ">
          <img className="" src={SerumImg} width={400} />
        </div>
      </div>

      {/* Filter component */}
      <Filter />
    </div>
  );
};

export default Product;
