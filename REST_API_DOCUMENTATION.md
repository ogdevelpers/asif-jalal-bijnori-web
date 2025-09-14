# REST API Documentation

This document outlines the REST API structure for the Asif Jalal Bijnori poetry website. The API should be implemented to serve poetry collections, individual poems, and related content.

## Base URL

```
http://localhost:3001/api
```

You can configure this by setting the `NEXT_PUBLIC_API_URL` environment variable.

## Authentication

Currently, no authentication is required. All endpoints are publicly accessible.

## Response Format

All API responses follow this standard format:

```json
{
  "data": <actual_data>,
  "message": "Success message (optional)",
  "status": 200
}
```

Error responses:

```json
{
  "message": "Error message",
  "status": 400
}
```

## Endpoints

### Collections

#### Get All Collections
```http
GET /collections
```

**Response:**
```json
{
  "data": [
    {
      "id": "1",
      "type": "nohey",
      "title": "Elegies (Nohey)",
      "description": "Traditional elegiac poetry expressing grief and mourning...",
      "image": "/images/collections/nohey.jpg",
      "poemCount": 15,
      "createdAt": "2024-01-01T00:00:00Z",
      "updatedAt": "2024-01-01T00:00:00Z"
    }
  ],
  "status": 200
}
```

#### Get Collection by Type
```http
GET /collections/{type}
```

**Parameters:**
- `type` (string): Collection type (nohey, quasidey, manqabat, soz-o-salam)

**Response:**
```json
{
  "data": {
    "id": "1",
    "type": "nohey",
    "title": "Elegies (Nohey)",
    "description": "Traditional elegiac poetry expressing grief and mourning...",
    "image": "/images/collections/nohey.jpg",
    "poemCount": 15,
    "poems": [
      {
        "id": "1",
        "title": "The Evening of Karbala",
        "content": "The evening of Karbala casts shadows on the heart...",
        "slug": "evening-of-karbala",
        "collectionType": "nohey",
        "collectionId": "1",
        "excerpt": "The evening of Karbala casts shadows on the heart",
        "isFeatured": true,
        "createdAt": "2024-01-01T00:00:00Z",
        "updatedAt": "2024-01-01T00:00:00Z"
      }
    ],
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z"
  },
  "status": 200
}
```

### Poems

#### Get Poems by Collection
```http
GET /collections/{type}/poems
```

**Parameters:**
- `type` (string): Collection type

**Response:**
```json
{
  "data": [
    {
      "id": "1",
      "title": "The Evening of Karbala",
      "content": "The evening of Karbala casts shadows on the heart...",
      "slug": "evening-of-karbala",
      "collectionType": "nohey",
      "collectionId": "1",
      "excerpt": "The evening of Karbala casts shadows on the heart",
      "isFeatured": true,
      "createdAt": "2024-01-01T00:00:00Z",
      "updatedAt": "2024-01-01T00:00:00Z"
    }
  ],
  "status": 200
}
```

#### Get Poem by ID
```http
GET /poems/{id}
```

**Parameters:**
- `id` (string): Poem ID

**Response:**
```json
{
  "data": {
    "id": "1",
    "title": "The Evening of Karbala",
    "content": "The evening of Karbala casts shadows on the heart...",
    "slug": "evening-of-karbala",
    "collectionType": "nohey",
    "collectionId": "1",
    "excerpt": "The evening of Karbala casts shadows on the heart",
    "isFeatured": true,
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z"
  },
  "status": 200
}
```

#### Get Poem by Slug
```http
GET /collections/{type}/poems/{slug}
```

**Parameters:**
- `type` (string): Collection type
- `slug` (string): Poem slug

**Response:**
```json
{
  "data": {
    "id": "1",
    "title": "The Evening of Karbala",
    "content": "The evening of Karbala casts shadows on the heart...",
    "slug": "evening-of-karbala",
    "collectionType": "nohey",
    "collectionId": "1",
    "excerpt": "The evening of Karbala casts shadows on the heart",
    "isFeatured": true,
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z"
  },
  "status": 200
}
```

### About

#### Get About Information
```http
GET /about
```

**Response:**
```json
{
  "data": {
    "id": "1",
    "title": "About Asif Jalal Bijnori",
    "content": "Asif Jalal Bijnori is a renowned poet who has dedicated his life to preserving and promoting the rich tradition of Islamic poetry...",
    "image": "/images/about/author-portrait.jpg",
    "updatedAt": "2024-01-01T00:00:00Z"
  },
  "status": 200
}
```

### Gallery

#### Get Gallery Items
```http
GET /gallery
```

**Response:**
```json
{
  "data": [
    {
      "id": "1",
      "title": "Poetry Recitation at Religious Gathering",
      "image": "/images/gallery/recitation-1.jpg",
      "description": "Performing traditional Nohey at a local religious gathering",
      "createdAt": "2024-01-01T00:00:00Z"
    }
  ],
  "status": 200
}
```

### Contact

#### Get Contact Information
```http
GET /contact
```

**Response:**
```json
{
  "data": {
    "id": "1",
    "email": "contact@asifjalalbijnori.com",
    "phone": "+91-98765-43210",
    "address": "Bijnor, Uttar Pradesh, India",
    "socialLinks": {
      "facebook": "https://facebook.com/asifjalalbijnori",
      "twitter": "https://twitter.com/asifjalalbijnori",
      "instagram": "https://instagram.com/asifjalalbijnori",
      "youtube": "https://youtube.com/asifjalalbijnori"
    },
    "updatedAt": "2024-01-01T00:00:00Z"
  },
  "status": 200
}
```

## Data Models

### Collection
```typescript
interface Collection {
  id: string;
  type: string;
  title: string;
  description: string;
  image?: string;
  poemCount: number;
  poems?: Poem[]; // Only included when fetching single collection
  createdAt: string;
  updatedAt: string;
}
```

### Poem
```typescript
interface Poem {
  id: string;
  title: string;
  content: string;
  slug: string;
  collectionType: string;
  collectionId: string;
  excerpt?: string;
  isFeatured?: boolean;
  createdAt: string;
  updatedAt: string;
}
```

### About
```typescript
interface About {
  id: string;
  title: string;
  content: string;
  image?: string;
  updatedAt: string;
}
```

### GalleryItem
```typescript
interface GalleryItem {
  id: string;
  title: string;
  image: string;
  description?: string;
  createdAt: string;
}
```

### Contact
```typescript
interface Contact {
  id: string;
  email: string;
  phone?: string;
  address?: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
  updatedAt: string;
}
```

## Collection Types

The website supports four main collection types:

1. **nohey** - نوحے (Nohey) - Traditional mourning poetry
2. **quasidey** - قصیدے (Quasidey) - Classical odes praising the Prophet
3. **manqabat** - منقبت (Manqabat) - Poems praising Ahl al-Bayt
4. **soz-o-salam** - سوز و سلام (Soz-o-Salam) - Emotional poems about Karbala

## Error Handling

The API should return appropriate HTTP status codes:

- `200` - Success
- `400` - Bad Request
- `404` - Not Found
- `500` - Internal Server Error

## Implementation Notes

1. **Fallback Data**: The frontend includes comprehensive dummy data that will be used if the API is unavailable.

2. **Caching**: Consider implementing caching strategies for better performance.

3. **Pagination**: For large datasets, consider implementing pagination.

4. **Search**: Future enhancement could include search functionality.

5. **Language Support**: The API supports English content for all poetry and text.

## Environment Variables

Set the following environment variable to configure the API URL:

```env
NEXT_PUBLIC_API_URL=http://your-api-domain.com/api
```

If not set, it defaults to `http://localhost:3001/api`.
