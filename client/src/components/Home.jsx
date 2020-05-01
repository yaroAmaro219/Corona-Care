import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/E11.svg'
import Image1 from '../images/E5.svg'
import Image2 from '../images/E6.svg'
import Shopping from '../images/shoppingman.png'
import Footer from './Footer'
import '../App.css'

export default class Home extends Component {
  render() {
    console.log(this.props.currentUser)
    return (
      <>
        <div class="home">
          
          <div class="text-container">
            <img
              src={Shopping}
              class="top-img"
            />
            <div class="text-1">
              Connection, cooperation, compassion.
             </div>
            <div class="text-2">
              Co-Care is all about getting closer to your neighbors.
              Reach out to someone for a conversation or to request a
              helping hand with chores like grocery delivery and build
              a lasting connection.
            </div>
            <div class="buttons">
              <Link class="choice" to="/users/:user_id/posts">I need help</Link>
              <Link class="choice" to=
                {this.props.currentUser
                  ?
                  "/volunteer"
                  :
                  "/register"}
              >I want to help</Link>
              
            </div>
          </div>

          <div class="volunteer-container">
            <div class="home-volunteer-title-container">
              <h1 class="home-volunteer-title">Our volunteers can help with...</h1>
            </div>
            <div class="pics-container">
              <div class="pics">
                <svg class="vol" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.999 80C24.4992 80 20.0493 84.5 20.0493 90C20.0493 95.5 24.4992 100 29.999 100C35.4988 100 39.9986 95.5 39.9986 90C39.9986 84.5 35.4988 80 29.999 80ZM0 0V10H9.99966L27.999 47.95L21.2493 60.2C20.4493 61.6 19.9993 63.25 19.9993 65C19.9993 70.5 24.4992 75 29.999 75H89.9969V65H32.0989C31.3989 65 30.8489 64.45 30.8489 63.75L30.9989 63.15L35.4988 55H72.7475C76.4974 55 79.7973 52.95 81.4972 49.85L99.3966 17.4C99.8091 16.6369 100.017 15.7799 99.9989 14.9126C99.9812 14.0454 99.7389 13.1975 99.2956 12.4519C98.8523 11.7063 98.2232 11.0885 97.4697 10.6587C96.7162 10.229 95.8641 10.002 94.9967 10H21.0493L16.3494 0H0ZM79.9973 80C74.4974 80 70.0476 84.5 70.0476 90C70.0476 95.5 74.4974 100 79.9973 100C85.4971 100 89.9969 95.5 89.9969 90C89.9969 84.5 85.4971 80 79.9973 80Z" fill="#5BB275" />
                </svg>
                <svg class="vol" width="105" height="84" viewBox="0 0 105 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M93.7498 0H20.8332C15.0884 0 10.4165 4.67187 10.4165 10.4167V36.4583H20.8332V20.8333L54.1665 45.8333C55.0684 46.5087 56.1648 46.8737 57.2915 46.8737C58.4182 46.8737 59.5146 46.5087 60.4165 45.8333L93.7498 20.8333V67.7083H52.0832V78.125H93.7498C99.4946 78.125 104.166 73.4531 104.166 67.7083V10.4167C104.166 4.67187 99.4946 0 93.7498 0ZM57.2915 35.1562L24.3019 10.4167H90.2811L57.2915 35.1562Z" fill="#5BB275" />
                  <path d="M0 41.6666H36.4583V52.0833H0V41.6666ZM10.4167 57.2916H41.6667V67.7083H10.4167V57.2916ZM26.0417 72.9166H46.875V83.3333H26.0417V72.9166Z" fill="#5BB275" />
                </svg>
                <svg class="vol" width="108" height="94" viewBox="0 0 108 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M40.1834 0C18.0046 0 0 13.4645 0 30.0732C0 45.2249 15.0095 57.734 34.5048 59.8007L26.231 76.301L55.0234 58.005C69.8567 53.5733 81.2544 42.7516 81.2544 30.0732C81.2544 13.4713 62.3689 0 40.1834 0Z" fill="#5BB275" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M108 60.2413C108 52.6247 100.804 44.7371 92.4891 40.8069C90.158 54.0206 79.4515 66.1841 62.5582 70.941L54.5148 75.2914C57.5912 77.5953 61.3588 79.4317 65.5872 80.6311L90.2394 93.9872L81.4099 81.9525C96.4329 80.4278 108 71.307 108 60.2413Z" fill="#5BB275" />
                </svg>
                <svg class="vol" width="75" height="116" viewBox="0 0 75 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M53.649 33.3449L62.4805 20.6342C62.9757 20.6755 63.4709 20.6755 63.9661 20.6342C66.0205 20.6332 68.0278 20.0188 69.7309 18.8699C71.4339 17.721 72.7552 16.0898 73.5254 14.1852C74.2956 12.2807 74.4798 10.1896 74.0542 8.17982C73.6286 6.17002 72.6127 4.33303 71.1366 2.90418C69.6605 1.47533 67.7915 0.519682 65.7689 0.159664C63.7463 -0.200353 61.6623 0.0516511 59.7838 0.883394C57.9053 1.71514 56.318 3.08874 55.225 4.82825C54.132 6.56776 53.5833 8.59395 53.649 10.6473V11.4726L33.0148 33.3449H53.649ZM74.2833 49.8523V41.5986H0V49.8523L12.3805 78.7402L0 107.628V115.882H74.2833V107.628L66.0296 78.7402L74.2833 49.8523ZM57.7759 82.8671H41.2685V99.3745H33.0148V82.8671H16.5074V74.6134H33.0148V58.106H41.2685V74.6134H57.7759V82.8671Z" fill="#5BB275" />
                </svg>
              </div>

              <div class="sub-pic">
                <p class="sub-option">Grocery shopping & delivery</p>
                <p class="sub-option">Post office pickup & dropoff</p>
                <p class="sub-option">Conversation & social support</p>
                <p class="sub-option">Pharmacy pick up & delivery</p>
              </div>
            </div>
            <div class="meet">
              <div class="meet-title-container">
                <h1 class="meet-title">Meet a few of our Volunteers...</h1>
              </div>
              <div class="showcase">
                <div class="bio">
                  <img class="image" src={Image} />
                  <h3>Simon T.</h3>
                  <p class="quote">"I want to make meaningful connections with people in my community"</p>
                </div>
                <div class="bio">
                  <img class="image" src={Image2} />
                  <h3>Kuar A.</h3>
                  <p class="quote">"COVOID-19 has been hard on my family, and I want to help in any way I can."</p>
                </div>
                <div class="bio">
                  <img class="image" src={Image1} />
                  <h3>Alex F.</h3>
                  <p class="quote">"Always here for my neighbors."</p>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </>
    )
  }
}
