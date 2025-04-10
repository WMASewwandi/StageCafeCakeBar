import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import { products } from '../assets/assets';

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    setFeaturedProducts(products);
  }, []);

  return (
    <div className='my-10 px-4 sm:px-6 md:px-10 lg:px-20'>
      <div className='text-center py-8 text-3xl'>
        <h2 className='text text-white'>Cakes & Sweet Treats</h2>
      </div>

      {/* Rendering Products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          featuredProducts.map((item, index) => (
            <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price} />
          ))
        }
      </div>
    </div>
  );
};

export default FeaturedProducts;
