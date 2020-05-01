import React from 'react'
import Footer from './Footer'
import { withRouter } from 'react-router-dom'


const Register = (props) => {
  const { handleRegister, registerFormData, handleChange } = props
  return (
    <>
      <div className='register-main-container'>
        <div className='register-left-container'>
          <div class='register-left-co-container'>
            <div class="register-title-container">
              <h1 className="register-title-left">We're committed to helping those in need...</h1>
            </div>
            <div class="left-container-content">
              <div class="top">
                <p>Helping others is helping oneself, it's </p>
                <p>the oldest truth in the world.</p>
              </div>
              <div class="bottom">
                <p>Enter your information and we'll </p>
                <p>match you with those in need in your </p>
                <p>area.</p>
              </div>
            </div>
            <div className='register-signin-container'>
              <h1 className='have-account-title'>Already have an account?</h1>
              <button className='register-signin-redirect-button' onClick={() => { props.history.push('/login') }}>Sign In</button>
            </div>
          </div>
        </div>

        <form className="register-right-container" onSubmit={handleRegister}>
          <h1 className='register-title' >Register</h1>
          <div className='register-input-container'>

            <input className='register-input-style' name='first_name' type='text' placeholder='Full Name' value={registerFormData.first_name} onChange={handleChange} />
            <input className='register-input-style' name='email' type='text' placeholder='Email' value={registerFormData.email} onChange={handleChange} />
            <input className='register-input-style' placeholder="Address" name="location" type="text" value={registerFormData.location} onChange={handleChange} />
            <input className='register-input-style' name='password' type='password' placeholder='Password' value={registerFormData.password} onChange={handleChange} />
          </div>
          <button className='register-submit-button'>Register</button>

        </form>
      </div>
      <Footer />
    </>
  )
}

export default withRouter(Register);

