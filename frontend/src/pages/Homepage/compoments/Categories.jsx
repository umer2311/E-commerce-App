import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import img15 from '../../../assets/images/img-25.png'

export const Categories = () => {
  return (
    <>
       <h1 className=" font-normal text-center  text-5xl py-5" >
      Categories
    </h1>
  
    <div class="grid grid-cols-3 gap-4 py-5 px-7">
        <div class="shadow-lg bg-red-100 text-red-00 text-lg font-bold text-center md:col-span-1 h-['250px'] p-3 rounded-lg row-span-2">
           <div className='h-full w-full p-2 flex-col inline-flex justify-between '>
            <div className=' text-blue-400  text-start'>Moisturizers</div>
          <div className="underline  text-end">
              <a className="mr-2 text-1xl text-gray-600" href="/">
              view more
             </a>
               <FontAwesomeIcon icon={faArrowRight} />
            </div>
         </div>
    </div>
        <div class="shadow-lg bg-green-100 text-green-500 md:col-span-1 text-lg font-bold text-center h-['150px'] p-3 rounded-lg">
          <div className='text-gray-400 text-start'>Shampoo</div>
          <div className="underline  text-end">
              <a className="mr-2 text-1xl text-gray-600" href="/">
              view more
             </a>
               <FontAwesomeIcon icon={faArrowRight} />
            </div></div>
        <div class="shadow-lg bg-yellow-100 text-green-500 md:col-span-1 text-lg font-bold text-center h-['250px'] p-3 rounded-lg row-span-2">
          <div className='h-full w-full p-2 flex-col inline-flex justify-between '>
            <div className=' text-purple-300  text-start'>Hair Care</div>
          <div className="underline  text-end">
              <a className="mr-2 text-1xl text-gray-600" href="/">
              view more
             </a>
               <FontAwesomeIcon icon={faArrowRight} />
            </div>
         </div></div>
        <div class="shadow-lg bg-orange-100 text-red-400 md:col-span-1 h-['150px'] text-lg font-bold text-center p-3 rounded-lg">
        <div className=' text-orange-400  text-start'>Lotions</div>
          <div className="underline  text-end">
              <a className="mr-2 text-1xl text-gray-600" href="/">
              view more
             </a>
               <FontAwesomeIcon icon={faArrowRight} />
            </div>
    </div>
</div>
    </>
  )
}
