
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// Sign up route
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        success: false,
        message: 'Un utilisateur avec cet email existe déjà'
      });
    }
    
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Create the user
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });
    
    // Return success response with user and token
    res.status(201).json({
      success: true,
      message: 'Utilisateur créé avec succès',
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      token: generateToken(user._id)
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Une erreur est survenue lors de l\'inscription'
    });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Email ou mot de passe incorrect'
      });
    }
    
    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Email ou mot de passe incorrect'
      });
    }
    
    // Return success response with user and token
    res.status(200).json({
      success: true,
      message: 'Connexion réussie',
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      token: generateToken(user._id)
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Une erreur est survenue lors de la connexion'
    });
  }
});

// Get user profile route - requires authentication
router.get('/profile', async (req, res) => {
  try {
    // In production, this would verify the JWT token
    // and retrieve the user based on the token's user ID
    
    // For demo purposes, we'll return a mock response
    res.status(200).json({
      success: true,
      user: {
        name: 'Utilisateur Demo',
        email: 'demo@example.com',
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Une erreur est survenue'
    });
  }
});

module.exports = router;
