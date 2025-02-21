import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import dropdown_icon from '../assets/images/Assets/dropdown_icon.png';
import Item from '../component/item/Item';

export default function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      {/* Category Banner */}
      <img 
        src={props.banner} 
        alt="Category Banner" 
        className="w-full h-64 object-cover rounded-md shadow-lg mb-6"
      />
      
      {/* Sort Section */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Showing 1-12</span> Out of 36 Products
        </p>
        
        {/* Sort Dropdown */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <span className="font-medium text-gray-700">Sort by</span>
          <img src={dropdown_icon} alt="Sort Dropdown" className="w-5 h-5" />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item 
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className=' w-23 font-size-28 bg-red-400 text-white font-semibold rounded-full text-center items-center p-5 m-4 cursor-pointer transition-all transform hover:bg-red-500 hover:scale-105 hover:shadow-lg'>
  Explore More
</div>



    </div>
  );
}
