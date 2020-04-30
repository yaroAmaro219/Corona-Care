import React from 'react'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom'

const Login = (props) => {
  
  // myFunction = () => {
  //   let x = document.getElementById("myInput");
  //   if (x.type === "password") {
  //     x.type = "text";
  //   } else {
  //     x.type = "password";
  //   }
  // }

    const { handleLogin, authFormData, handleChange } = props
    return (
      <div className='login-container flex row'>
        <form className='left-container flex column' onSubmit={handleLogin}>
          <h1 className='sign-in-title'>SIGN IN</h1>
          <div className='input-container'>
            <input name="email" type="text" placeholder='Email' value={authFormData.email} onChange={handleChange} className='input-style' />
            <input name="password" type="password" placeholder='Password' value={authFormData.password} onChange={handleChange} className='input-style' />
          </div>
          <button className='submit-button'> Login</button>
          </form>
        
          <div className='right-container'>
          <h1 className='account-title' >NEED AN ACCOUNT?</h1>
          <button onClick={() => { props.history.push('/register') }} className='register-button'>Register</button>
        </div>
      </div>
      
    )
  }



  
export default withRouter(Login);

