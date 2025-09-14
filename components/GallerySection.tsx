export default function GallerySection() {
  const galleryItems = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: `Gallery Item ${i + 1}`,
    description: 'Poetry collection or event photo'
  }))

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
              {/* Placeholder for gallery images */}
              <div className="gallery-item-content">
                <div className="gallery-item-icon">
                  <div className="gallery-item-icon-inner"></div>
                </div>
                <p className="gallery-item-title">{item.title}</p>
                <p className="gallery-item-description">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="gallery-button-section">
          <button className="gallery-button">
            View More
          </button>
        </div>
      </div>
    </section>
  )
}
