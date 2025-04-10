import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div>
<section className="relative bg-primary text-white py-10 sm:py-12 md:py-20 overflow-hidden">

{/* White curved background shape */}
<svg
  className="absolute right-0 top-0 h-full w-full md:w-1/2 z-0 hidden md:block"
  viewBox="0 0 600 600"
  preserveAspectRatio="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M0,0 C150,300 150,300 0,600 L600,600 L600,0 Z"
    fill="#ffffff"
  />
</svg>


<div className="relative container mx-auto px-4 sm:px-6 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
  
  {/* Left Text Section */}
  <div className="w-full md:w-1/2 z-10 text-center md:text-left">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
      Your Favourite Food <br /> Delivered Hot & Fresh
    </h1>
    <p className="text-gray-400 mt-4 text-base sm:text-lg">
      Healthy switcher chefs do all the prep work, like peeling, chopping & marinating, so you can cook fresh food.
    </p>
    <div className="mt-6 flex justify-center md:justify-start">
      <button 
        onClick={() => navigate('/onlineMenu')} 
        className="px-6 py-3 bg-white hover:bg-orange-600 text-black rounded-full transition flex items-center gap-2"
      >
        Online Menu
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>

  {/* Right Image Section */}
  <div className="w-full md:w-1/2 flex justify-center z-10">
    <img
      className="w-60 sm:w-72 md:w-full max-w-sm md:max-w-md object-cover rounded-full"
      src={assets.food}
      alt="food"
    />
  </div>
</div>
</section>
    </div>
  )
}

export default Hero;
