import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import PageTopSection from '../components/PageTopSection';

function SignIn() {
  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const signUpUser = async (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = data;

    // Basic validation for empty fields
    if (!email || !password || !confirmPassword) {
      toast.error('Please fill in all fields!');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success('Account created successfully!');
      navigate('/login');
    } catch (error) {
      const errorMessage = error.message || 'Failed to create account. Please try again.';
      toast.error(errorMessage);
    }
  };

  return (
    <div>
      <PageTopSection />

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick />

      <div
        className="min-h-screen bg-no-repeat bg-center flex flex-col items-center justify-center w-full overflow-hidden"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-col items-center justify-center container mx-auto px-4 py-8">
          <form
            className="w-full max-w-md bg-white shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4"
            onSubmit={signUpUser}
          >
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

            {/* Confirm Password Field */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                value={data.confirmPassword}
                onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
              />
            </div>

            {/* Sign Up Button */}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-green-900 hover:bg-green-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Sign Up
              </button>
            </div>

            {/* Login Link */}
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-green-900 hover:underline">
                  Log In
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

export default SignIn;
