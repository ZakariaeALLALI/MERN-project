import React from 'react';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';

function PageTopSection() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      {/* Section with GIF background - only on home page */}
      {isHomePage && (
        <div
          className="w-full h-96 bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url('/lana.gif')",
          }}
        >
          {/* You can add content here if needed, but keeping it empty for just the background */}
        </div>
      )}
    </div>
  );
}

export default PageTopSection; 