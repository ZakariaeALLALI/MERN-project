const express = require('express');
const Contact = require('../model/Contact');
const router = express.Router();

// Get all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new contact
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  const newContact = new Contact({ name, email, message });

  try {
    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
