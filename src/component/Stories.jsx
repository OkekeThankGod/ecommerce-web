import React from 'react'
import { RiStarSFill } from "react-icons/ri";
import { MdLocalShipping } from "react-icons/md";
import { CiDollar } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";

import img2 from "../assets/images/Assets/product_22.png";
import img3 from "../assets/images/Assets/cart3.jpg";
import img4 from "../assets/images/Assets/cart4.jpg";
import { IoBagHandle } from "react-icons/io5";




export default function Stories() {
  return (
    <div>
        <div className="w-full px-4 py-8 bg-[#f7f7f7] text-black">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Our Instagram Stories</h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {[img2, img3, img4, img2].map((image, index) => (
            <div key={index} className="w-full sm:w-24 md:w-48 mx-auto"> {/* Smaller width for small screens (sm:w-24) */}
              <img
                className="w-full h-auto rounded-lg transition-all duration-300 transform hover:scale-110"
                src={image}
                alt="Story"
              />
            </div>
          ))}
        </div>
        
          {/* Features (Shipping, Money Guarantee, Support, Payment) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Free Shipping */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <MdLocalShipping className="text-4xl text-blue-500 mb-4" />
              <p className="text-lg font-medium">Free Shipping</p>
            </div>
        
            {/* Money Guarantee */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <CiDollar className="text-4xl text-green-500 mb-4" />
              <p className="text-lg font-medium">Money Guarantee</p>
            </div>
        
            {/* Online Support */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <CiHeadphones className="text-4xl text-yellow-500 mb-4" />
              <p className="text-lg font-medium">Online Support</p>
            </div>
        
            {/* Flexible Payment */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <MdOutlinePayment className="text-4xl text-purple-500 mb-4" />
              <p className="text-lg font-medium">Flexible Payment</p>
            </div>
          </div>
        </div>
    </div>
  )
}
