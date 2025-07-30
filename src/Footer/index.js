import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p className="made-with-love">
        Made with   <FaHeart className="love-icon" />  by  Naveen  Developer
      </p>
      <div className="footer-links">
        <a
          href="https://github.com/Naveen-8247"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="footer-icon" /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/dyavarnaveenkumar"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="footer-icon" /> LinkedIn
        </a>
        <a href="mailto:dyavarnaveen8247@gmail.com">
          <FaEnvelope className="footer-icon" /> Email
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
