import React, { useState } from 'react';
import Savouries from './Savouries';
import CakesSweet from './CakesSweet';
import Lunch from './Lunch';
import ProductPopup from './ProductPopup'; // import the popup component

const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="bg-gradient-to-br from-red-100 via-white to-gray-100 py-20 rounded-4xl relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-2">Featured Products</h2>
          <p className="text-gray-600 text-lg">Discover our top picks – fresh, tasty, and made with love!</p>
          <div className="mt-4 border-b-4 border-red-500 w-24 mx-auto rounded-full" />
        </div>

        {/* Product Sections */}
        <CakesSweet onViewDetails={setSelectedProduct} />
        <Savouries onViewDetails={setSelectedProduct} />
        <Lunch onViewDetails={setSelectedProduct} />
      </div>

      {/* Global Popup Component */}
      <ProductPopup product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </section>
  );
};

export default FeaturedProducts;
