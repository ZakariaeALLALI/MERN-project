import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'; // Import signOut
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate('/login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      navigate('/login'); // Redirect to login after logging out
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null; // User is redirected to login if not authenticated
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <Navbar />
      
      {/* Profile Content */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mb-8 flex-grow">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome, {user.displayName || 'User'}!</h1>
          <div className="mt-4">
            <p className="text-gray-700"><strong>Email:</strong> {user.email}</p>
          </div>

          {/* Log Out Button */}
          <div className="mt-4">
            <button 
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
            >
              Log Out
            </button>
          </div>

          <h2 className="text-xl font-semibold mt-6 text-gray-800">Your Information</h2>
          <p className="mt-2 text-gray-600">This is where you can see your profile data.</p>
        </div>
      </div>

      {/* Footer */}
      <Footer className="mt-auto" />
    </div>
  );
};

export default UserProfile;
