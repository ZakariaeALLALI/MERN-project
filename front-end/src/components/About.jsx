import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';


function About() {
  return (
    <div className='font-news-reader flex flex-col items-center justify-center container mx-auto p-10 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
         <h1 className="text-2xl sm:text-4xl font-bold mb-2" id="AboutP">
          <Link to="/AboutP" smooth className="hover:underline">
            About <span className="underline underline-offset-4 decoration-1 font-light">LE PLAISIR</span>
          </Link>
        </h1>
        <p className="text-balance mb-8 max-w-4xl text-center text-gray-500 leading-relaxed px-4 sm:px-8">
            This project is a luxurious and elegant website design crafted as a personal learning experience.
            Inspired by high-end aesthetics and sophisticated user interfaces, it blends sleek visuals with modern functionality.
            The site serves as a creative playground to refine my skills in responsive design, animations, and advanced web development techniques while exploring a "boujee" vibe.
            It’s a testament to learning through experimentation and turning a vision into reality, all while having fun with the process :D!
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <img src={assets.neck} alt="neck" className="w-full sm:w-2/5 md:w-1/4 max-w-xs" />
            <img src={assets.bag} alt="bag" className="w-full sm:w-2/5 md:w-1/4 max-w-xs" />
            <img src={assets.dia} alt="dia" className="w-full sm:w-2/5 md:w-1/4 max-w-xs" />
        </div>

        <div className='text-balance mt-5 mb-5 max-w-4xl text-center text-gray-500 leading-relaxed px-4 sm:px-8 mx-auto'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores illo odio amet nobis, alias provident magni dicta a quos, rem in nisi mollitia ut dolorum voluptatum. Accusamus eligendi reiciendis officia.
        </p>
      </div>

      <div className='flex flex-wrap justify-center gap-6 md:gap-10'>
        <img src={assets.e} alt="e pic" className='w-full sm:w-3/4 md:w-2/5 lg:w-3/5 max-w-full px-4 mx-auto my-6' />
      </div>
    </div>
  )
}

export default About
