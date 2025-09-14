// Example REST API Server for Asif Jalal Bijnori Poetry Website
// This is a demonstration of how the API should work
// You can implement this using Express.js, Fastify, or any Node.js framework

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Import dummy data (you would replace this with your database)
const { 
  dummyCollections, 
  dummyPoems, 
  dummyAbout, 
  dummyGalleryItems, 
  dummyContact 
} = require('./lib/dummy-data');

// Helper function to create API response
const createResponse = (data, message = 'Success', status = 200) => ({
  data,
  message,
  status
});

// Routes

// GET /api/collections - Get all collections
app.get('/api/collections', (req, res) => {
  try {
    const collections = dummyCollections.map(collection => ({
      ...collection,
      poems: dummyPoems.filter(poem => poem.collectionType === collection.type)
    }));
    
    res.json(createResponse(collections));
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', status: 500 });
  }
});

// GET /api/collections/:type - Get collection by type
app.get('/api/collections/:type', (req, res) => {
  try {
    const { type } = req.params;
    const collection = dummyCollections.find(c => c.type === type);
    
    if (!collection) {
      return res.status(404).json({ message: 'Collection not found', status: 404 });
    }
    
    const poems = dummyPoems.filter(poem => poem.collectionType === type);
    const collectionWithPoems = {
      ...collection,
      poems
    };
    
    res.json(createResponse(collectionWithPoems));
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', status: 500 });
  }
});

// GET /api/collections/:type/poems - Get poems by collection type
app.get('/api/collections/:type/poems', (req, res) => {
  try {
    const { type } = req.params;
    const poems = dummyPoems.filter(poem => poem.collectionType === type);
    
    res.json(createResponse(poems));
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', status: 500 });
  }
});

// GET /api/poems/:id - Get poem by ID
app.get('/api/poems/:id', (req, res) => {
  try {
    const { id } = req.params;
    const poem = dummyPoems.find(p => p.id === id);
    
    if (!poem) {
      return res.status(404).json({ message: 'Poem not found', status: 404 });
    }
    
    res.json(createResponse(poem));
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', status: 500 });
  }
});

// GET /api/collections/:type/poems/:slug - Get poem by slug
app.get('/api/collections/:type/poems/:slug', (req, res) => {
  try {
    const { type, slug } = req.params;
    const poem = dummyPoems.find(p => p.collectionType === type && p.slug === slug);
    
    if (!poem) {
      return res.status(404).json({ message: 'Poem not found', status: 404 });
    }
    
    res.json(createResponse(poem));
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', status: 500 });
  }
});

// GET /api/about - Get about information
app.get('/api/about', (req, res) => {
  try {
    res.json(createResponse(dummyAbout));
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', status: 500 });
  }
});

// GET /api/gallery - Get gallery items
app.get('/api/gallery', (req, res) => {
  try {
    res.json(createResponse(dummyGalleryItems));
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', status: 500 });
  }
});

// GET /api/contact - Get contact information
app.get('/api/contact', (req, res) => {
  try {
    res.json(createResponse(dummyContact));
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', status: 500 });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ message: 'API is running', status: 200, timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', status: 500 });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found', status: 404 });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Poetry API Server running on http://localhost:${PORT}`);
  console.log(`📚 Available endpoints:`);
  console.log(`   GET /api/collections`);
  console.log(`   GET /api/collections/:type`);
  console.log(`   GET /api/collections/:type/poems`);
  console.log(`   GET /api/poems/:id`);
  console.log(`   GET /api/collections/:type/poems/:slug`);
  console.log(`   GET /api/about`);
  console.log(`   GET /api/gallery`);
  console.log(`   GET /api/contact`);
  console.log(`   GET /api/health`);
});

module.exports = app;
