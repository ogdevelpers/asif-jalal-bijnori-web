'use client'

import { useRouter } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import { Collection } from '@/lib/collections'

interface CollectionListProps {
  collection: Collection
}

export default function CollectionList({ collection }: CollectionListProps) {
  const router = useRouter()

  const handlePoemClick = (poemId: string) => {
    router.push(`/collections/${collection.type}/${poemId}`)
  }

  return (
    <div className="collection-list-container">
      <div className="collection-list-content">
        {/* Section Title */}
        <div className="collection-title-section">
          <h1 className="collection-title">
            {collection.title}
          </h1>
          {/* <div className="collection-title-line"></div> */}
        </div>

        {/* Poetry List */}
        <div className="poems-list">
          {collection.poems?.map((poem) => (
            <div
              key={poem.id}
              className="poem-card"
              onClick={() => handlePoemClick(poem.id)}
            >
              <div className="poem-card-content">
                <div className="poem-card-text">
                  <h2 className="poem-card-title">
                    {poem.title}
                  </h2>
                  <div className="poem-card-verse">
                    {poem.excerpt ? (
                      <p className="poem-verse-line">{poem.excerpt}</p>
                    ) : (
                      poem.content.split('\n').slice(0, 2).map((line, index) => (
                        <p key={index} className="poem-verse-line">
                          {line}
                        </p>
                      ))
                    )}
                  </div>
                </div>
                <div className="poem-card-arrow">
                  <img src="/images/arrow.svg" alt="Arrow Right" className="poem-arrow-icon" />
                  {/* <ChevronRight 
                    size={24} 
                    className="poem-arrow-icon" 
                  /> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {/* <div className="load-more-section">
          <button className="load-more-button">
            Load More Poems
          </button>
        </div> */}
      </div>
    </div>
  )
}
