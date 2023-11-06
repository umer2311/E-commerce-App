import React from 'react'
import { products, blogs } from "../../assets/dummyData"
import ProductCard from './productCard'
import BlogCard from './blogCard'
import SubscribeCard from './subscribeCard'
import Footer from './footer'

const index = () => {
   
  return (
      <div >
          
         <div className="  flex flex-wrap -m-4">
      {products?.map((product, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 m-4">
          <ProductCard product={product} />
        </div>
      ))}
          </div>
         
            <div className='m-4  '>
              <h1 className=" font-normal text-center  text-5xl py-5" >
      Latest News
    </h1>
          <div className="flex flex-wrap -m-4">
      {blogs?.map((blog, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/4  p-4 m-4">
          <BlogCard blog={blog} />
        </div>
      ))}
              </div>
          </div> 
          
          <SubscribeCard />
          <Footer />
          
      </div>
      
  )
}

export default index