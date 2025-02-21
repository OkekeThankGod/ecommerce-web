import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { FaDeviantart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { ShopContext } from '../../context/ShopContext';

export default function ShopHeader() {
  const { getTotalCartItems } = useContext(ShopContext);
  const [cartCount, setCartCount] = useState(getTotalCartItems());
  const [menu, setMenu] = useState('Shop');

  useEffect(() => {
    setCartCount(getTotalCartItems());
  }, [getTotalCartItems]);

  return (
    <div className="w-full bg-gray-200 shadow-md py-3 px-6 flex justify-between items-center ">
      
      {/* Left Section: Logo & Title */}
      <div className="flex items-center space-x-3">
        <FaDeviantart className="text-green-600 text-3xl" />
        <h2 className="text-lg font-bold text-gray-800 w-20px">SHOPON</h2>
      </div>

      {/* Center Section: Navigation Links */}
      <ul className="flex space-x-10 text-gray-800 font-medium ">
       <li onClick={() => { setMenu('Shop'); }}><Link to={'/'}> {menu === 'Shop' ? <hr /> : <></>}Shop</Link></li>
       <li onClick={() => { setMenu('Men'); }}><Link to={'/Mens'}> {menu === 'Men' ? <hr /> : <></>}Men</Link></li>
       <li onClick={() => { setMenu('Women'); }}><Link to={'/Womens'}> {menu === 'Women' ? <hr /> : <></>}Women</Link></li>
       <li onClick={() => { setMenu('Kids'); }}><Link to={'/Kids'}> {menu === 'Kids' ? <hr /> : <></>}Kids</Link></li>
      </ul>

      {/* Right Section: Cart & Login */}
      <div className="flex items-center space-x-6 relative">
        {/* Cart Icon with Count */}
        <div className="relative cursor-pointer">
          <Link to='/Cart'> <FaCartShopping className="text-2xl text-gray-700 hover:text-blue-600" /> </Link>
          {cartCount > 0 && (
            <span className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </div>
 
        {/* Login Button */}
        <Link to="/login">
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Login
          </button>
        </Link>
      </div>

    </div>
  );
}
