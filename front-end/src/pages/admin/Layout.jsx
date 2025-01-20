import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { auth, signOut } from '../../../firebaseConfig';  

function Layout() {
  const handleLogout = () => {
    signOut(auth)  // Sign out from Firebase
      .then(() => {
        // Redirect or show a message after logging out
        window.location.href = '/login';  // Redirect to login page
      })
      .catch((error) => {
        // Handle errors
        console.error("Error signing out: ", error);
      });
  };

  return (
    <div className="font-news-reader flex h-screen bg-black overflow-auto"> {/* Set the background color of the entire page */}
      {/* Sidebar */}
      <div className="w-3/12 bg-black text-white p-4">
        <h2 className="text-2xl font-bold">LE PLAISIR - Admin Dashboard</h2>
        <ul className="mt-6">
          <li className="mb-4 hover:bg-gray-600 p-2 rounded transition duration-200">
            <Link to="productsList" className="hover:text-black">
              Products
            </Link>
          </li>
          <li className="mb-4 hover:bg-gray-600 p-2 rounded transition duration-200">
            <Link to="addproducts" className="hover:text-black">
              Add Product
            </Link>
          </li>
          <li className="mb-4 hover:bg-gray-600 p-2 rounded transition duration-200">
            <Link to="contactedUs" className="hover:text-black">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Log Out Button */}
        <div className="mt-auto">
          <button className="bg-gray-800 text-white w-full py-2 rounded mt-4 hover:bg-red-700 transition duration-200"
            onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="w-9/12 p-6">
        {/* Render content for nested routes */}
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
