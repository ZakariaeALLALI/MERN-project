import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ContactedUS() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);  // Add loading state
  const [error, setError] = useState(null);  // Add error state

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/contacts');
        setContacts(response.data);  // Store fetched contacts in state
      } catch (error) {
        console.error('Error fetching contacts:', error);
        setError('Failed to fetch contacts');  // Set error message
      } finally {
        setLoading(false);  // Stop loading
      }
    };

    fetchContacts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Show loading message
  }

  if (error) {
    return <div>{error}</div>;  // Show error message
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-6">Contact List</h2>
      <div className="flex flex-col space-y-4">
        {/* Map through contacts and display each one */}
        {contacts.length === 0 ? (
          <p>No contacts available.</p>
        ) : (
          contacts.map((contact) => (
            <div key={contact._id} className="p-4 border rounded-lg shadow-lg bg-white">
              <h3 className="text-xl font-semibold">{contact.name}</h3>
              <p className="text-gray-600">{contact.email}</p>
              <p className="text-gray-800">{contact.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ContactedUS;
