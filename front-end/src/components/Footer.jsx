import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-black w-full overflow-hidden ' id='Footer'> 
        <div className='container mx-auto flex flex-row md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="#Header" className='hover: text-white'>Home</a>
                    <a href="#About" className='hover: text-white'>About Us</a>
                    <a href="#Contact" className='hover: text-white'>Contacts Us</a>
                    <a href="#" className='hover: text-white'>Privacy Policy</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>LE PLAISIR History</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="#" className='hover: text-white'>Our Beliefs </a>
                    <a href="#" className='hover: text-white'>Be a part of the community</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Follow Us</h3>
                <ul className='flex flex-row gap-2 text-gray-400'>
                    <a href="#" className='hover: text-white'> <FaInstagram />                    </a>
                    <a href="#" className='hover: text-white'><FaXTwitter />                    </a>
                </ul>
            </div>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Where Are We?</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <li className='hover: text-white'> Morocco</li>
                    <li className='hover: text-white'> Canada</li>
                    <li className='hover: text-white'> France</li>
                    <li className='hover: text-white'> United Kingdom</li>
                </ul>
            </div>
        </div>

        <div className='font-news-reader text-9xl text-center text-white mt-3'>
    LE PLAISIR
</div>

    </div>
  )
}

export default Footer