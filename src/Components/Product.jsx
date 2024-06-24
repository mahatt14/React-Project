import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import OrderForm from '../pages/OrderForm';
const Product = () => {
  
  const products = [
    {
      id: 1,
      imageUrl: 'https://cdn.pixabay.com/photo/2013/01/15/16/23/keyboard-75019_640.jpg',
      title: 'Keyboard',
      description: 'This is the description for Product 1.',
      price: 29.99,
    },
    {
      id: 2,
      imageUrl: 'https://cdn.pixabay.com/photo/2019/12/16/17/29/hard-drive-4699797_640.jpg',
      title: 'Hard Drive',
      description: 'This is the description for Product 2.',
      price: 39.99,
    },
    {
      id: 3,
      imageUrl: 'https://cdn.pixabay.com/photo/2015/10/20/18/46/music-998228_640.jpg',
      title: 'HeadPhone',
      description: 'This is the description for Product 3.',
      price: 49.99,
    },
    {
      id: 3,
      imageUrl: 'https://cdn.pixabay.com/photo/2014/01/09/04/19/camera-lens-240966_640.jpg',
      title: 'Camera Lens',
      description: 'This is the description for Product 3.',
      price: 49.99,
    },
    {
      id: 3,
      imageUrl: 'https://cdn.pixabay.com/photo/2016/09/15/21/44/old-phone-1672766_640.jpg',
      title: 'Old Phone',
      description: 'This is the description for Product 3.',
      price: 49.99,
    },
    {
      id: 3,
      imageUrl: 'https://cdn.pixabay.com/photo/2020/01/03/08/18/speaker-4737580_640.jpg',
      title: 'Speaker',
      description: 'This is the description for Product 3.',
      price: 49.99,
    },
    {
      id: 3,
      imageUrl: 'https://cdn.pixabay.com/photo/2017/03/10/17/06/swatch-watch-2133289_640.jpg',
      title: 'Smart watch',
      description: 'This is the description for Product 3.',
      price: 49.99,
    },
    {
      id: 3,
      imageUrl: 'https://cdn.pixabay.com/photo/2016/11/21/17/21/eyeglasses-1846595_640.jpg',
      title: 'Glass',
      description: 'This is the description for Product 3.',
      price: 49.99,
    },
   
  ];

  return (

    <div className="bg-white py-12 ">

<section className='h-full max-h-[640px] mb-8 xl:mb-10 '>
        <div className='flex flex-col lg:flex-row '>
          <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center 
          lg:items-start text-center lg:text-left 
          justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-bold leading-none mb-6'>
            
                   Buy What You Need
                    And GET <span className='text-orange-500 '> 50% </span>Off 
          </h1>
          <p className='mx-w-[480px] mb-4 font-semibold'>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Commodi hic ipsam, id odio doloremque numquam 
             in quisquam officia et veniam. 
             Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Omnis distinctio iusto debitis autem natus alias illum animi 
              nemo tempore voluptatibus!</p>
              <a
                  href="/OrderForm"
                  className="bg-orange-500 hover:bg-gray-900 text-white px-20 py-3 rounded-md mt-4 "
                >
                  Buy Now
                </a>
                
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src="https://i.pinimg.com/236x/39/f0/81/39f0817f48364c09f8eade07d7c6e4f7.jpg" alt="" />
          <img src="https://i.pinimg.com/236x/40/53/33/40533331dec25fd19e82fc9e9e97c7e4.jpg" alt="" />
          <img src="https://i.pinimg.com/236x/fa/89/90/fa8990592a9572caa7521c5dce78c112.jpg" alt="" />

          </div>
        </div>
        </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <h1 className='text-5xl font-bold flex justify-center text-orange-500 mb-24 border-b-4'> Our Products</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden "
            >
              <div className="relative">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-64 object-cover transform hover:scale-105 transition duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                <div className="absolute bottom-4 left-4 text-white font-bold text-xl">
                  {product.title}
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-800 font-bold text-lg">
                    ${product.price}
                  </p>
                  <a
                  href="/OrderForm"
                  className="bg-orange-500 hover:bg-gray-900 text-white font-bold  px-4 py-1  rounded "
                >
                  Buy Now
                </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;