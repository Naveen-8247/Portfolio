import './index.css'
import { FaExternalLinkAlt, FaRegCalendarAlt } from 'react-icons/fa'

const certifications = [
  {
    title: 'Deloitte Virtual Internship',
      date: 'July 2025',
    img: 'https://res.cloudinary.com/dcy78sibl/image/upload/v1753604649/Screenshot_2025-07-27_132008_ilcytf.png',
    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_kEXsuRJaSr4hDRCAM_1752382487636_completion_certificate.pdf'
  },
  {
    title: 'Accenture Technology Consulting',
      date: 'July 2025',
    img: 'https://res.cloudinary.com/dcy78sibl/image/upload/v1753636901/Screenshot_2025-07-27_225104_bde36r.png',
    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/DMrpG9KbbePZxGfSN/AMZXXaKrixhEK2T72_DMrpG9KbbePZxGfSN_kEXsuRJaSr4hDRCAM_1752655973560_completion_certificate.pdf'
  },
  {
    title: 'React',
      date: 'June 2025',
    img: 'https://res.cloudinary.com/dcy78sibl/image/upload/v1753604728/Screenshot_2025-07-27_132146_gcdvvk.png',
    url: 'https://certificates.ccbp.in/intensive/react-js?id=NLSEAYFSIQ'
  },
  {
    title: 'Node.js',
      date: 'May 2025',
    img: 'https://res.cloudinary.com/dcy78sibl/image/upload/v1753604758/Screenshot_2025-07-27_132211_nw0xf7.png',
    url: 'https://certificates.ccbp.in/intensive/node-js?id=CJYEFSHDDB'
  },
  {
    title: 'Responsive Flexbox',
      date: 'May 2025',
    img: 'https://res.cloudinary.com/dcy78sibl/image/upload/v1753604772/Screenshot_2025-07-27_132234_ixa8xn.png',
    url: 'https://certificates.ccbp.in/intensive/flexbox?id=LAMSLSAWWC'
  },
  {
    title: 'JavaScript Essentials',
      date: 'March 2025',
    img: 'https://res.cloudinary.com/dcy78sibl/image/upload/v1753604778/Screenshot_2025-07-27_132254_ylhcct.png',
    url: 'https://certificates.ccbp.in/intensive/javascript-essentials?id=QGRVIDVNSX'
  },
  {
    title: 'Dynamic Website',
      date: 'February 2025',
    img: 'https://res.cloudinary.com/dcy78sibl/image/upload/v1753604792/Screenshot_2025-07-27_132316_mhmo4f.png',
    url: 'https://certificates.ccbp.in/intensive/dynamic-web-application?id=JMYNTRSETL'
  },
  {
    title: 'Developer Foundations',
      date: 'February 2025',
    img: 'https://res.cloudinary.com/dcy78sibl/image/upload/v1753604794/Screenshot_2025-07-27_132341_nn0yxv.png',
    url: 'https://certificates.ccbp.in/intensive/developer-foundations?id=BINQQAPTNI'
  },
  {
    title: 'SQL',
      date: 'October 2024',
    img: 'https://res.cloudinary.com/dcy78sibl/image/upload/v1753604800/Screenshot_2025-07-27_132403_iso4wx.png',
    url: 'https://certificates.ccbp.in/intensive/introduction-to-databases?id=ZIDJRCUIWY'
  },
  {
    title: 'Python',
      date: 'January 2025',
    img: 'https://res.cloudinary.com/dcy78sibl/image/upload/v1753604807/Screenshot_2025-07-27_132426_wnh9fd.png',
    url: 'https://certificates.ccbp.in/intensive/programming-foundations?id=CYBUENFJRB'
  },
  {
    title: 'Responsive Website',
      date: 'August 2024',
    img: 'https://res.cloudinary.com/dcy78sibl/image/upload/v1753604810/Screenshot_2025-07-27_132446_eueto8.png',
    url: 'https://certificates.ccbp.in/intensive/responsive-website?id=XZFWHGNQRR'
  },
  {
    title: 'Static Website',
      date: 'July 2024',
    img: 'https://res.cloudinary.com/dcy78sibl/image/upload/v1753604817/Screenshot_2025-07-27_132506_nhohek.png',
    url: 'https://certificates.ccbp.in/intensive/static-website?id=VOXDETXUQZ'
  }
]

const Certifications = () => (
  <section id="certifications" className="certifications-section">
    <h2 className="certifications-heading">
      <span className="highlight">Certifications</span>
    </h2>
    <div className="certifications-grid">
      {certifications.map(cert => (
        <div key={cert.title} className="cert-card">
          <img src={cert.img} alt={cert.title} className="cert-img" />
          <p className="cert-title">{cert.title}</p>
          <p className="cert-date">
            <FaRegCalendarAlt /> {cert.date}
          </p>
          <a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="view-link"
          >
            View Certificate <FaExternalLinkAlt className="link-icon" />
          </a>
        </div>
      ))}
    </div>
  </section>
)

export default Certifications