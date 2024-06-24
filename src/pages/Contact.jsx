import React from 'react';
import Footer from '../Components/Footer'
import ContactUs from '../Components/ContactUs'


const ProductCard = ({ title, content, iconUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full md:w-1/3 mx-4">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center">
              <img src={iconUrl} alt={title} className="w-6 h-6 mr-2" />
              <h3 className="text-2xl font-lg font-bold text-orange-500">{title}</h3>
            </div>
            
            <div className="mt-2">
              <p className="text-lg font-semibold text-black">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

const ProductList = () => {
  return (
    <div>
     
    <div className="flex flex-col-3 justify-center mb-24">
      <ProductCard
        title="Phone"
        content="+252-61 6 144494"
        iconUrl="https://cdn-icons-png.flaticon.com/128/126/126341.png"
        
      />
      
      
      <ProductCard
        title="Address"
        content="Benadir Road, mogdisho, som2334"
        iconUrl="https://cdn-icons-png.flaticon.com/128/542/542689.png"
      />
      <ProductCard
        title="Email"
        content="Electronic-Shop@email.com"
        iconUrl="https://cdn-icons-png.flaticon.com/128/9077/9077975.png"
      />
    </div>
    <div className='justify-center gap-8 mb-24 lg:ml-20 lg:mr-20  '>
    <div className="mb-4  ">
    <h1 className='text-5xl font-bold flex justify-center text-orange-500 mb-5 '> Contact Us</h1>

            <label htmlFor="name" className="block text-gray-700 font-medium mb-2 ">
             
            </label >
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 border border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
              required
           />
          </div>

    <div className="mb-4 ">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
             
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="Phone" className="block text-gray-700 font-medium mb-2">
             
            </label>
            <input
              type="text"
              id="Phone"
              name="Phone"
              className="w-full px-4 py-3 border border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your Phone"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-3 border border-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
          >
            Send Message
          </button>
          </div>
          <Footer/>
    </div>
  );
};

export default ProductList;