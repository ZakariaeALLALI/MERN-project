import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Store from '../components/Store';
import Footer from '../components/Footer';
import PageTopSection from '../components/PageTopSection';

function Home() {
  return (
    <div>
      <PageTopSection />

      <About />
      <Store />
      <Footer />
    </div>
  );
}

export default Home;
