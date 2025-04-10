import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  return (
    <Link className='text-white cursor-pointer' to=''>
      <div className='bg-[#1f1f1f] p-4 rounded-xl hover:shadow-xl transition min-h-[270px] flex flex-col justify-between'>
        <div className='overflow-hidden rounded-md'>
          <img className='hover:scale-110 transition ease-in-out duration-300 w-full' src={image} alt={name} />
        </div>
        <div className='pt-3'>
          <p className='pb-1 text-base font-semibold text-white'>{name}</p>
          <p className='text-base font-bold text-orange-400'>LKR {price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;


