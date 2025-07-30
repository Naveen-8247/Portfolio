import './index.css'
import { FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    name: 'Job Search App',
    img: 'https://res.cloudinary.com/dcy78sibl/image/upload/v1753605326/JobSearch-Image_jwosjm.jpg',
    url: 'https://dyavarjobsearch.ccbp.tech',
    description: `A Job Search Portal using React JS with JWT-protected routes and dynamic REST API integration.Implemented advanced filtering by employment type, location, and salary with a clean, user-friendly CSS-based UI.
         Demo Credentials: username:rahul  and Password:rahul@2021`,
  },
  {
    name: 'Tasty Kitchens',
    img: 'https://assets.foodhub.com/images/thumbnails/chinese_pork_seafood_005_692x306.jpg',
    url: 'https://DyavarKitchens.ccbp.tech',
    description: `A food delivery app with restaurant listings, detailed menus, filters, and a global cart feature using Context API.
    Demo Credentials: username:rahul  and Password:rahul@2021`,
  },
  {
    name: 'NxtTrends E-Commerce',
    img: 'https://res.cloudinary.com/dcy78sibl/image/upload/v1753605318/E_Commerce_Image_aoletr.avif',
    url: 'https://NaveensTrends.ccbp.tech',
    description: `A responsive e-commerce platform to browse and shop products with filters and cart support using React and APIs.
Demo Credentials: username:rahul  and Password:rahul@2021`,
  },
  {
    name: 'NxtWatch-YoutubeClone',
    img: 'https://s3-alpha.figma.com/hub/file/1271832110/cdcd2381-7724-4076-8bd6-97dbc4e30ac7-cover.png',
    url: 'https://NaveenWatch.ccbp.tech',
    description: `A YouTube-like video streaming app with dark/light mode, video interactions, and save/like features using React.
Demo Credentials: username:rahul  and Password:rahul@2021`,
  },
  {
    name: 'IPL DashBoard',
    img: 'https://res.cloudinary.com/dcy78sibl/image/upload/v1753695258/IPL-Dashboard-2025_page-0001_lvdttw.webp',
    url: 'https://DyavarIPL.ccbp.tech',
    description: `An interactive IPL dashboard showing team-wise matches and latest game details, built with dynamic routing and APIs.
Demo Credentials: username:rahul  and Password:rahul@2021`,
  },
  {
    name: 'UNI RESTO Cafe',
    img: 'https://www.creativefabrica.com/wp-content/uploads/2021/03/16/food-restaurant-facebook-cover-banner-Graphics-9640502-1.jpg',
    url: 'https://NaveensResto.ccbp.tech',
    description: `An interactive food menu with quantity control, item details, and cart management, styled with a clean responsive UI.
Demo Credentials: username:rahul  and Password:rahul@2021`,
  },
  {
    name: 'Medication App',
    img: 'https://topflightapps.com/wp-content/uploads/2022/02/develop-medicine-reminder-app-main-banner.png',
    url: 'https://my-medication.vercel.app',
    description: `A Medication App for patients and caretakers to track medications and adherence.
Demo Credentials: username:rahul  and Password:rahul@2021`,
  }
]

const Projects = () => (
  <section className="projects" id="projects">
    <h2 className="section-heading">Projects</h2>
    <div className="project-list">
      {projects.map(project => (
        <div className="project-card" key={project.name}>
          <img src={project.img} alt={project.name} className="project-img" />
          <div className="project-details">
            <div className="project-header">
              <p className="project-title">{project.name}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="live-demo"
              >
                <span className="live-text">Live Demo</span>
                <FaExternalLinkAlt className="external-icon" />
              </a>
            </div>
            <p className="project-description">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Projects
