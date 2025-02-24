import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaDeviantart, FaBars, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { ShopContext } from '../../context/ShopContext';

export default function ShopHeader() {
  const { getTotalCartItems } = useContext(ShopContext);
  const [cartCount, setCartCount] = useState(getTotalCartItems());
  const [menu, setMenu] = useState('Shop');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setCartCount(getTotalCartItems());
  }, [getTotalCartItems]);

  return (
    <>
      {/* Top Navbar */}
      <div className="w-full bg-gray-200 shadow-md py-3 px-6 flex justify-between items-center">
        
        {/* Left Section: Sidebar Toggle (Mobile) & Logo */}
        <div className="flex items-center space-x-3">
          {/* Show Hamburger Icon only on Mobile */}
          <button onClick={() => setSidebarOpen(true)} className="text-2xl md:hidden">
            <FaBars />
          </button>
          <FaDeviantart className="text-green-600 text-3xl" />
          <h2 className="text-lg font-bold text-gray-800 text-red-600">SHOPON</h2>
        </div>

        {/* Center Section: Navigation Links (Hidden on Mobile) */}
        <ul className="hidden md:flex space-x-10 text-gray-800 font-medium">
          <li onClick={() => setMenu('Shop')}><Link to="/" className={`${menu === 'Shop' && "font-bold text-blue-600"}`}>Shop</Link></li>
          <li onClick={() => setMenu('Men')}><Link to="/Mens" className={`${menu === 'Men' && "font-bold text-blue-600"}`}>Men</Link></li>
          <li onClick={() => setMenu('Women')}><Link to="/Womens" className={`${menu === 'Women' && "font-bold text-blue-600"}`}>Women</Link></li>
          <li onClick={() => setMenu('Kids')}><Link to="/Kids" className={`${menu === 'Kids' && "font-bold text-blue-600"}`}>Kids</Link></li>
        </ul>

        {/* Right Section: Cart & Login */}
        <div className="flex items-center space-x-6">
          {/* Cart Icon with Count */}
          <div className="relative cursor-pointer">
            <Link to='/Cart'>
              <FaCartShopping className="text-2xl text-gray-700 hover:text-blue-600" />
            </Link>
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

      {/* Sidebar (Only Visible on Mobile) */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:hidden`}>
        {/* Sidebar Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-600">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={() => setSidebarOpen(false)} className="text-2xl">
            <FaTimes />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col mt-5 space-y-4 text-lg font-medium">
          <li className="px-6 py-3 hover:bg-gray-700" onClick={() => { setMenu('Shop'); setSidebarOpen(false); }}>
            <Link to="/" className={`${menu === 'Shop' && "border-l-4 border-yellow-400 pl-2"}`}>Shop</Link>
          </li>
          <li className="px-6 py-3 hover:bg-gray-700" onClick={() => { setMenu('Men'); setSidebarOpen(false); }}>
            <Link to="/Mens" className={`${menu === 'Men' && "border-l-4 border-yellow-400 pl-2"}`}>Men</Link>
          </li>
          <li className="px-6 py-3 hover:bg-gray-700" onClick={() => { setMenu('Women'); setSidebarOpen(false); }}>
            <Link to="/Womens" className={`${menu === 'Women' && "border-l-4 border-yellow-400 pl-2"}`}>Women</Link>
          </li>
          <li className="px-6 py-3 hover:bg-gray-700" onClick={() => { setMenu('Kids'); setSidebarOpen(false); }}>
            <Link to="/Kids" className={`${menu === 'Kids' && "border-l-4 border-yellow-400 pl-2"}`}>Kids</Link>
          </li>
        </ul>
      </div>

      {/* Overlay (Closes Sidebar when Clicked) */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 md:hidden" onClick={() => setSidebarOpen(false)}></div>
      )}
    </>
  );
}
