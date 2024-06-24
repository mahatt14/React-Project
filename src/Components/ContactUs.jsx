import React from 'react';

const ProductCard = ({ title, content, iconUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full md:w-1/3 mx-4">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center">
              <img src={iconUrl} alt={title} className="w-6 h-6 mr-2" />
              <h3 className="text-2xl font-lg font-bold text-yellow-500">{title}</h3>
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
    <div className="flex flex-col-3 justify-center">
      <ProductCard
        title="Phone"
        content="+123-456-7890"
        iconUrl="https://cdn-icons-png.flaticon.com/128/126/126341.png"
      />
      <ProductCard
        title="Address"
        content="Benadir Road, mogdisho, som2334"
        iconUrl="https://cdn-icons-png.flaticon.com/128/542/542689.png"
      />
      <ProductCard
        title="Email"
        content="Shop@email.com"
        iconUrl="https://cdn-icons-png.flaticon.com/128/9077/9077975.png"
      />
    </div>
  );
};

export default ProductList;