import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import img0 from '../../../assets/images/img-0.png'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [bagCount,SetbagCount]=useState(8)
  return (
   <div className='bg-red-100'>
    <div className='flex justify-between items-center h-16 max-w-{1240px} mx-auto px-4 mr-14 ml-14 bg-red-300 text-xs text-black'>
      <div className='flex gap-3 ml-4'>
        <img src={img0} />
          <h1 className='w-full text-3xl font-bold text-{black}'>Amor</h1>
      </div>

      <div >

          <ul className='flex'>
            <li>
            <Link to="/" className='p-4 hover:text-white'>Home</Link>
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
      
      <div className='space-x-4 flex'>
      <FontAwesomeIcon icon={faMagnifyingGlass} className='text-xl'/>
      <FontAwesomeIcon icon={faUser} className='text-xl'/>
      <div className="relative">
        <FontAwesomeIcon icon={faBagShopping} className='text-xl ' />
        {bagCount > 0 && (
          <span className="bg-red-500 rounded-full w-5 h-5 flex items-center  justify-center   text-white text-base absolute -top-2 -right-2 ">
            {bagCount}
          </span>
        )}
      </div>
      </div>

        
    </div>
  </div>

  )
}
