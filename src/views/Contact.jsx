import './styles/contact.css'
import { useRef } from 'react';
import emailjs from "emailjs-com"

export default function Contact() {

  // EmailJS: Takes a form and renders the email through EMAIL.js
  const form = useRef();
  const EMAIL_SERVICE = import.meta.env.EMAIL_SERVICE
  const EMAIL_TEMPLATE =  import.meta.env.EMAIL_TEMPLATE
  const PUBLIC_KEY = import.meta.env.PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(EMAIL_SERVICE, EMAIL_TEMPLATE, form.current, PUBLIC_KEY)
    .then((result) => {
      alert("Sent Successfully!");
      console.log(result);
    }, (error) => {
      console.log(error.text);
    });

    e.target.reset();
  }

  // console.log(import.meta.env.EMAIL_SERVICE);

  // getDate function retrieves the current date from the Date object
  function getDate() {
    const date = new Date();

    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const day = date.getDate();
    return `${year}-${(month < 10 ? '0' : '') + month}-${(day < 10 ? '0' : '') + day}`
  }

  return (

    <div className='contact-page' id='contact'>

      <div className="contact-heading">
        <h1>Contact</h1>
        <h3>Book a show...</h3>
      </div>

      <div className='contact-container'>

          {/* <form ref={form} onSubmit={sendEmail}>

            <div className="sender-name">
              <input type="text" name="name" id="name" placeholder='Name' className='contact-input' required/>
            </div>

            <div className="email">
                <input type="email" name="email" id="email" placeholder='yourname@email.com' className='contact-input' required/>
            </div>

            <div className="event-date">
                <input type="date" id="event_date" name="event_date" min={getDate()} className='contact-input'/>
            </div>
            

            <div className="message">
                <textarea name="event-details" id="event-details" placeholder='Let us know more about your event!' required></textarea>
            </div>

            <div className="submit-button">
                <input type="submit" value="SUBMIT" className='contact-input'/>
            </div>
          </form> */}

          <h3>Email: thericeoffice@gmail.com</h3>
          <h3>Phone: +1 (509) 628-7717</h3>
        </div>

        {/* <div className="alternative-contact">
          <p className="alt-contact">Or email directly: thericeoffice@gmail.com</p>
        </div> */}
    </div>     
  )
}
