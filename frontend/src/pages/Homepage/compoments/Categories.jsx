import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import img15 from '../../../assets/images/img-25.png'

export const Categories = () => {
  return (
    <div>
      <div className='max-w-screen-md container mx-auto'>
        <h2 className='font-bold ml-96 mb-16 mt-20 text-3xl'>Shop By Categories</h2>
      </div>


      <div className=' grid grid-cols-3 gap-4'>

        <div className='bg-gray-200 row-span-2 w-80 h-96 max-h-full md:max-h-screen'>
        <img src={img15} className="h-1/2 max-w-md mx-12  my-auto " />
          <div className=''>

            
             

              <div className='bg-cyan-600 text-white mr-40 text-center'>Face Wash

              </div>
              <div className="underline mt-4">
                <a className="mr-2 text-1xl" href="/">
                  view more
                </a>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            


          </div>
        </div>
        <div className='bg-gray-300 w-96'>
          <div>
            <div className='bg-yellow-600 text-white mr-60 text-center'>Lotions</div>
            <div className="underline mt-4">
              <a className="mr-2 text-1xl" href="/">
                view more
              </a>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
        <div className='bg-gray-200 w-80 row-span-2'>
          <div>
            <div className='bg-amber-600 text-white mr-20 text-center'>Sunscreens</div>
            <div className="underline mt-4">
              <a className="mr-2 text-1xl" href="/">
                view more
              </a>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
        <div className='bg-gray-300 w-96 '>
          <div>
            <div className='bg-emerald-900 text-white mr-60 text-center'>Moisturizers</div>
            <div className="underline mt-4">
              <a className="mr-2 text-1xl" href="/">
                view more
              </a>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
