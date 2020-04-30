import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Volunteer = (props) => {
  return (
    <>
    <div class="volunteer-signup-container">
        <div class="volunteer-left-container">
          <div class="volunteer-header">
          <h1>We're committed to </h1>
            <h1>helping those in need...</h1>
            </div>
          <div class="volunteer-content-container-left">
            <div class="top">
          <p class="volunteer-left-content">Helping others is helping oneself, its</p>
              <p class="volunteer-left-content">the oldest truth in the world.</p>
              </div>
            <br />
            <div class="bottom">
          <p class="volunteer-left-content">Enter your information and we'll </p>
          <p class="volunteer-left-content">match you with those in need in your</p>
          <p class="volunteer-left-content">area.</p>
            </div>
            </div>
            
      </div>
        <div class="volunteer-right-container">
          <div class="volunteer-header">
            <h1 class="volunteer-title">I want to help</h1>
            </div>
      {/* {props.currentUser
        ? */}
          <div class="volunteer-content-container-right">
        <form onSubmit={() => { }}>
          <input class="volunteer-input" placeholder="First Name" name="first_name" type="text" onChange={props.handleChange} />
          <input class="volunteer-input" placeholder="Last Name" name="Last Name" type="text" onChange={props.handleChange} />
            <input class="volunteer-input" placeholder="Email" name="email" type="text" onChange={props.handleChange} />
          <input class="volunteer-input" placeholder="Password" name="password" type="text" onChange={props.handleChange} />
            <input class="volunteer-input" placeholder="Address" name="address" type="text" onChange={props.handleChange} />
          <input class="volunteer-input" placeholder="ZIP" name="zip" type="text" onChange={props.handleChange} />
          <input class="volunteer-input" placeholder="Phone Number" name="phone" type="text" onChange={props.handleChange} />
          <Link class="volunteer-submit" to="/posts">Submit</Link>
            </form>
            </div>
        {/* :
        <form onSubmit={() => { }}>
          <input class="volunteer-input" placeholder="What city?" name="city" type="text" onChange={props.handleChange} />
          <input class="volunteer-input" placeholder="Radius" name="radius" type="text" onChange={props.handleChange} />
          <Link class="volunteer-submit" to="/posts">Submit</Link>
        </form> 
        } */}
      </div>
    </div>
      <Footer />
      </>
  )
}


export default Volunteer;
