import React from "react";
// import "./components/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SerumImg from "../../../src/assets/images/SkinLightningBottle.webp";
// import Filter from "./components/filter";
// import Filter from "./components/filter";
import { Navbar } from "../homepage/compoments/Navbar";
import FilterSortComponent from "./components/filterSort"
import { useSelector } from "react-redux";
import ProductCard from "../Homepage/compoments/productCard"

const Product = () => {
const  data   = useSelector((state) => state?.product?.product  );
console.log(data, "cards data")
  const filters = [
  {
    id: "brands",
    name: "Brands", 
    options: [
      { value: "olay", label: "Olay", checked: false },
      { value: "gucci", label: "GUCCI", checked: false },
      { value: "loreal", label: "L'Oreal Paris", checked: true },
      { value: "neutrogena", label: "Neutrogena", checked: false },
      { value: "lancome", label: "Lancome", checked: false },
      { value: "macCosmetics", label: "MAC Cosmetics", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "lotion", label: "New Arrivals", checked: false },
      { value: "moisturizers", label: "Sale", checked: false },
      { value: "sunscreen", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
    ],
  },
  {
    id: "Ratings",
    name: "Ratings",
    options: [
      { value: 1, label: "1 star", checked: false },
      { value: 2, label: "2 Stars", checked: false },
      { value: 3, label: "3 Stars", checked: false },
      { value: 4, label: "4 Stars", checked: false },
      { value: 5, label: "5 Stars", checked: false },
    ],
  },
];

  const handleFilterChange = (selectedFilters) => {
    console.log("Selected Filters:", selectedFilters);

  }; 
  return (
    <>
    <div>
      <Navbar></Navbar>
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
      {/* <Filter></Filter> */}
     </div>


      <div className="flex">
      {/* Left side - Filter Component */}
      <div className="w-1/4 p-4">
        <FilterSortComponent filters={filters} onFilterChange={handleFilterChange} />
      </div>

      {/* Right side - Product Cards */}
      <div className="w-3/4 p-4">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-7">
            {data ? (<>
              {data?.map((product, index) => (
                <div key={index} className="">
                  <ProductCard product={product} />
                </div>
              ))}
            </>
            ) : (<> <h4>No products Found! </h4></>)}
        </div>
      </div>
        </div>
        </>
  );
};

export default Product;
