import React from "react";
import img15 from '../../../assets/images/img-25.png'


export const Hero = () => {
    return (
    <div className="bg-red-100 flex ">
        
        <div className="container max-w-screen-md mx-auto">
           <div className=" ">
             <h3 className="pl-20 pt-20 mt-18 text-5xl">The Best Solutions <br/> For Moisturing The Skin</h3>
             
            </div>
            <div className="mt-9 ml-20 text-lg">
                <p>Only included the most potent active botanical ingredients.<br/> Nothing more</p>
            </div>
            <div>
                <button className="bg-red-400 font-bold text-lg mt-10 ml-20 mb-56 pl-12 pr-12 pt-3 pb-3">Buy Now!</button>
               
            </div>
        </div>

        <div className="max-w-md mx-32 max-w-full h-auto classes my-auto">
        <img src={img15} className="h-1/2 "/>

        </div>



    </div>

    )
      };
