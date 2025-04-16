import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductPopup = ({ product, onClose }) => {
  const popupRef = useRef();
  const navigate = useNavigate();

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div
        ref={popupRef}
        className="bg-white rounded-2xl shadow-2xl border border-gray-300 w-full max-w-xl mx-4 p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl"
        >
          &times;
        </button>

        <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-1/2 h-48 object-cover rounded-xl"
          />
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
            <p className="text-lg text-secondary font-semibold mt-2 mb-4">Rs. {product.price}</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              This sweet delight is crafted with premium ingredients to satisfy your cravings.
            </p>
          </div>
        </div>

        {/* Go to Product Page Button */}
        <div className="text-center">
          <button
            onClick={() => {
              navigate(`/product/${product.id}`);
              onClose();
            }}
            className="mt-2 bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
          >
            Go to Product Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;
