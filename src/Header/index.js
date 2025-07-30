import './index.css'
import { FaLaptopCode, FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMobileMenuOpen(prev => !prev)
  }

  return (
    <header className="header">
      <div className="logo-container">
        <FaLaptopCode className="logo-icon" />
        <h1 className="logo-text">Portfolio</h1>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

 
      <nav className="desktop-nav">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
       
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <nav className={`mobile-nav ${isMobileMenuOpen ? 'show' : ''}`}>
        <ul className="nav-links">
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
           <li><a href="#education" onClick={toggleMenu}>Education</a></li>
          <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#certifications" onClick={toggleMenu}>Certifications</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
