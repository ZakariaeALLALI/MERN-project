import React from 'react'
import Navbar from '../components/Navbar'
import { assets } from '../assets/assets'
import Footer from '../components/Footer'

function About() {
  return (
    <div>
      <Navbar />
      <div className='font-news-reader flex flex-col items-center justify-center container mx-auto p-8 md:px-20 lg:px-32 w-full overflow-hidden mt-16'>
        <h1 className="text-2xl sm:text-4xl font-bold text-black">ABOUT LE PLAISIR</h1>
      </div>

      <div className='flex flex-wrap justify-center gap-6 md:gap-10'>
        <img src={assets.gc} alt="gc pic" className='w-full sm:w-3/4 md:w-2/5 lg:w-3/5 max-w-full px-4 mx-auto my-6' />
      </div>

      <div className='text-balance mb-8 max-w-4xl text-center text-gray-500 leading-relaxed px-4 sm:px-8 mx-auto'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores illo odio amet nobis, alias provident magni dicta a quos, rem in nisi mollitia ut dolorum voluptatum. Accusamus eligendi reiciendis officia.
        </p>
      </div>

      <div className='flex flex-wrap justify-center gap-6 md:gap-10'>
        <img src={assets.h} alt="a pic" className='w-full sm:w-3/4 md:w-2/5 lg:w-3/5 max-w-full px-4 mx-auto my-6' />
      </div>

      <div className='text-balance mb-8 max-w-4xl text-center text-gray-500 leading-relaxed px-4 sm:px-8 mx-auto'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores illo odio amet nobis, alias provident magni dicta a quos, rem in nisi mollitia ut dolorum voluptatum. Accusamus eligendi reiciendis officia.
        </p>
      </div>

      <Footer/>
    </div>
  )
}

export default About
