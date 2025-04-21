import React from 'react';
import { assets } from '../assets/assets';

const Cakes = () => {
  // Header Component
  const Header = () => {
    return (
      <div className="relative">
        {/* Blurred Background Image */}
        <div className="absolute inset-0  bg-cover bg-center blur-md opacity-50"></div>
        {/* Header Content */}
        <div className="relative flex justify-between items-center p-4 max-w-7xl mx-auto">
          <div className="bg-red-600 text-white px-4 py-2 text-lg font-bold">Cakes</div>
          <div className="space-x-2">
            <a href="./CakeQuote" className="text-red-600 bg-white px-4 py-2 rounded hover:bg-red-50">Request for a Quote</a>
            <a href="/cakesGallery" className="text-red-600 bg-white px-4 py-2 rounded hover:bg-red-50">Sample Gallery</a>
          </div>
        </div>
      </div>
    );
  };

  // CakeCard Component
  const CakeCard = ({ image, title, description }) => {
    return (
      <div className="bg-white border border-gray-200 shadow-md rounded-lg p-4">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
        <h3 className="text-xl font-bold mt-4">{title}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
        <a href="./cakeQuote" className="text-red-600 mt-4 inline-block hover:underline">Request a Quote</a>
      </div>
    );
  };

  // MainContent Component
  const MainContent = () => {
    const cakeData = [
      {
        image: assets.Birthday,
        title: 'Birthday Cake',
        description: 'Design cakes to celebrate your birthday or special occasion like anniversary.'
      },
      {
        image: assets.sample,
        title: 'Custom Design',
        description: 'Transform your imagination to reality. We prepare the way you want it! Request a Quote.'
      },
      {
        image: assets.sample,
        title: 'Edible Prints',
        description: 'Any image you want to be printed on top of a cake. Request a Quote.'
      },
      {
        image: assets.WeddingCake,
        title: 'Wedding Cake',
        description: 'Elegant cakes structures for wedding, commitment or anniversary.'
      },
      {
        image: assets.CupCake,
        title: 'Cupcakes',
        description: 'Our sumptuous cakes are available in Chocolate, Vanilla and Red Velvet flavors. Customized design orders are accepted as well. Online Menu.'
      },
      {
        image: assets.sample,
        title: 'Off the Shelf',
        description: 'A wide variety of delicious cakes, garnished sweet treats - from the all-time favorites and trendy new comers, prepared with the finest ingredients. Online Menu.'
      }
    ];

    return (
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cakeData.map((cake, index) => (
            <CakeCard key={index} image={cake.image} title={cake.title} description={cake.description} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-100">
      <Header />
      <MainContent />
    </div>
  );
};

export default Cakes;