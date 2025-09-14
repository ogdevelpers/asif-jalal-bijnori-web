# Asif Jalal Bijnori - Poet Website

A beautiful, responsive website for the celebrated poet Asif Jalal Bijnori, built with Next.js 14 and pure CSS with flexbox.

## Features

- **Responsive Design**: Optimized for both mobile and desktop devices
- **Modern UI**: Clean, elegant design with earthy tones and traditional aesthetics
- **Interactive Navigation**: Smooth scrolling navigation with mobile-friendly menu
- **Poetry Showcase**: Hero section featuring beautiful poetry verses
- **About Section**: Detailed information about the poet
- **Gallery**: Grid layout for showcasing poetry collections and events
- **Collections System**: Individual routes for different poetry types (Nohey, Quasidey, Manqabat, Soz-o-salam)
- **Detailed Poem Views**: Full poem display with related poems suggestions
- **Social Integration**: Links to social media platforms
- **Contact Information**: Easy access to contact details
- **REST API Integration**: Ready for backend API integration with comprehensive dummy data

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Pure CSS with Flexbox and CSS Grid
- **API**: REST API ready (with fallback dummy data)
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Noto Serif, Tangerine)
- **Language**: TypeScript

## Getting Started

### Prerequisites
- Node.js 18+

### Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure API (Optional)**:
   - Set up your REST API backend following the guide in `REST_API_DOCUMENTATION.md`
   - Create a `.env.local` file with your API configuration:
     ```env
     NEXT_PUBLIC_API_URL=http://localhost:3001/api
     ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

### Without Backend API
The application includes comprehensive dummy data for all collections, so it will work without a backend API. The dummy data includes:
- 4 poetry collections (Nohey, Quasidey, Manqabat, Soz-o-salam)
- 10 sample poems in English
- About section content
- Gallery items
- Contact information

### Running the Example API Server
To test the API integration, you can run the included example API server:

1. **Install API dependencies**:
   ```bash
   cp package-api.json package.json
   npm install
   ```

2. **Start the API server**:
   ```bash
   npm start
   ```

3. **The API will be available at**: [http://localhost:3001/api](http://localhost:3001/api)

4. **Test endpoints**:
   - [http://localhost:3001/api/collections](http://localhost:3001/api/collections)
   - [http://localhost:3001/api/collections/nohey](http://localhost:3001/api/collections/nohey)
   - [http://localhost:3001/api/poems/1](http://localhost:3001/api/poems/1)

## Project Structure

```
├── app/
│   ├── globals.css                    # Global styles and Tailwind imports
│   ├── layout.tsx                     # Root layout component
│   ├── page.tsx                       # Main page component
│   └── collections/
│       └── [type]/
│           ├── page.tsx               # Collection list page
│           └── [id]/
│               └── page.tsx           # Individual poem page
├── components/
│   ├── Header.tsx                     # Navigation header
│   ├── HeroSection.tsx                # Hero section with poetry
│   ├── AboutSection.tsx               # About the poet section
│   ├── GallerySection.tsx             # Gallery grid
│   ├── CollectionList.tsx             # Collection listing component
│   ├── PoemDetail.tsx                 # Detailed poem view component
│   └── Footer.tsx                     # Footer with contact info
├── lib/
│   ├── collections.ts                 # Collections data and utilities
│   ├── api.ts                         # REST API client
│   └── dummy-data.ts                  # Comprehensive dummy data
├── next.config.js                     # Next.js configuration
├── REST_API_DOCUMENTATION.md          # API documentation
├── example-api-server.js              # Example Express.js API server
├── package-api.json                   # API server dependencies
└── package.json                       # Dependencies and scripts
```

## Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- `paper`: Light cream background
- `brown`: Primary brown color
- `light-brown`: Lighter brown accent
- `dark-brown`: Darker brown for hover states
- `cream`: Cream background for sections

### Fonts
Two main font families are used:
- **Tangerine**: For decorative headings and signatures (weight: 700)
- **Noto Serif**: For poetry verses, body text, and navigation (weights: 400, 700)

### Adding Real Images
To add real images:
1. Place images in the `public/` directory
2. Update the placeholder divs in components with `<Image>` components from Next.js
3. Import the Image component: `import Image from 'next/image'`

## Deployment

The website can be deployed to any platform that supports Next.js:

- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect your GitHub repository
- **AWS Amplify**: Connect your repository
- **Traditional hosting**: Run `npm run build` and deploy the `out/` folder

## License

This project is created for Asif Jalal Bijnori. All rights reserved.
