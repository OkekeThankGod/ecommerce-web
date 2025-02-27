import React, { useContext } from "react";
import './CartItems.css';
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../../assets/images/Assets/cart_cross_icon.png";

export default function CartItems() {
  const { getTotalCartItems, getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  console.log("Cart Items: ", cartItems); // Debugging

  return (
    <div className="cartitems">
      {/* Table Header - Align horizontally */}
      <div className="grid grid-cols-6 gap-4 bg-gray-100 p-4 rounded-md font-semibold text-gray-700 mt-5">
  <p className="text-center">Product</p>
  <p className="text-center">Title</p>
  <p className="text-center">Price</p>
  <p className="text-center">Quantity</p>
  <p className="text-center">Total</p>
  <p className="text-center">Remove</p>
</div>
<hr className="border-gray-300 mt-2" />

      <div>
        {all_product.map((e) => {
          if (cartItems[e.id] > 0)
            return (
              <div key={e.id} className="border-b py-4 flex items-center justify-between">
  {/* Product Image */}
  <img src={e.image} alt={e.name} className="w-16 h-20 object-cover rounded mx-22" />

  {/* Product Name */}
  <p className="text-slate-400 font-medium">{e.name}</p>

  {/* Product Price */}
  <p className="text-gray-900 font-semibold">${e.new_price}</p>

  {/* Quantity */}
  <div className="flex items-center">
    <p className="bg-gray-200 px-3 py-1 rounded-md text-gray-800">{cartItems[e.id] || 0}</p>
  </div>

  {/* Total Price */}
  <p className="text-gray-900 font-semibold">${e.new_price * (cartItems[e.id] || 0)}</p>

  {/* Remove Item Button */}
  <img
    src={remove_icon}
    alt="Remove item"
    className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
    onClick={() => removeFromCart(e.id)}
  />
</div>

            );
          return null;
        })}
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 p-6">
          {/* Cart Totals Section */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/2">
            <h1 className="text-xl font-semibold text-center mb-4">Cart Totals</h1>
            <div className="space-y-3">
              <div className="flex justify-between text-lg">
                <p>Sub-Total</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr className="border-gray-300" />
              <div className="flex justify-between text-lg">
                <p>Shipping Fee</p>
                <p className="text-green-500">Free</p>
              </div>
              <hr className="border-gray-300" />
              <div className="flex justify-between text-lg font-bold">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button className="w-full bg-red-500 text-white py-2 mt-4 rounded-md hover:bg-red-600 transition">
              Proceed To Checkout
            </button>
          </div>

          {/* Promo Code Section */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/3">
            <p className="text-center text-lg">If you have a promo code, enter it here</p>
            <div className="flex mt-4 space-x-2">
              <input
                type="text"
                placeholder="Promo Code"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
