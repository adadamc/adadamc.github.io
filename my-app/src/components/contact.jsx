import './contact.css';


function Contact(){
    return (
      <div id="contactDiv">
        <h1>Contact Information</h1>
        <p>I can be easily contacted by email or LinkedIn</p>
        <h2>Email</h2>
        <p id="largerText1">adam@adadamc.ca</p>
        <h2>Links</h2>
        <ul>
            <li><p id="largerText2"><a href="https://www.linkedin.com/in/adam-adamczyk-297875230/" target="_blank">LinkedIn</a></p></li>
            <li><p id="largerText2"><a href="https://github.com/adadamc" target="_blank">GitHub</a></p></li>
        </ul>
    </div>
    )
}

export default Contact;