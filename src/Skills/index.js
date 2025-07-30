import './index.css'

const technicalSkills = [
  { name: 'HTML', logo: 'https://assets.ccbp.in/frontend/react-js/tech-era/html-logo-img.png' },
  { name: 'CSS', logo: 'https://assets.ccbp.in/frontend/react-js/tech-era/css-logo-img.png' },
  { name: 'Bootstrap', logo: 'https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg' },
  { name: 'JavaScript', logo: 'https://assets.ccbp.in/frontend/react-js/tech-era/javascript-logo-img.png' },
  { name: 'React JS', logo: 'https://assets.ccbp.in/frontend/react-js/tech-era/react-logo-img.png' },
  { name: 'Node JS', logo: 'https://assets.ccbp.in/frontend/react-js/tech-era/node.js-logo-img.png' },
  { name: 'Express JS', logo: 'https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png' },
  { name: 'SQL', logo: 'https://res.cloudinary.com/dcy78sibl/image/upload/v1753784591/database_15160567_syqztf.png' },
  { name: 'Python', logo: 'https://assets.ccbp.in/frontend/react-js/tech-era/python-logo-img.png' },
  {name:'Figma',logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB-RwXFG3SGcr5OVUgKaoxT0T5VNFG_U5cDA&s'}
]

const softSkills = [
  'Team Collaboration',
  'Effective Communication',
  'Time Management',
  'Problem Solving',
  'Critical Thinking',
  'Adaptability',
  'Leadership',
  'Attention to Detail',
  'Creativity',
  'Emotional Intelligence',
]

const Skills = () => (
  <section id="skills" className="skills-section">
    <h2 className="skills-heading">Technical <span className="highlight-skill">Skills</span></h2>
    <div className="skills-grid">
      {technicalSkills.map(skill => (
        <div className="skill-card" key={skill.name}>
          <img src={skill.logo} alt={skill.name} className="skill-logo" />
          <p className="skill-name">{skill.name}</p>
        </div>
      ))}
    </div>

    <h2 className="skills-heading">Soft <span className="highlight-skill">Skills</span></h2>
    <div className="soft-skills-grid">
      {softSkills.map((skill, index) => (
        <div className="soft-skill-card" key={index}>
          {skill}
        </div>
      ))}
    </div>
  </section>
)

export default Skills
