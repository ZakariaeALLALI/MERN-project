import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';

function Store() {
  return (
    <div className='font-news-reader flex flex-col items-center justify-center container mx-auto md:px-20 lg:px-32 w-full overflow-hidden' id='Boutiques'>
        <h1 className='text-4xl sm:text-4xl font-bold mb-2'> <Link to="/BoutiquesP" smooth className="hover:underline">
        Our Boutiques
          </Link></h1>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 py-5">
            <img src={assets.store} alt="store" className="w-5/12 sm:w-3/5 md:w-2/3 max-w-full" />
        </div>
        <p className="text-balance mb-8 max-w-4xl text-center text-gray-500 leading-relaxed px-4 sm:px-8">
        Our boutiques await you to discover iconic products, special services and delicious touches for your gifts, all in a festive atmosphere.        </p>
    </div>
  )
}

export default Store
