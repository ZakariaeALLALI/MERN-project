require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');  

// Initialize the Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // For parsing application/json
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// MongoDB connection
mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Failed to connect to MongoDB:', err));

// Product routes
const productRoutes = require('./routes/Product');
app.use('/api/products', productRoutes);

// Contacts routes
const contactRoutes = require('./routes/Contact');
app.use('/api/contacts', contactRoutes);

// Start server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
