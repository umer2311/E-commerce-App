import React ,{useEffect}from "react";

import { Navbar } from "./compoments/Navbar";
import { Hero } from "./compoments/Hero";
import { Productname } from "./compoments/Productname";
import { Categories } from "./compoments/Categories";
import {ProductCard} from "./compoments/productCard";
import BlogCard from "./compoments/blogCard";
import Footer from "./compoments/footer";
import { blogs, products } from "../../assets/dummyData";
import SubscribeCard from "./compoments/subscribeCard";
import { fetchProducts,addProduct,deleteProduct,updateProduct,fetchTrending } from "../../redux/productSlice"
import { useSelector, useDispatch } from 'react-redux';


function App() {
   const dispatch = useDispatch();
   const { data, loading, error } = useSelector((state) => state.product);

   useEffect(()=>{
    dispatch(fetchTrending())
   },[]);

    return (
        <>
        <Navbar />
        <Hero />
        <Productname />
            <Categories />
            <div >
                <div className=" container max-w-screen-lg mx-auto my-5">
          <h1 className=" font-normal text-center  text-5xl py-5" >
      Featured Products
    </h1>
         <div className="  flex flex-wrap -m-4">
      {data && data.map((product) => {
        console.log("true");
        <div key={product._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 m-4">
          <ProductCard product={product} />
        </div>
})}
                    </div>
                    </div>
         
            <div className=' container max-w-screen-lg mx-auto  my-5'>
              <h1 className=" font-normal text-center  text-5xl py-5" >
      Latest News
    </h1>
          <div className="flex flex-wrap -m-4">
      {blogs?.map((blog, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/4  p-4 m-4 ">
          <BlogCard blog={blog} />
        </div>
      ))}
              </div>
          </div> 
          
          <SubscribeCard />
          <Footer />
          
      </div>
        </>
    )
}
export default App;