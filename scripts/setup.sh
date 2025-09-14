#!/bin/bash

# Setup script for Asif Jalal Bijnori website

echo "🎭 Setting up Asif Jalal Bijnori website..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create public directory if it doesn't exist
mkdir -p public

echo "✅ Setup complete!"
echo ""
echo "🚀 To start the development server, run:"
echo "   npm run dev"
echo ""
echo "🌐 Then open http://localhost:3000 in your browser"
echo ""
echo "📝 To build for production, run:"
echo "   npm run build"
