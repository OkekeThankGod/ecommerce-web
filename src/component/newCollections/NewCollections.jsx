import React from 'react';
import new_collection from '../../assets/images/Assets/new_collections';
import Item from '../item/Item';

export default function NewCollections() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 ">
        New Collections
      </h1>
      <hr className="w-20 mx-auto border-t-4 border-gray-800 mb-8" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {new_collection.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}
