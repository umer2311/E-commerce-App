import React from "react";
// import "./components/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SerumImg from "../../../src/assets/images/SkinLightningBottle.webp";
import Example from "./components/filter";

const Product = () => {
  return (
    <div>
      <div className="w-full h-full bg-gray-300 flex items-center mx-auto px-28 justify-between">
        <div className="left w-1/2 my-7 ">
          <h2 className="text-4xl font-bold mb-4 font-serif">Serum</h2>

          <p className="text-1xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto vel
            quasi dolorum molestias consequuntur sint temporibus, exercitationem
            quo, aliquam, sunt aut adipisci provident tempore accusamus? Eaque
            quidem quaerat iusto, fugiat vero saepe voluptatibus cum nostrum
            aperiam odio unde dolorem nam doloribus aliquam excepturi
            tenetur?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Laborum reprehenderit impedit eaque
            <br></br>
            <br />
            <br />? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eius veritatis, sit voluptatem illum sunt vitae.
          </p>

          <div className="underline mt-4">
            <a className="mr-2 text-1xl" href="/">
              view more
            </a>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>

        <div className="right">
          <img className="" src={SerumImg} width={400} />
        </div>
      </div>
      <Example />
    </div>
  );
};

export default Product;
