import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Savouries from '../components/Savouries';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <Savouries />
    </div>
  );
};

export default Home;
