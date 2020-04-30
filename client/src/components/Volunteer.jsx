import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Volunteer = (props) => {
  return (
    <>
    <div class="volunteer-signup-container">
      <div class="left-container">
        <h1>Hello</h1>
      </div>
      <div class="right-container">
      <h1>Volunteer</h1>
      {/* {props.currentUser
        ? */}
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
