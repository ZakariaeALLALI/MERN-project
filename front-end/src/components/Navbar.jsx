import React, { useState } from 'react'; 
import { FaPhoneAlt } from 'react-icons/fa';
import { CiMenuBurger } from 'react-icons/ci';
import { CgProfile } from 'react-icons/cg';
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to control the visibility of the menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="font-news-reader absolute top-0 left-0 w-full z-10 bg-black shadow-md">
  <div className="container mx-auto flex items-center py-4 px-6 md:px-20 lg:px-32 text-white">
    {/* Left Section: Contact */}
    <div className="flex items-center mr-6"> {/* Added margin-right to give space */}
      <Link
            to="/ContactUs"
            className="flex items-center hover:text-gray-300 transition px-2 text-inherit hover:underline"
            aria-label="Profile"
          ><FaPhoneAlt className="mr-2" /> Contact Us
      </Link>
    </div>

    {/* Center Section: LE PLAISIR Text */}
    <div className="text-2xl font-bold text-center flex-grow">
      <Link to="/" className="text-inherit hover:underline">
        LE PLAISIR
      </Link>
    </div>

    {/* Right Section: Menu */}
    <div className="flex items-center space-x-6 ml-6"> {/* Added margin-left and space between items */}
      {/* Burger Menu Icon (Visible only on small screens) */}
      <CiMenuBurger
        className="text-2xl text-white cursor-pointer md:hidden"
        onClick={toggleMenu}  // Toggle the menu when clicked
      />

      {/* Menu Items */}
      <ul className={`md:flex ${menuOpen ? 'block' : 'hidden'} md:block flex-col md:flex-row items-center space-x-4 md:space-x-8`}> {/* Adjust space between items */}
        <li>
          <Link to="/AboutP" className="text-inherit hover:underline">
            About LE PLAISIR
          </Link>
        </li>
        <li>
          <Link to="/BoutiquesP" className="text-inherit hover:underline">
            Boutiques
          </Link>
        </li>
      </ul>

      {/* Profile Icon (Part of the Menu Items) */}
        <Link
            to="/Login"
            className="flex items-center hover:text-gray-300 transition px-2 text-inherit hover:underline"
            aria-label="Profile"
          >
          <CgProfile className="text-lg" />
        </Link>

    </div>
  </div>

  {/* Mobile Menu */}
  <div className={`fixed w-full top-0 bottom-0 left-0 bg-black bg-opacity-80 transition-all ${menuOpen ? 'block' : 'hidden'}`}>
    <div className="flex justify-end p-4">
      {/* Close Button */}
      <IoClose 
        className="text-2xl text-white cursor-pointer" 
        onClick={toggleMenu} // Close the menu
      />
    </div>
    <ul className="flex flex-col items-center gap-4 mt-5 px-5 text-lg font-news-reader">
      <li>
        <Link to="/AboutP" className="px-4 py-2 rounded-full inline-block text-white">About LE PLAISIR</Link>
      </li>
      <li>
        <Link to="/BoutiquesP" className="px-4 py-2 rounded-full inline-block text-white">Our Boutiques</Link>
      </li>
    </ul>
  </div>
</div>

  );
};

export default Navbar;
