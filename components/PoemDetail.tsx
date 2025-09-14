'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { Poem, Collection } from '@/lib/collections'

interface PoemDetailProps {
  poem: Poem
  collection: Collection
}

export default function PoemDetail({ poem, collection }: PoemDetailProps) {
  const router = useRouter()

  const handleBackClick = () => {
    router.push(`/collections/${collection.type}`)
  }

  const handleRelatedPoemClick = (relatedPoemId: string) => {
    router.push(`/collections/${collection.type}/${relatedPoemId}`)
  }

  // Get other poems from the same collection (excluding current poem)
  const relatedPoems = collection.poems?.filter(p => p.id !== poem.id).slice(0, 4) || []

  return (
    <div className="poem-detail-container">
      <div className="poem-detail-content">
        {/* Back Button */}
        {/* <button
          onClick={handleBackClick}
          className="back-button"
        >
          <ArrowLeft size={20} className="back-icon" />
          Back to {collection.title}
        </button> */}

        {/* Main Poem */}
        <div className="main-poem-card">
          <h1 className="poem-title">
            {poem.title}
          </h1>
          <div className="poem-content">
            <pre className="poem-text">
              {poem.content}
            </pre>
          </div>
        </div>

        {/* Related Poems Section */}
        {relatedPoems.length > 0 && (
          <div className="related-poems-section">
            <h2 className="related-poems-title">
              More {collection.title}s for you...
            </h2>
            
            <div className="related-poems-list">
              {relatedPoems.map((relatedPoem) => (
                <div
                  key={relatedPoem.id}
                  className="related-poem-card"
                  onClick={() => handleRelatedPoemClick(relatedPoem.id)}
                >
                  <div className="related-poem-content">
                    <div className="related-poem-text">
                      <h3 className="related-poem-title">
                        {relatedPoem.title}
                      </h3>
                      <div className="related-poem-verse">
                        {relatedPoem.excerpt ? (
                          <p className="verse-line">{relatedPoem.excerpt}</p>
                        ) : (
                          relatedPoem.content.split('\n').slice(0, 2).map((line, index) => (
                            <p key={index} className="verse-line">
                              {line}
                            </p>
                          ))
                        )}
                      </div>
                    </div>
                    <div className="related-poem-arrow">
                      <ChevronRight 
                        size={20} 
                        className="arrow-icon" 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
