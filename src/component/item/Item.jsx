import React from 'react';
import { Link } from 'react-router-dom';

export default function Item(props) {
  return (
    <div className="item bg-white shadow-md rounded-lg p-4 transition-all duration-300 hover:shadow-xl hover:scale-105">
      
      {/* Product Image */}
      <Link to={`/product/${props.id}`}><img src={props.image} onClick={window.scrollTo(0,0)}/> </Link>

      {/* Product Name */}
      <p className="mt-3 text-lg font-semibold text-gray-800">{props.name}</p>

      {/* Price Section */}
      <div className="item-prices flex items-center space-x-3 mt-2">
        <div className="item-price-new text-green-600 text-lg font-bold">
          ${props.new_price}
        </div>  
        <div className="item-price-old text-gray-500 line-through text-sm">
          ${props.old_price}
        </div>  
      </div>
    </div>
  );
}
