import React from "react";
import img9 from '../../../assets/images/img-7.png'


export const Hero = () => {
    return (
    <div className="bg-red-100 flex">
        <div>
           <div className="left">
             <h3 className="pl-20 pt-20  mt-18 font-ver text-2xl">The Best Solutions <br/> For Moisturing The Skin</h3>
             
            </div>
            <div className="mt-5 ml-20 text-xs">
                <p>Only included the most potent active botanical ingredients.<br/> Nothing more</p>
            </div>
            <div>
                <button className="bg-red-400 font-bold text-xs mt-10 ml-20 mb-56 pl-8 pr-8 pt-2 pb-2">Buy Now!</button>
               
            </div>
        </div>
        <div className="w-96 mx-32 my-auto">
        <img src={img9} className="h-1/2"/>

        </div>



    </div>

    )
      };
