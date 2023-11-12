import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser, faBagShopping, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import img0 from '../../../assets/images/img-0.png'
import { Link } from 'react-router-dom';
// import { FaTimes } from 'react-icons/fa';
// import { CiMenuFries } from 'react-icons/ci';
import { useState } from 'react';

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = ( ) => setClick(!click);
  
  const content = <>
  
  <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-red-300 transition'>
    <ul className='text-center text-xl p-20'>
      <Link to="Home">
        <li className='my-4 py-4 border-white hover:rounded'>Home</li>
      </Link>
      <Link to="Shop">
        <li className='my-4 py-4 border-white hover:rounded'>Shop</li>
      </Link>
      <Link to="Products">
        <li>Products</li>
      </Link>
      <Link to="Blog">
        <li>Blog</li>
      </Link>
      <Link to="Aboutus">
        <li>About Us</li>
      </Link>
    </ul>
  </div>
  </>
  return (
    <div className='bg-red-100'>
      
    <div className='flex justify-between items-center h-16  mx-auto px-4 mr-24 ml-24 bg-red-300 text-xs text-black'>
      <div className='flex items-center ml-7'>
        <img src={img0} />
          <h1 className='w-full text-3xl font-bold ml-3 text-{black}'>Amor</h1>
      </div>

      <div className='lg:flex md:flex lg:flex-1 container max-w-screen-md mx-auto items-center justify-end font-normal hidden'>
        <div className='flex-10'>
          <ul className='flex gap-3 mr-40'>
            <li>
            <Link to="/homepage" className='p-4 hover:text-white'>Home</Link>
            </li>
             <li>
              <Link to="/shop" className='p-4 hover:text-white'>Shop</Link>
            </li>
             <li>
            <Link to="/products" className='p-4 hover:text-white'>Products</Link>
            </li>
              <li>
            <Link to="/blog" className='p-4 hover:text-white'>Blogs</Link>
            </li>
               <li>
            <Link to="/aboutUs" className='p-4 hover:text-white'>About Us</Link>
            </li>

          </ul>
        </div>
      </div>
      <div>
        {click && content}
      </div>
      <button className='block sm:hidden transition' onClick={handleClick}>
        {click ? <faTimes/> : <faBars/>}
      </button>
      
      <div className='space-x-4'>
      <FontAwesomeIcon icon={faMagnifyingGlass} className='text-xl'/>
      <FontAwesomeIcon icon={faUser} className='text-xl'/>
      <FontAwesomeIcon icon={faBagShopping } className='text-xl'/>
      </div>

        
    </div>
  </div>

  )
}
