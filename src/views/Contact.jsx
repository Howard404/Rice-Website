import './styles/contact.css'

export default function Contact() {
  return (

    <div className='contact-page'>

      <div className="contact-heading">
        <h1>Book Us Now!</h1>
      </div>

      <div className='contact-container'>

          <form method="POST">

            <div className="sender-name">
              {/* <label htmlFor="first_name">First Name</label> */}
              <input type="text" name="first_name" id="first_name" placeholder='First Name' required/>

              <input type="text" name="last_name" id="last_name" placeholder='Last Name' required/>
            </div>

            <div className="email">
                <input type="email" name="email" id="email" placeholder='yourname@gmail.com' required/>
            </div>

            <div className="event-date">
                <label htmlFor="date">Event Date</label>
                <input type="date" id="event_date" name="event_date"/>
            </div>
            

            <div className="message">
                <label htmlFor="event-details">Event Details</label>
                <textarea name="event-details" id="event-details" cols="80" rows="10" placeholder='Let us know more about your event!' required></textarea>
            </div>

            <div className="submit-button">
                <input type="submit" />
            </div>
          </form>
        </div>
    </div>
      
  )
}
