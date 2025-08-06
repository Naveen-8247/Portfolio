import './index.css'
import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaDownload } from 'react-icons/fa'

const roles = ['Full Stack Developer','Frontend Developer','Backend Developer','Web Developer']

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout

    if (!isDeleting && charIndex <= currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, charIndex))
        setCharIndex(charIndex + 1)
      }, 100)
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, charIndex))
        setCharIndex(charIndex - 1)
      }, 60)
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(!isDeleting)
        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), 1000)
        } else {
          setRoleIndex((roleIndex + 1) % roles.length)
          setCharIndex(0)
        }
      }, 600)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  return (
    <section className="hero responsive-hero" id="home">
      <div className="hero-right">
        <img
          src="https://res.cloudinary.com/dcy78sibl/image/upload/v1753613347/Portfolio-Image_qwhbnr.jpg"
          alt="Naveen Yadav"
          className="profile-img"
        />
      </div>

      <div className="hero-left">
        <h3>Hello, I am</h3>
        <h1 className="name">Dyavar Naveen Kumar</h1>
        <h2 className="role">
          I'm a <span className="highlight">{displayedText}<span className="cursor">|</span></span>
        </h2>
        <p className="subtitle">
          Transforming Ideas into Full-Stack Web Experiences
        </p>
        <div className="social-icons">
          <a href="https://linkedin.com/in/dyavarnaveenkumar" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/Naveen-8247" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:dyavarnaveen8247@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/1Gc-T0gzYHgIWfW-18Af86pyYvO52smTq/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          View Resume <FaDownload />
        </a>
      </div>
    </section>
  )
}

export default Hero
