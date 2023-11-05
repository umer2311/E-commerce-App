import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser, faBagShopping } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
  return (
   <div className='bg-red-100'>
    <div className='flex justify-between items-center h-24 max-w-{1240px} mx-auto px-4 mr-14 ml-14 bg-red-300 text-xs text-black'>
      <div>
          <h1 className='w-full text-3xl font-bold text-{black}'>Amor</h1>
      </div>

      <div >

        <ul className='flex'>
            <a href='#Home'><li className='hover:text-white p-4 hover:border-b-2'>Home</li></a>
            <a href='#Home'><li className='p-4 hover:text-white'>Shop</li></a>
            <a href='#Home'><li className='p-4 hover:text-white'>Products</li></a>
            <a href='#Home'><li className='p-4 hover:text-white'>Blogs</li></a>
            <a href='#Home'><li className='p-4 hover:text-white'>About Us</li></a>
        </ul>

      </div>
      
      <div className='space-x-4'>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <FontAwesomeIcon icon={faUser} />
      <FontAwesomeIcon icon={faBagShopping } />
      </div>

        
    </div>
  </div>

  )
}
