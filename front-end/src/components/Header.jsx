import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div>
      {/* Header Section */}
      <div
        className="min-h-screen bg-no-repeat bg-center flex flex-col items-center justify-center w-full overflow-hidden"
        style={{
          backgroundImage: "url('/lana.gif')",
          backgroundSize: 'cover', // Adjust image scaling
          backgroundPosition: 'center',
        }}
        id="Header"
      >
        {/* Stacked Header Text */}
        <div className="text-center">
          <h1 className="font-news-reader text-white text-6xl font-bold">
            Welcome to LE PLAISIR
          </h1>
          <p className="font-news-reader text-white mt-4 px-3">
           Enjoy the boujee experience of a lifetime with LE PLAISIR
          </p>
        </div>
      </div>

      {/* Navbar Section */}
      <div className="bg-black shadow-md">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
