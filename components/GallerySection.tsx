import { getGalleryItems } from '@/lib/collections'

export default async function GallerySection() {
  const galleryItems = await getGalleryItems()

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        {/* Section Title */}
        <div className="gallery-title-section">
          <h2 className="gallery-title">
            Gallery
          </h2>
          {/* <div className="gallery-title-line"></div> */}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="gallery-item"
            >
              <div className="gallery-item-content">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="gallery-image"
                />
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {/* <div className="gallery-button-section">
          <button className="gallery-button">
            View More
          </button>
        </div> */}
      </div>
    </section>
  )
}
