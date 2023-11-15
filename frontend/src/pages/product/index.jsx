
import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Navbar } from '../homepage/compoments/Navbar';
import { fetchTrending,fetchProductId } from '../../redux/productSlice'
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import ProductCard from '../Homepage/compoments/productCard';
import { addToCart } from '../../redux/cartSlice';
import Footer from '../homepage/compoments/footer';
//import React, { useEffect } from 'react'

const ProductPage = () => {

    const dispatch = useDispatch();
    const data = useSelector((state) => state.product.productID);
    const trending=useSelector((state)=>state.product.trending)
    const items=useSelector((state)=>state.cart.items)
    console.log("cart items",items)
    const { productId } = useParams();
    const pathArray = data && data.images ? data.images.split(',') : [];
    console.log(pathArray[0], data, "umer");
    const Data=data;
    const [load,setload]=useState(false)
    useEffect(() => {
        console.log("umer")
        dispatch(fetchProductId(productId))
        dispatch(fetchTrending())
    }, [productId])

    
    const starRating = (numStars) => {
        const stars = [];
        for (let i = 0; i < numStars; i++) {
            stars.push(
                <span key={i} className="text-yellow-500">★</span>
            );
        }
        return stars;
    };

    const StockStatus = (stock) => {
        if (stock > 0) {
            return (
                <div className="flex flex-row">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="stroke-current text-green-700 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className='text-green-600 text-lg font-semibold px-2' >InStock</p>


                </div>
            );
        } else {
            return (
                <div className="flex flex-row">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill='none' className="stroke-current text-red-600 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className='text-red-600 text-lg font-semibold px-2' >Out Of Stock</p>
                </div>
            );
        }
    }

    const VainIcon = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
        )
    }

    const Heart = () => {
        return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
        )
    }

    const Share = () => {
        return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
        </svg>
        )
    }


     const [images, setImages] = useState(0)
     console.log(images)

    const [activeImg, setActiveImage] = useState(0)

    const [amount, setAmount] = useState(1);
    const addtocart=()=>{
      const item= {
            product:data,
            quantity:amount,
        }
        dispatch(addToCart(item,true));
        console.log("add to cart called")
    }

    return (
        <>
            <Navbar></Navbar>
            <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>

                <div className='flex flex-col gap-6 lg:w-2/4'>
                    {activeImg == 0 ?
                        <img src={`http://localhost:3500/${pathArray[0]}`} alt="" className='w-100 h-100 aspect-square object-cover rounded-xl' /> :
                        <img src={`http://localhost:3500/${pathArray[1]}`} alt="" className='w-100 h-100 aspect-square object-cover rounded-xl' />
                    }
                    <div className='flex flex-row justify-between h-24'>
                        <img src={`http://localhost:3500/${pathArray[0]}`} alt="First Picture" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(0)} />
                        <img src={`http://localhost:3500/${pathArray[1]}`} alt="2nd picture" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(1)} />
                       
                    </div>
                </div>
                <div className='flex flex-col gap-4 lg:w-2/4'>
                    <div>
                        <h1 className='text-3xl font-bold'>{Data.name}</h1>
                        <span className=' text-violet-600 font-semibold'>{Data.company}</span>
                        <div className="flex items-center">
                            <div className="flex">
                                {starRating(Data.ratings)}
                            </div>
                            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{Data.ratings} out of 5</p>
                            <p className='mx-2'>|</p>
                            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">Sold:{Data.sold}</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4 lg:w-2/4'>
                        <p>{Data?.description?.statement}</p>
                    </div>

                    {/*-----Size & orgin-----*/}

                    <div>

                        <div className="flex items-center">
                            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">Size:<span className='text-black font-semibold px-1'>{Data?.description?.size}</span></p>

                            <p className='mx-2'>|</p>
                            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">Orgin: <span className='text-black font-semibold px-1'>{Data?.description?.origin}</span></p>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <p>{StockStatus(Data.stock)}</p>
                    </div>

                    <div className='flex flex-row'>
                        <h6 className='text- font-semibold text-red-300'>Rs:{Data.price} <span className='line-through'>Rs350</span></h6>
                        <p className='mx-2 font-bold'>|</p>
                        {VainIcon()}
                        <span>Free Delivery From Rs1000</span>

                    </div>
                    <div className='flex flex-row items-center gap-12'>
                        <div className='flex flex-row items-center'>
                            <button className='bg-gray-200 py-2 px-5 rounded-lg  hover:bg-red-300 text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                            <span className='py-4 px-6 rounded-lg font-semibold'>{amount}</span>
                            <button className='bg-gray-200 py-2 px-4 rounded-lg  hover:bg-red-300 text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                        </div>

                    </div>
                    <div><button onClick={addtocart} className="bg-[#292a42] hover:bg-blue-700  text-white font-bold py-4 px-16 rounded-full ">Add to Cart</button></div>
                    <div><button className="bg-red-300 hover:bg-blue-700  text-white font-bold py-4 px-16 rounded-full ">Buy Now . .</button>
                    </div>
                    <div className='flex flex-row'>
                        <div >
                            <a href='https://www.google.com/' className='flex flex-row'>
                                {Heart()}
                                <p className='text-base'> Add to Wishlist</p>
                            </a>
                        </div>
                        <div className='px-2' >
                            <a href='https://www.google.com/' className='flex flex-row'>
                                {Share()}
                                <p className='text-base' >Share</p>
                            </a>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
            {/* cards*/}
            <div className=' mx-2 flex items-center  justify-center' >
                <div className=" container max-w-screen-lg mx-auto my-5">
                    <h1 className=" text-center font-medium text-5xl py-5 my-1" >
                        Trending Products
                    </h1>
                    <div className="  flex flex-wrap -m-4">
                        {trending && trending.map((product, index) => (
                            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 m-4">
                                <Link to={`/product/${product._id}`}>
                                    <ProductCard product={product} />
                                </Link>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
export default ProductPage;