export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Section Title */}
        <div className="about-title-section">
          <h2 className="about-title">
            About Me
          </h2>
          {/* <div className="about-title-line"></div> */}
        </div>

        <div className="about-content">
          {/* Text Content */}
          <div className="about-text-section">
            <div className="about-text-content">
              <p className="about-paragraph">
                Asif Jalal Bijnori, a celebrated poet, weaves tales of love, loss, and longing through his verses. 
                His work, a blend of Urdu and Hindi, resonates with readers across generations, capturing the essence 
                of human emotions with profound depth and simplicity.
              </p>
              <p className="about-paragraph">
                His journey through life, marked by both joy and sorrow, finds expression in his evocative poetry. 
                Each verse is a window into the soul, reflecting the timeless beauty of human experience and the 
                universal language of the heart.
              </p>
              <p className="about-paragraph about-paragraph-last">
                Through his words, he continues to touch lives and inspire countless souls to find beauty in 
                the ordinary moments of life.
              </p>
            </div>
          </div>

          {/* Portrait */}
          <div className="about-portrait-section">
            <div className="about-portrait-container">
              <img src="/images/author-about.svg" alt="Asif Jalal Bijnori" className="about-portrait-image" />
              {/* Decorative elements */}
              {/* <div className="about-decorative-1"></div>
              <div className="about-decorative-2"></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
