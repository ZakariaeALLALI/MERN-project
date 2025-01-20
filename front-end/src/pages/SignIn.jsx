import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

function Register() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    // Basic validation for empty fields
    if (!email || !password) {
      toast.error('Please fill in all fields!');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('Account created successfully!');
      
      // Delay the navigation to ensure the toast shows up
      setTimeout(() => {
        navigate('/login'); // Redirect to login page after success
      }, 2000); // 2-second delay for the toast to be visible
    } catch (error) {
      const errorMessage = error.message || 'Failed to create account. Please try again.';
      toast.error(errorMessage);
    }
  };

  const handleGoogleRegister = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      toast.success(`Welcome, ${user.displayName || 'User'}!`);
      navigate('/Cart'); // Redirect to a different page after Google registration
    } catch (error) {
      const errorMessage = error.message || 'Failed to create account with Google. Please try again.';
      toast.error(errorMessage);
    }
  };

  return (
    <div>
      <Navbar />
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick />
      <div
        className="min-h-screen bg-no-repeat bg-center flex flex-col items-center justify-center w-full overflow-hidden"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="font-news-reader flex flex-col items-center justify-center container mx-auto p-8 md:px-20 lg:px-32 w-full overflow-hidden mt-16">
          <form
            className="w-full max-w-md bg-white shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4"
            onSubmit={handleRegister}
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register</h2>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>

            {/* Register Button */}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-green-900 hover:bg-green-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Register
              </button>
            </div>

            {/* Google Register Button */}
            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={handleGoogleRegister}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Register with Google
              </button>
            </div>

            {/* Login Link */}
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-green-900 hover:underline">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
