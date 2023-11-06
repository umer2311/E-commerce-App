import React from 'react'

export const Categories = () => {
  return (
 <div>
    <div>
       <h2 className='font-bold ml-96 mt-20 text-3gxl'>Shop By Categories</h2>
    </div>


    <div className='mt-9 grid grid-cols-3 gap-3 mb-96'>
     
        <div className='bg-gray-300 row-span-2 max-w-520 h-72 ml-24 mr-2'><div className='bg-cyan-600 text-white mr-20 text-center'>Face Wash</div></div>
        <div className='bg-gray-300 w-96'><div className='bg-yellow-600 text-white mr-60 text-center'>Lotions</div></div>
        <div className='bg-gray-300 row-span-2  ml-16 mr-10'><div className='bg-amber-600 text-white mr-20 text-center'>Sunscreens</div></div>
        <div className='bg-gray-300 w-96 '><div className='bg-emerald-900 text-white mr-60 text-center'>Moisturizers</div></div>

      
    </div>
  </div>
  )
}
