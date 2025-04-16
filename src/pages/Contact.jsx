import React from 'react'
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t text-gray-200'>
        <h2>Contact Us</h2>

      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.stageCafe} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-200'>Our Store</p>
          <p className='text-gray-200'>No.234/A Word place, <br /> Colombo 10, Sri Lanka</p>
          <p className='text-gray-200'>Tel: 0112 158 7898 <br /> Email: admin@gmail.com </p>
          <p className='font-semibold text-xl text-gray-200'>Careers at Stage Cafe</p>
          <p className='text-gray-200'>Learn more about our teams and job openings.</p>
          <button className='border border-white px-8 py-4 text-sm hover:bg-secondary text-white hover:text-white transition-all duration-500'>Explore Jobs</button>
          

        </div>

      </div>
      {/*Add Customer Requirement*/}
    </div>
  )
}

export default Contact