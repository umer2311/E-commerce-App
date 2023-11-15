import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser, faBagShopping} from '@fortawesome/free-solid-svg-icons'
import img0 from '../../../assets/images/img-0.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { FaTimes } from 'react-icons/fa';
// import { CiMenuFries } from 'react-icons/ci';
import { useLocation } from 'react-router-dom';
export const Navbar = () => {
  // const [click, setClick] = useState(false);
  // const handleClick = ( ) => setClick(!click);
  const location = useLocation();
  const hideNavbarPaths = ['/login', '/signup'];
  const isNavbarHidden = hideNavbarPaths.includes(location.pathname);

   const items=useSelector((state)=>state.cart.items)
   console.log(items.length)
  const content = <>
   
    <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-red-300 transition'
      style={{ '@media (max-width: 900px)': { display: 'none' } }}>
      <ul className='text-center text-xl p-20'>
        <Link to="Home">
          <li className='  border-white hover:rounded'>Home</li>
        </Link>
        <Link to="Shop">
          <li className='  border-white hover:rounded'>Shop</li>
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

    <div className='flex justify-evenly items-center h-16  px-10 bg-red-300 text-xs text-black'>
      <div className='flex items-center'>
        <img src={img0} />
        <h1 className='w-full text-3xl font-bold ml-3 text-{black}'>Amor</h1>
      </div>
      <div className='lg:flex md:flex lg:flex-1 container max-w-screen-md mx-auto items-center justify-end font-normal hidden'>
        <ul className='flex gap-3 mr-40'>
          <li>
            <Link to="/homepage" className='p-4 hover:text-white'>Home</Link>
          </li>
          <li>
            <Link to="/products" className='p-4 hover:text-white'>Products</Link>
          </li>
          <li>
            <Link to="/blog" className='p-4 hover:text-white'>Blogs</Link>
          </li>
          <li>
            <Link to="/contact" className='p-4 hover:text-white'>Contact Us</Link>
          </li>
          <li>
            <Link to="/about" className='p-4 hover:text-white'>About Us</Link>
          </li>
        </ul>
      </div>
      {/* <div>
        {click && content}
      </div> */}
      {/* <button className='block sm:hidden transition' onClick={handleClick}>
        {click ? <faTimes/> : <faBars/>}
      </button> */}
      <div className='space-x-4  w-40'>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-xl' />
        <FontAwesomeIcon icon={faUser} className='text-xl' />

        <Link to="/cart">
          <button
            type="button"
            // className="ml-auto flex-shrink-0  p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
           
            <FontAwesomeIcon icon={faBagShopping} className='text-xl' />
            {items.length  && (
          <span className="bg-red-500 rounded-full w-5 h-5 flex items-center  justify-center   text-white text-base absolute -top-1 -right-1 ">
            {items.length}
          </span>
        )}
            </button>

        </Link>
           
          
        
      </div>
    </div>
  )
}
