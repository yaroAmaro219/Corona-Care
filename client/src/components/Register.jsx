import React from 'react'

const Register = (props) => {
    return (
      <div>
        <h2>Register</h2>
        <hr />
        <form class="form" onSubmit={props.handleRegister}>
          <input placeholder="Name" name="first_name" type="text" value={props.formData.first_name} onChange={props.handleChange} />
          {/* <input placeholder="Age" name="age" type="number" value={props.formData.age} onChange={props.handleChange} min="0"/> */}
          <input placeholder="Email" name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
          <input placeholder="Address" name="location" type="text" value={props.formData.location} onChange={props.handleChange} />
          <input placeholder="Password" name="password" type="text" value={props.formData.password} onChange={props.handleChange} />
          <a href="/decision"><button>Register</button></a>
        </form>
      </div>
    )
}
  
export default Register;

