import React, { useState } from 'react';
import { menu } from '../assets/assets';

const OnlineMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expandedCategory, setExpandedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  // Get all category names
  const categories = menu.map((item) => item.category);

  // Get subcategories of selectedCategory
  const currentCategory = menu.find((item) => item.category === selectedCategory);
  const subcategories = currentCategory?.subcategories || [];

  // Get products to display
  const filteredProducts = selectedSubcategory
    ? selectedSubcategory.startsWith("All")
      ? subcategories.flatMap((sub) => sub.products)
      : subcategories.find((sub) => sub.name === selectedSubcategory)?.products || []
    : [];

  const handleCategoryClick = (cat) => {
    if (expandedCategory === cat) {
      setExpandedCategory('');
    } else {
      setExpandedCategory(cat);
      setSelectedCategory(cat);
      setSelectedSubcategory('');
    }
  };

  return (
    <section className="bg-gradient-to-br from-red-100 via-white to-gray-100 py-20 rounded-4xl">
      <div className="flex flex-col md:flex-row p-4 gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-64 border-r pr-4">
          <h2 className="text-xl font-bold mb-4">Our Online Menu</h2>
          {menu.map((cat) => (
            <div key={cat.category} className="mb-4">
              <button
                onClick={() => handleCategoryClick(cat.category)}
                className={`w-full text-left font-semibold p-2 rounded ${
                  selectedCategory === cat.category ? 'bg-red-600 text-white' : 'bg-gray-100'
                }`}
              >
                {cat.category}
              </button>
              {expandedCategory === cat.category && cat.subcategories.length > 0 && (
                <ul className="ml-4 mt-2 list-disc text-sm text-gray-700">
                  {cat.subcategories.map((subcat) => (
                    <li
                      key={subcat.name}
                      onClick={() => setSelectedSubcategory(subcat.name)}
                      className={`cursor-pointer py-1 ${
                        selectedSubcategory === subcat.name ? 'text-red-600 font-semibold' : ''
                      }`}
                    >
                      {subcat.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            {selectedSubcategory || selectedCategory || 'Select a Category'}
          </h2>
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="border rounded p-4 shadow hover:shadow-lg transition"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover mb-3 rounded"
                  />
                  <h3 className="text-md font-semibold text-red-700">{product.name}</h3>
                  <p className="text-gray-600 text-sm">Details & Pricing</p>
                  <p className="text-sm text-gray-700 mt-1">Rs. {product.price}</p>
                </div>
              ))}
            </div>
          ) : selectedSubcategory ? (
            <p className="text-gray-500 mt-6">No products available in this subcategory.</p>
          ) : (
            <p className="text-gray-400 mt-6">Please select a subcategory to view items.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default OnlineMenu;
