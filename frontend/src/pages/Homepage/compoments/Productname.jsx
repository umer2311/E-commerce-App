import React from 'react'
import img1 from '../../../assets/images/img-1.png'
import img2 from '../../../assets/images/image-2.png'
import img3 from '../../../assets/images/image-3.png'
import img4 from '../../../assets/images/image-4.png'
import img5 from '../../../assets/images/image-5.png'
import img6 from '../../../assets/images/image-14.png'

export const Productname = () => {
  return (
   
    <div className='container max-w-screen-md mx-auto'>
      <div className='inline-flex  mt-10'>
        <img src={img1} className='p-4 w-32 h-12'/>
        
        <img src={img2} className='p-4 w-32 h-12'/>
        
        <img src={img3} className='p-4 w-32 h-12'/>
        <img src={img4} className='p-4 w-32 h-12'/>
        <img src={img5} className='p-4 w-32 h-12'/>
        <img src={img6} className='p-4 w-32 h-12'/>
      </div>
    </div>
  )
}
