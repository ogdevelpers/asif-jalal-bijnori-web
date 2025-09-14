import { apiClient } from './api'
import type { Collection, Poem } from './api'
import { dummyCollections, dummyPoems } from './dummy-data'

export type { Collection, Poem }

// API Functions for collections and poems
export async function getCollections(): Promise<Collection[]> {
  // Use fallback data directly in development mode
  if (process.env.NODE_ENV === 'development' || !process.env.NEXT_PUBLIC_API_URL) {
    return getFallbackCollections()
  }
  
  try {
    const response = await apiClient.getCollections()
    return response.data
  } catch (error) {
    console.error('Error fetching collections:', error)
    return getFallbackCollections()
  }
}

export async function getCollectionByType(type: string): Promise<Collection | undefined> {
  // Use fallback data directly in development mode
  if (process.env.NODE_ENV === 'development' || !process.env.NEXT_PUBLIC_API_URL) {
    return getFallbackCollections().find(collection => collection.type === type)
  }
  
  try {
    const response = await apiClient.getCollectionByType(type)
    return response.data
  } catch (error) {
    console.error('Error fetching collection:', error)
    return getFallbackCollections().find(collection => collection.type === type)
  }
}

export async function getPoemBySlug(collectionType: string, poemSlug: string): Promise<Poem | undefined> {
  // Use fallback data directly in development mode
  if (process.env.NODE_ENV === 'development' || !process.env.NEXT_PUBLIC_API_URL) {
    const collection = getFallbackCollections().find(c => c.type === collectionType)
    return collection?.poems?.find(poem => poem.slug === poemSlug)
  }
  
  try {
    const response = await apiClient.getPoemBySlug(collectionType, poemSlug)
    return response.data
  } catch (error) {
    console.error('Error fetching poem:', error)
    const collection = await getCollectionByType(collectionType)
    return collection?.poems?.find(poem => poem.slug === poemSlug)
  }
}

export async function getPoemById(collectionType: string, poemId: string): Promise<Poem | undefined> {
  // Use fallback data directly in development mode
  if (process.env.NODE_ENV === 'development' || !process.env.NEXT_PUBLIC_API_URL) {
    const collection = getFallbackCollections().find(c => c.type === collectionType)
    return collection?.poems?.find(poem => poem.id === poemId)
  }
  
  try {
    const response = await apiClient.getPoemById(poemId)
    return response.data
  } catch (error) {
    console.error('Error fetching poem by ID:', error)
    const collection = getFallbackCollections().find(c => c.type === collectionType)
    return collection?.poems?.find(poem => poem.id === poemId)
  }
}

// Fallback data in case API is not available
function getFallbackCollections(): Collection[] {
  const collections: Collection[] = []
  
  // Group poems by collection type
  const poemsByType = dummyPoems.reduce((acc, poem) => {
    if (!acc[poem.collectionType]) {
      acc[poem.collectionType] = []
    }
    acc[poem.collectionType].push(poem)
    return acc
  }, {} as Record<string, Poem[]>)

  // Create collections with their poems
  dummyCollections.forEach(collectionData => {
    const poems = poemsByType[collectionData.type] || []
    collections.push({
      ...collectionData,
      poems
    })
  })

  return collections
}
