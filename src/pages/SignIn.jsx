
import React, { useState } from 'react';
import Footer from '../Components/Footer';

function SingIn() {
  

  return (
    <div >
      <section class="bg-white lg:ml-20 lg:mr-20 mb-24 ">
    <div class="grid grid-cols-1 lg:grid-cols-2 ">
        <div class="relative flex justify-center bg-gray-900 ">
        <h1 className='text-orange-500 flex justify-center items-center text-3xl font-bold'>
          welcome back</h1>   
        </div>

        <div class="flex items-center justify-center  bg-gray-200 rounded ">
            <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl"> Sign In</h2>
                <p class="mt-2 text-base text-gray-600">Sign New account? <a href="/Login" title="" class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Login</a></p>

                <form action="#" method="POST" class="mt-8  h-25 ">
                    <div class="space-y-2">
                        <div>
                            <label for="" class="text-base font-medium text-gray-900"> Name </label>
                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Enter Your Name"
                                    class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label for="" class="text-base font-medium text-gray-900"> Username </label>
                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Enter Username"
                                    class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div>
                        </div>

                        <div>
                            <label for="" class="text-base font-medium text-gray-900"> Email </label>
                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Enter Your Email"
                                    class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div>
                        </div>
                        
                        <div>
                            <label for="" class="text-base font-medium text-gray-900"> Password </label>
                            <div class="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                <input
                                    type="password"                                   
                                    placeholder="Enter Your password"
                                    class="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                />
                            </div>
                        </div>

                        <div>
                           
                        </div>
                    </div>
                </form>

                <button
                                
                                class="inline-flex items-center justify-center  px-4 py-2 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-orange-500 hover:bg-gray-900 "
                            >
                                Log In
                            </button>
                            

                <p class="mt-5 text-lg text-gray-600 font-semibold ">
                I Have Already Account <a href="/Login" title="" class="text-blue-600 transition-all duration-200 hover:underline hover:text-blue-700">Click</a> 
                    
                </p>
            </div>
        </div>
    </div>
</section>
<Footer/>
    </div>
  );
}

export default SingIn;

