import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { menu } from '../assets/assets';

const Product = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const [quantity, setQuantity] = useState(1);
  const [customMessage, setCustomMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const product = menu
    .flatMap((category) => category.subcategories)
    .flatMap((sub) => sub.products)
    .find((item) => item.id === productId);

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  const handleAddToCart = () => {
    // Normally here you'd update your cart state or dispatch to a global store
    setShowSuccess(true);
   {/* setTimeout(() => setShowSuccess(false), 5000); // auto-hide after 5s */} 
  };

  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-md">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 h-60 object-cover rounded-xl"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-xl text-secondary font-semibold mt-2 mb-4">Rs. {product.price}</p>
          <p className="text-gray-600 text-sm">
            Our delightful Ribbon Cake covered with butter icing and elegantly decorated with Easter theme.
          </p>
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">
          Free Customized Wording (optional):
        </label>
        <input
          type="text"
          value={customMessage}
          onChange={(e) => setCustomMessage(e.target.value)}
          placeholder="Enter custom message..."
          className="mt-1 block w-full border rounded-lg px-4 py-2 shadow-sm"
        />
      </div>

      <div className="mt-6 flex items-center gap-4">
        <span className="text-sm font-medium">Qty.</span>
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-16 px-2 py-1 border rounded"
        />
        <button
          onClick={handleAddToCart}
          className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition"
        >
          Add Order to Cart
        </button>
      </div>

      {showSuccess && (
        <div className="mt-6 bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-md">
          <p className="font-semibold">This item has been added to your cart</p>
          <p className="mt-1">
            ✔️ {product.name} - Quantity: {quantity}
          </p>
          <button onClick={()=> navigate('/cart')} className="mt-4 inline-flex items-center bg-white border px-4 py-1.5 rounded shadow text-sm font-medium">
            🛒 View Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
