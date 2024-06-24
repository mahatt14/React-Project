import React, { useState } from 'react';
import Footer from '../Components/Footer';

const OrderForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('City:', city);
    console.log('State:', state);
    console.log('Zip:', zip);
    setName('');
    setEmail('');
    setAddress('');
    setCity('');
    setState('');
    setZip('');
  };

  return (
   <div>
     <div className="flex justify-center items-center h-screen mb-24">
      <form
        className="bg-white p-8 rounded shadow-lg focus:outline-none"
        onSubmit={handleSubmit}
      >
        <h2 className="text-4xl font-bold mb-6 text-orange-500">Order Form</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="border rounded px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="border rounded px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block font-bold mb-2">
            Address:
          </label>
          <input
            type="text"
            id="address"
            className="border rounded px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="flex mb-4">
          <div className="mr-4 w-1/2">
            <label htmlFor="city" className="block font-bold mb-2">
              City:
            </label>
            <input
              type="text"
              id="city"
              className="border rounded px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className="mr-4 w-1/4">
            <label htmlFor="state" className="block font-bold mb-2">
              State:
            </label>
            <input
              type="text"
              id="state"
              className="border rounded px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />
          </div>
          <div className="w-1/4">
            <label htmlFor="zip" className="block font-bold mb-2">
              Zip:
            </label>
            <input
              type="text"
              id="zip"
              className="border rounded px-3 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              required
            />
          </div>
          
        </div>

        <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 mb-2 font-bold">
              Order
            </label>
            <textarea
              id="message"
              name="message"
              rows="1"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your order"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
          >
            Submit
          </button>
      </form>
     
    </div>
    <Footer/>
   </div>
  );
};

export default OrderForm;