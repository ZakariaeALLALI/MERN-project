import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ring from '../assets/ring.png';
import neck from '../assets/neck.jpg';
import watch from '../assets/watch.jpg';
import bag from '../assets/bag.jpg';
import zen from '../assets/zen.jpg';
import dia from '../assets/dia.jpg';
import PageTopSection from '../components/PageTopSection';

function Boutique() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  
  // Mock data for products with actual images
  const [products] = useState([
    {
      id: 1,
      title: "Elegant Ring",
      description: "Beautiful gold ring with diamond",
      price: 299.99,
      category: "Jewelry",
      type: "Rings",
      stockQuantity: 5,
      availability: true,
      image: ring
    },
    {
      id: 2,
      title: "Diamond Necklace",
      description: "Stunning diamond necklace for special occasions",
      price: 499.99,
      category: "Jewelry",
      type: "Necklaces",
      stockQuantity: 3,
      availability: true,
      image: neck
    },
    {
      id: 3,
      title: "Luxury Watch",
      description: "Premium watch with leather strap",
      price: 799.99,
      category: "Accessories",
      type: "Watches",
      stockQuantity: 2,
      availability: true,
      image: watch
    },
    {
      id: 4,
      title: "Designer Bag",
      description: "Elegant leather bag with gold accents",
      price: 399.99,
      category: "Accessories",
      type: "Bags",
      stockQuantity: 4,
      availability: true,
      image: bag
    },
    {
      id: 5,
      title: "Zen Collection",
      description: "Minimalist jewelry set",
      price: 199.99,
      category: "Jewelry",
      type: "Sets",
      stockQuantity: 6,
      availability: true,
      image: zen
    },
    {
      id: 6,
      title: "Diamond Set",
      description: "Complete diamond jewelry set",
      price: 899.99,
      category: "Jewelry",
      type: "Sets",
      stockQuantity: 2,
      availability: true,
      image: dia
    }
  ]);

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory ? product.category === selectedCategory : true;
    const typeMatch = selectedType ? product.type === selectedType : true;
    return categoryMatch && typeMatch;
  });

  const addToCart = (product) => {
    // Your add to cart logic goes here
  };

  return (
    <div className="bg-black min-h-screen">
      <PageTopSection />
      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="mb-16 flex justify-center space-x-6">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-transparent text-white border border-gray-600 rounded-none px-8 py-3 focus:outline-none focus:border-white text-sm tracking-wide"
          >
            <option value="" className="bg-black">All Categories</option>
            <option value="Jewelry" className="bg-black">Jewelry</option>
            <option value="Accessories" className="bg-black">Accessories</option>
          </select>
          
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-transparent text-white border border-gray-600 rounded-none px-8 py-3 focus:outline-none focus:border-white text-sm tracking-wide"
          >
            <option value="" className="bg-black">All Types</option>
            <option value="Rings" className="bg-black">Rings</option>
            <option value="Necklaces" className="bg-black">Necklaces</option>
            <option value="Watches" className="bg-black">Watches</option>
            <option value="Bags" className="bg-black">Bags</option>
            <option value="Sets" className="bg-black">Sets</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group relative bg-black border border-gray-800 hover:border-white transition-all duration-300">
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-serif text-white mb-2">{product.title}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-white text-xl font-serif">${product.price}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-transparent text-white border border-white px-6 py-2 hover:bg-white hover:text-black transition-all duration-300"
                    disabled={!product.availability}
                  >
                    {product.availability ? 'Add to Cart' : 'Out of Stock'}
                  </button>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Boutique;
