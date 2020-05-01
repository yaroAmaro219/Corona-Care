import React from 'react'
import {Link} from 'react-router-dom'
import Twitter from '../images/twitter1.svg'
import Linkdin from '../images/linkedin1.svg'
import Insta from '../images/instagram1.svg'

const Footer = () => {
  return (
    <div class="footer-container">
      <div class="footer">
      <h1 class="footer-header">Follow us on social: </h1>
        <div class="social">
        <Link to="https://www.instagram.com/"><img class="social-s" src={Insta} /></Link>
        <Link to="https://twitter.com/"><img class="social-s" src={Twitter} /></Link>
        <Link to="https://www.linkedin.com/"><img class="social-s" src={Linkdin} /></Link>
      </div>
      <div class="co-care">
            © {new Date().getFullYear()} Co-Care 
      </div>
      </div>
    </div>
  )
}

export default Footer;
