import './index.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef(null)

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_c9stc9p',        
        'template_2uaea0j',       
        form.current,             
        'guW3VIoE0BXZiDzSd'       
      )
      .then(
        result => {
          alert('Message sent successfully!')
          form.current.reset()
        },
        error => {
          alert('Failed to send message, please try again.')
          console.error(error.text)
        }
      )
  }

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">
        Contact <span className="highlight">Me</span>
      </h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="input-group">
          <input type="text" name="name" placeholder="Enter Your Name" required />
          <input type="email" name="email" placeholder="Enter Your Mail Id" required />
        </div>
        <div className="input-group">
          <input type="text" name="phone" placeholder="Enter Your Mobile Number" required />
          <input type="text" name="title" placeholder="Enter Subject Of The Mail" required />
        </div>
        <textarea name="message" placeholder="Enter Your Message Here..." rows="6" required />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </section>
  )
}

export default Contact
