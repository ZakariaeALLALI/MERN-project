import React, { useState } from 'react';

function ContactedUS() {
  // Mock data for contacts
  const [contacts] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      message: "I'm interested in your products."
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      message: "When will you have new stock?"
    }
  ]);

  return (
    <div className="bg-black py-6 px-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Contact List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contacts.map((contact) => (
          <div key={contact.id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold">{contact.name}</h3>
            <p className="text-gray-600">{contact.email}</p>
            <p className="text-gray-800 mt-2">{contact.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactedUS;
