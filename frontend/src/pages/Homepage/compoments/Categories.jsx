import React from 'react'

export const Categories = () => {
  return (
 <div>
    <div>
       <p className='font-bold ml-96 mt-20'>Shop By Categories</p>
    </div>


    <div className='mt-9 grid grid-cols-3 gap-3 mb-96'>
     
        <div className='bg-gray-300 row-span-2 max-w-520 h-72 ml-24'>new</div>
        <div className='bg-gray-300 w-96'>new</div>
        <div className='bg-gray-300 row-span-2 w-1/2 ml-28'>new</div>
        <div className='bg-gray-300 w-96 '>new</div>

      
    </div>
  </div>
  )
}
