import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Boutique from './pages/Boutique';
import Login from './pages/Login';
import Register from './pages/SignIn';
import ContactUs from './pages/ContactUs';
import ProductList from './pages/admin/ProductList';
import ContactedUS from './pages/admin/ContactedUS';
import AddProducts from './pages/admin/AddProducts';
import Layout from './pages/admin/Layout'; 
import UserProfile from './pages/user/UserProfile';

function App() {
  return (
    <Router>
      <Routes>
        {/* Non-admin routes */}
        <Route path="/" element={<Home />} />
        <Route path="/AboutP" element={<About />} />
        <Route path="/BoutiquesP" element={<Boutique />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contactus" element={<ContactUs />} />

        <Route path="/profile" element={<UserProfile />} />


        {/* Admin routes inside the Layout */}
          <Route path='/Layout' element={<Layout />}>
          <Route path="productsList" element={<ProductList />} />
          <Route path="addproducts" element={<AddProducts />} />
          <Route path="contactedUs" element={<ContactedUS />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
