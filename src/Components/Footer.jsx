import React from 'react'


function Footer() {
  return (
    <div>
        
        <div className='mb-20 flex  items-center 
          lg:items-start text-center lg:text-left 
           font-bold flex-row justify-evenly text-xl '>
      <p >
      <ul>
      <li className='w-7 h-5 mb-3'><a href="#" className="hover:text-gray-400"><i className="facebook-f"><img src="https://cdn-icons-png.freepik.com/256/4555/4555999.png?uid=R73052817&ga=GA1.1.1962600705.1715278960&semt=ais_hybrid" alt="" /></i></a></li>
      </ul>
      Free Shipping
       <span className='grid font-semibold' >
       On Order Over $1000
      </span>
      </p>

      <p >
      <ul>
      <li className='w-7 h-5 mb-3'><a href="#" className="hover:text-gray-400"><i className="facebook-f"><img src="https://cdn-icons-png.freepik.com/256/9685/9685021.png?uid=R73052817&ga=GA1.1.1962600705.1715278960&semt=ais_hybrid" alt="" /></i></a></li>
      </ul>
      Free Return
       <span className='grid font-semibold ' >
       Within 30 days
      </span>
      </p>

      <p >
      <ul>
      <li className='w-7 h-5 mb-3'><a href="#" className="hover:text-gray-400"><i className="facebook-f"><img src="https://cdn-icons-png.freepik.com/256/3128/3128841.png?uid=R73052817&ga=GA1.1.1962600705.1715278960&semt=ais_hybrid" alt="" /></i></a></li>
      </ul>
      Fast Delivery
       <span className='grid font-semibold ' >
       World Wide
      </span>
      </p>

      <p >
      <ul>
      <li className='w-7 h-5 mb-3'><a href="#" className="hover:text-gray-400"><i className="facebook-f"><img src="https://cdn-icons-png.freepik.com/256/6137/6137813.png?uid=R73052817&ga=GA1.1.1962600705.1715278960&semt=ais_hybrid" alt="" /></i></a></li>
      </ul>
      Big Choice
       <span className='grid font-semibold ' >
       Of Products
      </span>  
      </p>
      </div>
      
      <footer className="bg-gray-900 text-white py-10 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* User Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-orange-500">UseFul Links</h3>
          <ul>
            <li><a href="/" className="hover:text-orange-500">Home</a></li>
            <li><a href="/Product" className="hover:text-orange-500">Product</a></li>
            <li><a href="/About" className="hover:text-orange-500">About</a></li>
            <li><a href="/Contact" className="hover:text-orange-500">Contact</a></li>
            <li><a href="/Login" className="hover:text-orange-500">LogIn</a></li>
            <li><a href="/SignIn" className="hover:text-orange-500">SignIn</a></li>
            <li><a href="/OrderForm" className="hover:text-orange-500">Order</a></li>

          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-orange-500">Our Products</h3>
          <ul>
            <li><a href="OrderForm" className="hover:text-orange-500 ">laptops</a></li>
            <li><a href="OrderForm" className="hover:text-orange-500">Fridges</a></li>
            <li><a href="OrderForm" className="hover:text-orange-500"> Smart Mobiles</a></li>
            <li><a href="OrderForm" className="hover:text-orange-500">Smart Tv's</a></li>
            <li><a href="OrderForm" className="hover:text-orange-500">Gaming Laptops</a></li>
            <li><a href="OrderForm" className="hover:text-orange-500">PS 5</a></li>
            

          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-orange-500">Contacts</h3>
          <ul>
            <li>Email: info@ElectronicShop.com</li>
            <li>Phone: +252 (61) 6-144494</li>
            <li>Address: Digfer Banadir Street, Mogadisho Somalia</li>
          </ul>
        </div>
        

        {/* Social Media Networks */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-orange-500 ">Social Media</h3>
          <h3 className='mb-4'>You Can Follow Here .</h3>
          <ul className="flex space-x-4">
            <li className='w-7 h-5  '><a href="#" ><i className="facebook-f"><img  src="https://cdn-icons-png.freepik.com/256/5968/5968764.png?uid=R73052817&ga=GA1.2.1962600705.1715278960&semt=ais_hybrid" alt=""  /></i></a></li>
            <li className='w-7 h-5'><a href="#" ><i className="twitter"><img src="https://cdn-icons-png.freepik.com/256/3670/3670151.png?uid=R73052817&ga=GA1.2.1962600705.1715278960&semt=ais_hybrid" alt="" /></i></a></li>
            <li className='w-7 h-5'><a href="#" ><i className="instagram"><img src="https://cdn-icons-png.freepik.com/256/1384/1384063.png?uid=R73052817&ga=GA1.2.1962600705.1715278960&semt=ais_hybrid" alt="" /></i></a></li>
            <li className='w-7 h-5'><a href="#" ><i className="fab fa-instagram"> <img src="https://cdn-icons-png.freepik.com/256/9068/9068642.png?uid=R73052817&ga=GA1.2.1962600705.1715278960&semt=ais_hybrid" alt="" /></i></a></li>
          </ul>
        </div>

          {/* Contacts */}
          <div>
          <h3 className="text-lg font-bold mb-4 text-orange-500">Devlopers</h3>
          <ul>
            <li> Mahad Abdi Hussein</li>
            <li> Soleiman Ali Abshir</li>
            <li> Abdalla Abd Hashi</li>
            <li> Muno Bashir Sacid</li>
            <li> Abdifatah Mahad Ali</li>

          </ul>
        </div>

      </div>
     
      <div className="text-center mt-8 text-gray-400 ">
        &copy; Electronic Shop. All rights reserved.
      </div>
    </footer>
       
    </div>
  )
}

export default Footer