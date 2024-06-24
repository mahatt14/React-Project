import React from 'react'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import HeadlineCards from '../Components/HeadlineCards'
import Electronic from '../Components/Electronic'
import ImageSlider from '../Components/ImageSlider'
import ProductCard from '../Components/ProductCard'


function products() {
  return (
    <div>
       <section className='h-full max-h-[640px] mb-8 xl:mb-10 '>
        <div className='flex flex-col lg:flex-row '>
          <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center 
          lg:items-start text-center lg:text-left 
          justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-bold leading-none mb-6'>
            
                   Electronic Gadget
                    Up To <span className='text-orange-500 '> 50% </span>Off 
          </h1>
          <p className='mx-w-[480px] mb-4 font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui molestias iste ipsam fugit quas 
          bcum nobis architecto fuga. Eligendi eius totam mollitia dolorum id, quidem repellendus veniam eaque dignissimos inventore nihil error
           corrupti culpa, itaque iure qui recusandae, consectetur ipsam! Corporis earum quisquam reiciendis blanditiis repudiandae?
            Adipisci nostrum perspiciatis cumque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia quis eveniet consequuntur
             commodi hic iste consectetur labore corrupti repellendus. Voluptas!</p>
             <a
                  href="/OrderForm"
                  className="bg-orange-500 hover:bg-gray-900 text-white px-20 py-3 rounded-md mt-4 "
                >
                  Buy Now
                </a>
                
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end  '>
          <img src="https://i.pinimg.com/236x/ce/ce/60/cece605f90c7d063083ffc6c616071f6.jpg" alt=""  />
          <img src="https://i.pinimg.com/236x/39/1f/6b/391f6b3af33ab938367e305f921de0ef.jpg" alt="" />
          <img src="https://i.pinimg.com/236x/ed/8f/12/ed8f125fcd7bebe66686d498b091e33a.jpg" alt="" />

          </div>
        </div>
        
        </section>
      <Hero/>
      <HeadlineCards/>
      <Electronic/>
      <HeadlineCards/>
      <ProductCard/>
      <ImageSlider/>
      <Footer/>
    </div>
  )
}

export default products