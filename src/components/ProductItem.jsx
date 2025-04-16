import React from 'react';

const ProductItem = ({ image, name, price, onViewDetails }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group cursor-pointer">
      {/* Image Container */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover transition duration-300 group-hover:blur-sm"
        />

        {/* Button appears over blurred image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={onViewDetails}
            className="opacity-0 h-15 w-40 group-hover:opacity-100 bg-transparent border-3 text-black text-sm font-semibold px-4 py-1.5 rounded-full shadow transition duration-300"
          >
            View Details
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-3">
        <h4 className="text-sm font-semibold text-gray-800">{name}</h4>
        <p className="text-secondary text-sm font-bold mt-1">Rs. {price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
