export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="hero-section"
    >
      <div className="hero-background"></div>
      <div className="hero-content">
        <div className="hero-container">
          <div className="hero-layout">
            {/* Portrait */}
            <div className="hero-portrait">
              <div className="portrait-container">
                <img 
                  src="/images/author-mg.svg" 
                  alt="Asif Jalal Bijnori" 
                  className="portrait-image"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="hero-text">
              <div className="text-content">
                {/* Main Name */}
                <h1 className="hero-title">
                  Asif Jalal Bijnori
                </h1>
                
                {/* Subtitle */}
                <p className="hero-subtitle">
                  A Renowned Shayar-e-AhleBait and Police Officer
                </p>
                
                {/* Decorative line */}
                {/* <div className="decorative-line"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
