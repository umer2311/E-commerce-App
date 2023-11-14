import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan, faGreaterThan, faXmark, faHouse } from '@fortawesome/free-solid-svg-icons'
import  img30 from '../../assets/images/Skin-care.png'
import  img31 from '../../assets/images/Group.png'
import  img32 from '../../assets/images/Beauty-Routine.png'
import  img33 from '../../assets/images/Ingredient.png'


const Blog = () => {
  return (
  <div className='container mx-auto '>
    <div className='bg-red-200 max-w-full h-28 flex justify-center gap-20 pt-10 '>
      <FontAwesomeIcon icon={faLessThan} className='text-xl'/>
      <p className='text-xs'>
      For shopping assistance, click on the chat icon to connect with an in in store Client <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Advisor to get photos, videos, or advice on products.
      </p>
      <FontAwesomeIcon icon={faGreaterThan} className='text-xl'/>
      <FontAwesomeIcon icon={faXmark} className='text-xl align-left'/>

    </div>
    <div className='flex gap-3 px-20 mx-auto py-20'>
      <FontAwesomeIcon icon={faHouse} className='text-xl align-left'/>
      <p className='text-gray-400'>Home</p>
      <FontAwesomeIcon icon={faGreaterThan} className='text-xs text-gray-400 mt-2'/>
      <p className='text-gray-400'>Blog</p>
      <FontAwesomeIcon icon={faGreaterThan} className='text-xs text-gray-400 mt-2'/>
      <p>Ingedient Spotlight: What You Need To Know About Collage</p>
    </div>
    <div className='bg-gray-300 w-32 mx-auto'>
      <p className='text-center'>Uncategorized</p>
    </div>
    <div className='text-5xl flex justify-center mt-14 '>
      <h1 className='font-serif leading-normal'>
      Ingredient spotlight: what you need <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to know about collage
      </h1>
    </div>
    <div className='text-gray-500 flex justify-center mt-1'>
     
      <p>By:Admin&nbsp;&nbsp;|&nbsp;&nbsp;October&nbsp;25,&nbsp;2022&nbsp;&nbsp;|&nbsp;&nbsp;4&nbsp;Comments</p>
    
    </div>
    <div className='flex items-center justify-center'>
     <img src={img30} className=''/>
    </div>
    <div className='flex justify-center'>
    <div className='rounded-lg border-red-500 border px-28 py-5'>  
      <img src={img31} className=''/>
      <p className='italic flex text-s'>If you’re #skincaregoals include a younger-looking, glowing complexion, it all starts with collagen. Collagen is <br/> one of your body’s major building blocks: it’s a protein and critical to keeping your skin structure strong, elastic,<br/> plump, and smooth. Unfortunately, aging, the sun, and even diet all decrease the quantity and quality of the <br/> collagen your body naturally produces.</p>
    </div>
    </div>
    <div className='py-6'>
      <h3 className='font-bold text-xl ml-72 py-3'>Ingredient Intolerance</h3>
      <p className='text-xs ml-72 '>So, when it comes to anti-aging moisturizers creams, and sheet masks, collagen is a pretty popular ingredient because it promises to restore softer, bouncier, and less-<br/>wrinkled skin. Ingredients like Collagen can help strengthen your skin barrier, which is the key to healthy, glowing skin. The catch? Some formulations boasting<br/> collagen on the label include a collagen that can’t penetrate into your skin due to its large molecular size. While it might feel nice on your skin’s surface, it’s a zero in the anti-<br/>aging department.

      <br/><br/>To get the most out of your collagen-enriched skincare arsenal, look for formulations that specifically include hydrolyzed collagen or collagen peptides – that’s collagen <br/> which has been broken down into smaller molecules and have the ability to penetrate deeply into your skin.</p>
    </div>
    <div>
      <p className='text-2xl ml-72 font-bold py-3'>The Ultimate Brightening Solution For Sensitive Skin</p>
      <p className='text-xs ml-72'>With this potential discomfort in mind, Aloisia Beauty has developed a highly effective serum that leads to the same visibly noticeable benefits without the Vitamin C:<br/> Our renew Concentrated Serum. But don’t just take it from us: According to a third-party, independent evaluation of 32 consumers, 86% reported that their skin looks<br/> plumper and brighter and 97% reported brighter more revitalized skin after just 10 days of using the Anti-Aging and Brightening Collection. The super-charged<br/> treatment achieves these impressive results thanks to Aloisia’s proprietary blend of antioxidants and other effective ingredients like:</p>
      <ul className='text-xs mt-5 ml-80'>
         <li className=''><span className='font-bold'>Sodium hyaluronate</span> &nbsp;&nbsp;delivers intense hydration deep into the skin, providing an often-needed infusion of moisture to the cells.</li>
        <li className='mt-2'><span className='font-bold'>Niacinamide</span> &nbsp;&nbsp;has brightening, anti-inflammatory, anti-microbial, oil-balancing, moisture-retaining properties.</li>
        <li className='mt-2'><span className='font-bold'>Green tea</span> &nbsp;&nbsp;calms inflammation and reduces the production of sebum, while protecting the skin’s natural barrier.</li>
      </ul>
    </div>
    <div className='max-w-md mx-auto py-9 max-w-full h-auto classes my-auto grid grid-cols-2 gap-9'>
       <img src={img32} className='w-660px'/>
       <img src={img33} className=''/>
    </div>
    <div className='py-5 ml-72'>
      <p className='text-xs'>Together, the antioxidants infused into this lightweight treatment give you the benefits you would achieve with Vitamin C—and give your skin the same bright, glowing,<br/> even-toned results but without the reactivity. So while there are other alternatives out there that can provide some of these desired benefits, RENEW Concentrated<br/> Serum is the ultimate holy grail for those who are sensitive to Vitamin C. </p>
      <p className='text-xs py-4'>Now that you know there’s no need to give up on your glow if you’re prone to irritation, make sure you’re doing the most to promote a brightened complexion with our <br/>complete Aloisia Beauty Anti-Aging & Brightening System. The revolutionary skincare set includes our renew Concentrated Serum plus four other proprietary formulas <br/>packed with carefully sourced ingredients rooted in K-Beauty research: balance Moisturizing Toner, light hydration Emulsion, revitalize Eye Cream and ultra-rich <br/>Moisture Cream. The five products work in tandem to reduce discoloration, even tone and brighten, all with luxurious-feeling formulas that transform your daily skincare <br/>routine from practical to pleasurable.
      </p>
    </div>
    
    <div>
      <ul className='flex gap-4 mx-72 mt-10'>
        <li className='bg-gray-300 py-1 pl-3 pr-3 text-xs'>Beauty</li>
        <li className='bg-gray-300 py-1 pl-3 pr-3 text-xs'>Makeup</li>
        <li className='bg-gray-300 py-1 pl-3 pr-3 text-xs'>Oils&Serum</li>
        <li className='bg-gray-300 py-1 pl-3 pr-3 text-xs'>Tools</li>
        <li className='bg-gray-300 py-1 pl-3 pr-3 text-xs'>Women</li>
        <li className='bg-gray-300 py-1 pl-3 pr-3 text-xs'>Cleanser&Toner</li>
      </ul>
    </div>
  </div>
  )
}
export default Blog;