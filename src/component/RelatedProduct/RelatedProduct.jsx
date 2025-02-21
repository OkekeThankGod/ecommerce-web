import React from 'react';
import data_product from '../../assets/images/Assets/data';
import Item from '../../component/item/Item';

export default function RelatedProduct() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-5xl font-semibold text-gray-800 mb-4 text-center">Related Products</h1>
      <div className="w-1/5 mx-auto mb-6">
      <hr className="mb-6 border-t-2 border-gray-300 w-[200px] h-[7px] rounded bg-[#252525] " />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data_product.map((item, i) => {
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
        })}
      </div>
    </div>
  );
}
