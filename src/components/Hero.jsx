import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-primary text-white overflow-hidden border-3 rounded-2xl border-gray-400 mb-10">
      <div className="container mx-auto px-0 sm:px-0 md:px-0 flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left z-10 p-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Your Favourite Food <br /> Delivered Hot & Fresh
          </h1>
          <p className="text-gray-300 text-base sm:text-lg mb-6">
            Healthy switcher chefs do all the prep work, like peeling, chopping & marinating,
            so you can cook fresh food without the hassle.
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => navigate('/onlineMenu')}
              className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-orange-600 transition"
            >
              Online Menu
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center z-10 p-4">
          {/* Curved Background Image */}
          <img
            src={assets.white}
            alt="decorative curve"
            className="absolute top-0 right-0 w-[160%] h-120 -z-10 hidden md:block"
          />
          {/* Food Image */}
          <img
            src={assets.food}
            alt="Delicious food"
            className="w-60 sm:w-72 md:w-full max-w-sm md:max-w-md object-cover rounded-full shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
