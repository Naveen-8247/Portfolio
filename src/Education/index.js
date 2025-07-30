import './index.css'
import { FaRegCalendarAlt } from 'react-icons/fa'

const educationDetails = [
  {
    degree: 'B.Sc in Computer Science',
    institute: 'Aurora Degree College, Hyderabad',
    duration: '2021 – 2024',
    result: 'CGPA: 7.83',
  },
  {
    degree: 'Intermediate (MPC)',
    institute: 'Sri Chaithanya Junior College, Hyderabad',
    duration: '2018 – 2020',
    result: 'Percentage: 95.8%',
  },
  {
    degree: 'SSC',
    institute: 'Brilliant Public School Zaheerabad',
    duration: '2008 – 2018',
    result: 'CGPA: 9.2',
  },
]

const Education = () => (
  <section id="education" className="education-section">
    <h2 className="education-heading">
      <span className="highlight">Education</span>
    </h2>
    <div className="edu-card-container">
      {educationDetails.map((edu, index) => (
        <div className="edu-card" key={index}>
          <h3>{edu.degree}</h3>
          <p>{edu.institute}</p>
          <p><FaRegCalendarAlt style={{ marginRight: '6px' }} />{edu.duration}</p>
          <p className="result">{edu.result}</p>
        </div>
      ))}
    </div>
  </section>
)

export default Education
