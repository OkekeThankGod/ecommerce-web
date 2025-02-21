import React from 'react';

export default function DescriptionBox() {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
      {/* Tabs Section */}
      <div className="flex border-b border-gray-300 mb-4">
        <div className="flex-1 text-center py-2 cursor-pointer hover:bg-gray-100">
          <span className="font-semibold">Description</span>
        </div>
        <div className="flex-1 text-center py-2 cursor-pointer hover:bg-gray-100">
          <span className="font-semibold">Reviews(112)</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <p className="text-gray-700 mb-4">
          This is an E-Commerce Website where you can buy various products at a good rate, both as a retailer and wholesaler.
        </p>
        <p className="text-gray-700">
          This is a platform designed to provide high-quality products at competitive prices.
        </p>
      </div>
    </div>
  );
}

