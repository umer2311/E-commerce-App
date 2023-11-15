import React from "react";
import { MapPinIcon, PhoneIcon, ClockIcon } from "@heroicons/react/24/outline";
// import mapStores from "../../assets/images/map.png";
import locationStore from "../../assets/images/map.png";
import { Navbar } from "../homepage/compoments/Navbar";
import Footer from "../homepage/compoments/footer";
function ContactUs() {
  return (
    <div className="container mx-auto px-2">
      <Navbar></Navbar>
      <Header />
      <Main />
      <img src={locationStore} className="w-full h-full my-16" />
      <Footer></Footer>
    </div>
  );
}

function Header() {
  return (
    <div className="text-center p-8">
      <h1 className="text-5xl font-serif font-bold text-gray-700  inline-block border-b-2 mx-auto mb-8 pb-2">
        Keep in touch with us
      </h1>
      <p className="text-xl text-gray-950 text-center">
        We’re talking about clean beauty gift sets,<br></br>
        of course – and we’ve got a bouquet of beauties<br></br>
         for yourself or someone you love.<br></br>
      </p>
    </div>
  );
}

function Main() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
      <StoreLocation />
      <Contact />
      <OpenHours />
    </div>
  );
}

function StoreLocation() {
  return (
    <div className=" p-2">
      <MapPinIcon className="w-9  bg-red-300 rounded-full p-1 inline-block mr-2" />
      <h2 className="text-2xl font-semibold text-gray-800 inline-block ">
        Store Location
      </h2>
      <ul className=" list-inside list-none lg:indent-11">
        <li>
          <span className="text-gray-700 text-sm">Store 1: </span>42nd Street,
          New York
        </li>
        <li>
          <span className="text-gray-700 text-sm">Store 2: </span>72 E Houston
          Street, New York
        </li>
        <li>
          <span className="text-gray-700 text-sm">Store 3: </span>26th Street,
          Miami FL, USA
        </li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div className="p-2">
      <PhoneIcon className="w-9  bg-red-300 rounded-full p-1 inline-block mr-2" />
      <h2 className="text-2xl font-semibold text-gray-800 inline-block ">
        Contact
      </h2>
      <p className=" lg:indent-11">
        <span className="text-gray-700">Phone: </span> +9 (230) 485-55349
      </p>

      <p className="lg:indent-11">
        <span className="text-gray-700">Hotline: </span>042-78542122
      </p>

      <p className="lg:indent-11">
        <span className="text-gray-700">Email:</span> info@breweries.com
      </p>
    </div>
  );
}

function OpenHours() {
  return (
    <>
   
    <div className=" p-2">
      <ClockIcon className="w-9  bg-red-300 rounded-full p-1 inline-block mr-2" />
      <h2 className="text-2xl font-semibold text-gray-800 inline-block">
        Open Hours
      </h2>
      <p className="lg:indent-11">
        <span className="text-gray-700">Mon-Sat:</span> 08:00am-04:00pm{" "}
      </p>
      <p className="lg:indent-11">
        <span className="text-gray-700">Sunday: </span> Close
      </p>
    </div>
    
    </>
  );
}

export default ContactUs;
