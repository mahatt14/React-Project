import React from 'react'
import ProductCard from '../Components/ProductCard'
import Product from '../Components/Product'
import Footer from '../Components/Footer'
import ImageSlider from '../Components/ImageSlider'
import HeadlineCards from '../Components/HeadlineCards'

function Home() {
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
          <p className='mx-w-[480px] mb-4 font-semibold'>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Commodi hic ipsam, id odio doloremque numquam 
             in quisquam officia et veniam. 
             Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Omnis distinctio iusto debitis autem natus alias illum animi 
              nemo tempore voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Officiis odio cum id perferendis voluptates, assumenda, velit quo pariatur laudantium fuga,
                maxime hic voluptatum modi odit magnam quibusdam ullam deserunt quasi ut aliquam? Tempore esse 
                eius enim libero necessitatibus id error!</p>
            
                <a
                  href="/OrderForm"
                  className="bg-orange-500 hover:bg-gray-900 text-white px-20 py-3 rounded-md mt-4 "
                >
                  Buy Now
                </a>
                
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src="https://i.pinimg.com/236x/40/61/c8/4061c8841fa8ab02aa484db1cfcb96f0.jpg" alt="" />
          <img src="https://i.pinimg.com/236x/97/53/d0/9753d047372af58ea35a5b105bab2c22.jpg" alt="" />
          </div>
        </div>
        </section>
        <HeadlineCards/>
      <ProductCard/>
      <Product/>
      <ImageSlider/>
      <Footer/>
    </div>
  )
}

export default Home