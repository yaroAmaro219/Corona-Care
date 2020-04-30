import React from 'react'
import {Link} from 'react-router-dom'
import Twitter from '../images/twitter.svg'
import Linkdin from '../images/linkedin.svg'
import Insta from '../images/instagram.svg'

const Footer = () => {
  return (
    <div class="footer-container">
      <div class="footer">
      <h1 class="footer-header">Follow us on social: </h1>
      <div class="social">
        <Link to="https://twitter.com/"><img class="social-s" src={Twitter} /></Link>
        <Link to="https://www.linkedin.com/"><img class="social-s" src={Linkdin} /></Link>
        <Link to="https://www.instagram.com/"><img class="social-s" src={Insta} /></Link>
      </div>
      <div class="co-care">
            © {new Date().getFullYear()} Co-Care 
      </div>
      </div>
    </div>
  )
}

export default Footer;
