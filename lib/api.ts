// REST API client for fetching poetry data
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

export interface ApiError {
  message: string;
  status: number;
}

class ApiClient {
  private baseUrl: string;

  constructor() {
    // You can set this to your actual API endpoint
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
  }

  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Collections API
  async getCollections(): Promise<ApiResponse<Collection[]>> {
    return this.request<ApiResponse<Collection[]>>('/collections');
  }

  async getCollectionByType(type: string): Promise<ApiResponse<Collection>> {
    return this.request<ApiResponse<Collection>>(`/collections/${type}`);
  }

  // Poems API
  async getPoemsByCollection(collectionType: string): Promise<ApiResponse<Poem[]>> {
    return this.request<ApiResponse<Poem[]>>(`/collections/${collectionType}/poems`);
  }

  async getPoemById(id: string): Promise<ApiResponse<Poem>> {
    return this.request<ApiResponse<Poem>>(`/poems/${id}`);
  }

  async getPoemBySlug(collectionType: string, slug: string): Promise<ApiResponse<Poem>> {
    return this.request<ApiResponse<Poem>>(`/collections/${collectionType}/poems/${slug}`);
  }

  // About API
  async getAbout(): Promise<ApiResponse<About>> {
    return this.request<ApiResponse<About>>('/about');
  }

  // Gallery API
  async getGalleryItems(): Promise<ApiResponse<GalleryItem[]>> {
    return this.request<ApiResponse<GalleryItem[]>>('/gallery');
  }

  // Contact API
  async getContact(): Promise<ApiResponse<Contact>> {
    return this.request<ApiResponse<Contact>>('/contact');
  }
}

export const apiClient = new ApiClient();

// Type definitions
export interface Collection {
  id: string;
  type: string;
  title: string;
  description: string;
  image?: string;
  poemCount: number;
  poems?: Poem[];
  createdAt: string;
  updatedAt: string;
}

export interface Poem {
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

export interface About {
  id: string;
  title: string;
  content: string;
  image?: string;
  updatedAt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  description?: string;
  createdAt: string;
}

export interface Contact {
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
