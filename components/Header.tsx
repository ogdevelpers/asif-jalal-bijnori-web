'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Instagram, Youtube, Facebook, ChevronDown, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            {/* Mobile: Logo on left */}
            <div className="mobile-logo">
              <h1 className="logo-text mobile-logo-text">
                Asif Jalal Bijnori
              </h1>
            </div>

            {/* Desktop: Navigation on left */}
            <nav className="desktop-nav">
              <Link href="/" className="nav-link">
                Home
              </Link>
              <Link href="/#about" className="nav-link">
                About
              </Link>
              <div className="dropdown-container">
                <button
                  onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
                  className="dropdown-button"
                >
                  Collections
                  <ChevronDown size={16} className="dropdown-icon" />
                </button>
                {isCollectionsOpen && (
                  <div className="dropdown-menu">
                    <Link href="/collections/nohey" className="dropdown-item">
                      Nohey
                    </Link>
                    <Link href="/collections/quasidey" className="dropdown-item">
                      Quasidey
                    </Link>
                    <Link href="/collections/manqabat" className="dropdown-item">
                      Manqabat
                    </Link>
                    <Link href="/collections/soz-o-salam" className="dropdown-item">
                      Soz-o-salam
                    </Link>
                  </div>
                )}
              </div>
            </nav>

            {/* Desktop: Logo in center */}
            <div className="desktop-logo">
              <h1 className="logo-text desktop-logo-text">
                Asif Jalal Bijnori
              </h1>
            </div>

            {/* Desktop: Social Icons on right */}
            <div className="desktop-social">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Facebook size={20} />
              </a>
            </div>

            {/* Mobile: Menu button on right */}
            <div className="mobile-menu-button">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="menu-button"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="mobile-overlay">
          {/* Background overlay */}
          <div 
            className="overlay-background"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu panel */}
          <div className="mobile-menu-panel">
            <div className="mobile-menu-content">
              {/* Close button */}
              <div className="close-button-container">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="close-button"
                >
                  <X size={24} />
                </button>
              </div>
              
              {/* Navigation links */}
              <nav className="mobile-nav">
                <div className="mobile-nav-links">
                  <Link
                    href="/"
                    className="mobile-nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/#about"
                    className="mobile-nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  
                  {/* Collections */}
                  <div className="mobile-collections">
                    <button
                      onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
                      className="mobile-collections-button"
                    >
                      Collections
                      <ChevronDown size={16} className="mobile-dropdown-icon" />
                    </button>
                    {isCollectionsOpen && (
                      <div className="mobile-collections-menu">
                        <Link
                          href="/collections/nohey"
                          className="mobile-collection-item"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Nohey
                        </Link>
                        <Link
                          href="/collections/quasidey"
                          className="mobile-collection-item"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Quasidey
                        </Link>
                        <Link
                          href="/collections/manqabat"
                          className="mobile-collection-item"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Manqabat
                        </Link>
                        <Link
                          href="/collections/soz-o-salam"
                          className="mobile-collection-item"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Soz-o-salam
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </nav>
              
              {/* Social Icons */}
              <div className="mobile-social-container">
                <div className="mobile-social-links">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-social-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-social-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Youtube size={24} />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-social-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
