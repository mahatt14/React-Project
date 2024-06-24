import React, { useState } from 'react';
import { data } from './data';

const Electronic = () => {
  //   console.log(data);
  const [foods, setFoods] = useState(data);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center '>
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setFoods(data)}
              className='border-solid border-orange-500 border-2 hover:bg-orange-500 hover:text-white text-orange-500 px-4 rounded-full tracking-widest '
            >
              All
            </button>
            <button
              onClick={() => filterType('Camera')}
              className='border-solid border-orange-500 border-2 hover:bg-orange-500 hover:text-white text-orange-500 px-4 rounded-full tracking-widest '
            >
              Cameras
            </button>
            <button
              onClick={() => filterType('mobile')}
              className='border-solid border-orange-500 border-2 hover:bg-orange-500 hover:text-white text-orange-500 px-4 rounded-full tracking-widest'
            >
              Mobiles
            </button>
            <button
              onClick={() => filterType('Computer')}
              className='border-solid border-orange-500 border-2 hover:bg-orange-500 hover:text-white text-orange-500 px-4 rounded-full tracking-widest'
            >
              Computers
            </button>
            <button
              onClick={() => filterType('Smart Watch')}
              className='border-solid border-orange-500 border-2 hover:bg-orange-500 hover:text-white text-orange-500 px-4 rounded-full '
            >
              Smart Watches
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice('100$')}
              className='border-solid border-orange-500 border-2 hover:bg-orange-500 hover:text-white text-orange-500 px-4 rounded-full tracking-widest '
            >
              $100
            </button>
            <button
              onClick={() => filterPrice('200$')}
              className='border-solid border-orange-500 border-2 hover:bg-orange-500 hover:text-white text-orange-500 px-4 rounded-full tracking-widest'
            >
              $200
            </button>
            <button
              onClick={() => filterPrice('300$')}
              className='border-solid border-orange-500 border-2 hover:bg-orange-500 hover:text-white text-orange-500 px-4 rounded-full tracking-widest'
            >
              $300
            </button>
            <button
              onClick={() => filterPrice('400$')}
              className='border-solid border-orange-500 border-2 hover:bg-orange-500 hover:text-white text-orange-500 px-4 rounded-full tracking-widest'
            >
              $400
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange-500 text-white p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronic;