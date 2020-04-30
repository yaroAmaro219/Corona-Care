import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import { green } from '@material-ui/core/colors';
import { withRouter } from 'react-router-dom'


const Register = (props) => {
  const { handleRegister, registerFormData, handleChange } = props
  return (
    <div className='register-main-container flex row'>

      <form className="register-right-container" onSubmit={handleRegister}>
        {/* <HomeIcon
            className="home-icon-register"
            fontSize="large"
            onClick={() => { props.history.push('/') }}
            style={{ color: green[500] }} />  */}
        <h1 className='register-title' >Register</h1>
        <div className='register-input-container'>

          <input className='register-input-style' name='first_name' type='text' placeholder='Full Name' value={registerFormData.first_name} onChange={handleChange} />
          <input className='register-input-style' name='email' type='text' placeholder='Email' value={registerFormData.email} onChange={handleChange} />
          <input className='register-input-style' placeholder="Address" name="location" type="text" value={registerFormData.location} onChange={handleChange} />
          <input className='register-input-style' name='password' type='password' placeholder='Password' value={registerFormData.password} onChange={handleChange} />
        </div>
        <button className='register-submit-button'>Register</button>
      </form>
      
      <div className='register-right-container flex column'>
        <h1 className='have-account-title'>Already have an account?</h1>
        <button className='register-signin-redirect-button' onClick={() => { props.history.push('/login') }}>Sign In</button>
      </div>
      <div className='register-left-container flex column'>
        <h1>We're committed to helping thos in need...</h1>
        <p>Helping others is helping oneself, it's the oldest truth in the world.</p>
        <br />
        <p>Enter your information and we'll match you with those in need in your area.</p>
      </div>
    </div>
  )
}

export default withRouter(Register);

