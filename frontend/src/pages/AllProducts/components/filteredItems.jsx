import React from "react";
import ProductCard from "../../Homepage/compoments/productCard";
import { products } from "../../../assets/dummyData";

export const FilteredItems = () => {
  return (
    <div>
      <div className="container mx-auto p-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products?.map((product, index) => (
            <div key={index} className="">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
