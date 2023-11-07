import React from 'react';
import visa from "../../../assets/images/visa.png"
import mastercard from "../../../assets/images/mastercard.png"
import easypaisa from "../../../assets/images/easy.png"

const Footer = () => {
  return (
    <footer className="bg-red-300 text-white py-6 px-4">
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <h3 className="text-lg font-semibold mb-2">Info</h3>
          <ul>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <h3 className="text-lg font-semibold mb-2">Customer Care</h3>
          <ul>
            <li>
              <a href="/refunds-returns">Refunds and Returns</a>
            </li>
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
            <li>
              <a href="/shipping-policy">Shipping Policy</a>
            </li>
            <li>
              <a href="/sitemap">Sitemap</a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                  <h3 className="text-lg font-semibold mb-2">Logo</h3>
                   <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex">
            <a href="https://www.facebook.com">
              <i className="fab fa-facebook text-2xl mx-2"></i>
            </a>
            <a href="https://www.instagram.com">
              <i className="fab fa-instagram text-2xl mx-2"></i>
            </a>
            <a href="https://twitter.com">
              <i className="fab fa-twitter text-2xl mx-2"></i>
            </a>
            <a href="https://www.pinterest.com">
              <i className="fab fa-pinterest text-2xl mx-2"></i>
            </a>
                  </div>
                  
         
        </div>
       
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4  p-4">
          <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className=" p-2 border border-white rounded-l-md focus:outline-none focus:ring focus:border-yellow-400"
            />
            <button className=" bg-yellow-400 text-white p-2 rounded-r-md hover:bg-yellow-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <hr className="w-full mx-auto my-4 border-white" />
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className='flex text-center'>
          <img src={visa} alt="Visa" className="w-8 mx-2" />
          <img src= {mastercard} alt="MasterCard" className="w-8 mx-2" />
          <img src={easypaisa} alt="easypaisa" className="w-8 mx-2" />
        </div>
        <p className="text-white">&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
