import React from 'react';

function Header({ title, subtitle }) {
  return (
    <div className="text-center mb-20">
      <div className="inline-block border-b-2 border-white pb-4 mb-6">
        <h1 className="text-6xl font-serif text-white tracking-wider">{title}</h1>
      </div>
      <p className="text-gray-400 text-lg tracking-wide uppercase">{subtitle}</p>
    </div>
  );
}

export default Header;
