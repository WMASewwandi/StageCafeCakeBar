import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import { menu } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Lunch = ({ onViewDetails }) => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const lunchCategory = menu.find((item) => item.category === "Lunch");
    const allProducts = lunchCategory?.subcategories.flatMap(sub => sub.products) || [];
    setFeaturedProducts(allProducts);
  }, []);

  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">Lunch</h3>
        <button
          onClick={() => navigate('/onlineMenu')}
          className="text-secondary hover:underline font-medium text-sm transition duration-200"
        >
          View More →
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {featuredProducts.map((item, index) => (
          <ProductItem
            key={item.id || index}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            onViewDetails={() => onViewDetails(item)}
          />
        ))}
      </div>
    </section>
  );
};

export default Lunch;
