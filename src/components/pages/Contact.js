export default function Contact() {
  return (
    <div className="contact-page-container">
      
      <div className="send-message-wrapper">
      <h1>CONTACT US!</h1>
        <form>
          <div className="name-wrapper">  
            <input type="text" id="firstName" placeholder="First Name" required />
            <input type="text" id="lastName" placeholder="Last Name" required />
            <input className="email-input" type="email" id="email" placeholder="Email" required />
          </div>
          <div className="message-btn-wrapper">
            <input className="text-input" type="text" placeholder="Send us a message" />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      <div className="contact-us-wrapper">
        <p>Orem, Utah</p>
        <p>kawasaki@sbcglobal.net</p>
        <p>(801)-555-5555</p>
      </div>
    </div>
  )
}