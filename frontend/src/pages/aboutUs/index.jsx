import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faGlobe,
  faHandHoldingDroplet,
  faVialCircleCheck,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";

import {
  faLessThan,
  faGreaterThan,
  faXmark,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import Umer from "../../assets/images/umer.jpg";
import Jawwad from "../../assets/images/jawwad.jpeg";
import Profile from "../../assets/images/profile.png";
import Story from "../../assets/images/story3.svg";
import Img from "../../assets/images/img-11.png";
import Mission from "../../assets/images/mission.jpg";

function AboutUs() {
  return (
    <div className="bg-white min-h-screen">
      {/* Top section  */}

      <div className="banner w-full h-80 bg-gray-200 justify-center text-center text-lg flex items-center ">
        <h1 className="text-white text-6xl font-bold font-serif">About Amor</h1>
      </div>

      {/* end top section */}
      <div className="">
        <div className="flex text-4xl font-medium justify-center underline font-serif my-9">
          Our Values
        </div>
        <div className="flex justify-between my-10 mx-56 ">
          <div className="">
            <FontAwesomeIcon
              className="text-green-300 w-12 h-12 mx-24"
              icon={faBox}
            />
            <h1 className="text-lg font-semibold mx-5">
              Packaging Sustainability
            </h1>
            <p className="text-sm text-blue-950">
              We care for our forests | FSC Certified
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              className="text-orange-300 w-12 h-12 mx-24"
              icon={faGlobe}
            />
            <h1 className="text-lg font-semibold mx-5">Worldwide Shipping</h1>
            <p className="text-sm text-blue-950">
              Low Charges | 1,99€ Standard Shipping
            </p>
          </div>
        </div>
        <div className="flex justify-between mx-20">
          <div>
            <FontAwesomeIcon
              className="text-blue-950 w-12 h-12 mx-16"
              icon={faBullhorn}
            />
            <h1 className="text-lg font-semibold mx-5">Vegan Products</h1>
            <p className="text-sm text-blue-950">Vegan Products available!</p>
          </div>
          <div>
            <FontAwesomeIcon
              className="text-blue-500 w-12 h-12 mx-24"
              icon={faHandHoldingDroplet}
            />
            <h1 className="text-lg font-semibold mx-14">Mild Formula</h1>
            <p className="text-sm text-blue-950">
              Less irritation | Suitable for sensitive skin
            </p>
          </div>
          <div>
            <FontAwesomeIcon
              className="text-red-300 w-12 h-12 mx-24"
              icon={faVialCircleCheck}
            />
            <h1 className="text-lg font-semibold mx-14">Cruelty Free</h1>
            <p className="text-sm text-blue-950">
              We don't sell Products tested on animals!
            </p>
          </div>
        </div>
      </div>

      <div className=" py-2 grid md:grid-cols-2">
        {/* mission */}

        <div className="left w-full  bg-red-100 p-10  overflow-scroll lg:overflow-hidden ">
          <h2 className="text-2xl font-bold text-black mb-4">Our Mission</h2>
          <p className="text-slate-500 text-lg ">
            We are a company that values integrity, quality, and community. Our
            team is dedicated to providing the best products and services to our
            customers. We believe that by working together, we can achieve more
            than we could alone.We are a company that values integrity, quality,
            and community. Our team is dedicated to providing the best products
            and services to our customers. We believe that by working together,
            we can achieve more than we could alone.
          </p>
        </div>
        <div className="right w-full rounded-r-sm bg-gray-200">
          <img
            src={Mission}
            alt="img"
            className="object-contain w-full h-full"
          />
          {/* <div className="bg-red-200 w-3/6 h-5/6 mx-auto py-3 rounded-lg my-9">
            <h1 className="text-center">Enriched products</h1>
            <div className="bg-gray-200 h-80  ">
              <div className="h-5/6 relative">
                <img
                  src={Mission}
                  alt="img"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className=" bg-white h-1/6  text-center">
                <p>Enriched Serum & </p>
                <p>Founder, MAC</p>
              </div>
            </div>
          </div> */}
        </div>

        {/* story */}
        <div className="w-full rounded-r-sm bg-gray-200">
          <img src={Story} alt="img" className="object-contain w-full h-full" />
        </div>

        <div className=" w-full h-96 bg-red-100 p-10  overflow-scroll lg:overflow-hidden ">
          {/* <h2 className="text-2xl font-bold text-black mb-4">Our Story</h2> */}
          <p className="text-slate-500 text-lg ">
            We are a company that values integrity, quality, and community. Our
            team is dedicated to providing the best products and services to our
            customers. We believe that by working together, we can achieve more
            than we could alone. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Temporibus, sint labore provident voluptatum
            libero dignissimos assumenda odit repellendus nisi aspernatur ullam.
            Veritat\Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet magnam culpa aliquam, nesciunt est ipsum facilis quam
            sapiente qui tenetur quis voluptatum. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Vero voluptatem provident doloribus
            pariatur facilis dolor ut quis eligendi molestias. Eveniet
            repudiandae officiis ea temporibus distinctio asperiores modi odit
            necessitatibus minus? Ad, ea illo?
          </p>
        </div>

        {/* Team  sectionn*/}
        <div className="col-span-2 px-10">
          <h2 className="text-2xl font-bold text-black my-8 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-12">
            <div className="bg-gray-200 h-80  ">
              <div className="h-5/6 relative">
                <img
                  src={Profile}
                  alt="Umer"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className=" bg-white h-1/6  text-center">
                <p>Umer Nawaz</p>
                <p>Founder, MAC</p>
              </div>
            </div>

            <div className="bg-gray-200 h-80  ">
              <div className="h-5/6 relative">
                <img
                  src={Profile}
                  alt="img"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className=" bg-white h-1/6  text-center">
                <p>Saqlain Haider</p>
                <p>Founder, COO</p>
              </div>
            </div>

            <div className="bg-gray-200 h-80  ">
              <div className="h-5/6 relative">
                <img
                  src={Profile}
                  alt="img"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className=" bg-white h-1/6  text-center">
                <p>Atika Javed</p>
                <p>Founder, Olay</p>
              </div>
            </div>

            <div className="bg-gray-200 h-80  ">
              <div className="h-5/6 relative">
                <img
                  src={Profile}
                  alt="profile"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className=" bg-white h-1/6  text-center">
                <p>Muhammad Jawwad</p>
                <p>Founder, Loreal</p>
              </div>
            </div>

            <div className="bg-gray-200 h-80  ">
              <div className="h-5/6 relative">
                <img
                  src={Profile}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className=" bg-white h-1/6  text-center">
                <p>Anbreen Baig</p>
                <p>Founder, Neutrogena</p>
              </div>
            </div>

            <div className="bg-gray-200 h-80  ">
              <div className="h-5/6 relative">
                <img
                  src={Profile}
                  alt="img"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className=" bg-white h-1/6  text-center">
                <p>Ronald Richards</p>
                <p>Founder, Louis Vuitton</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
