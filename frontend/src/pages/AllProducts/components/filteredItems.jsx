import React from "react";
import ProductCard from "../../Homepage/compoments/productCard";
import { useEffect } from "react";
//import { products } from "../../../assets/dummyData";
import { fetchProducts, addProduct, deleteProduct, updateProduct, fetchTrending, fetchCategory, fetchBrand, fetchRating, fetchPrice } from "../../../redux/productSlice"
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

export const FilteredItems = () => {
  const dispatch = useDispatch();
  const  data   = useSelector((state) => state.product.product  );
  
  useEffect(() => {
      dispatch(fetchProducts())
      
  }, []);
  return (
    <div>
      <div className="container mx-auto p-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.map((product, index) => (
            <div key={index} className="">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
