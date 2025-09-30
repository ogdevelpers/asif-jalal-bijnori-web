import { Instagram, Youtube, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Copyright */}
          <div className="footer-copyright">
            <div className="footer-logo">
              Asif Jalal Bijnori
            </div>
            <p className="footer-copyright-text">
              © 2025 Asif Jalal Bijnori. All rights reserved.
            </p>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <div className="footer-contact-links">
              <p className="footer-contact-item">
                <a 
                  href="tel:+919878787876" 
                  className="footer-contact-link"
                >
                  +91 9717908062
                </a>
              </p>
              <p className="footer-contact-item" style={{color: "#58412C"}}>
                {/* <a 
                  href="mailto:abc@gmail.com" 
                  className="footer-contact-link"
                > */}
                  C-Block,Rajeev nagar, Mandoli, Delhi 110093
                {/* </a> */}
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="footer-social">
            <a
              href="https://www.instagram.com/asifjalalbijnori_official?igsh=MWRqcWZxMDNhcjI1Zg=="
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://youtube.com/@asifjalalbijnori7628?si=QjvJ1D8oLu3UuV5Q"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
            <a
              href="https://www.facebook.com/share/16qGQEpqMT/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>

        {/* Bottom Border */}
        {/* <div className="footer-bottom">
          <p className="footer-bottom-text">
            Crafted with love for poetry and literature
          </p>
        </div> */}
      </div>
    </footer>
  )
}
