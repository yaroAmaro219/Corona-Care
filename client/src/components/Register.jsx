import React from 'react'

const Register = (props) => {
    return (
      <div>
        <h2>Register</h2>
        <hr />
        <form onSubmit={props.handleRegister}>
          <input placeholder="Name" name="first_name" type="text" value={props.formData.first_name} onChange={props.handleChange} />
          <input placeholder="Age" name="age" type="number" value={props.formData.age} onChange={props.handleChange} min="0"/>
          <input placeholder="Email" name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
          <input placeholder="Password" name="password" type="text" value={props.formData.password} onChange={props.handleChange} />
          <input placeholder="location" name="location" type="text" value={props.formData.location} onChange={props.handleChange} />
          <input placeholder="Volunteer Type" name="type_of_volunteer" type="text" value={props.formData.type_of_volunteer} onChange={props.handleChange} />
          <input placeholder="Available Times" name="best_time" type="text" value={props.formData.best_time} onChange={props.handleChange} />
          <button>Register</button>
        </form>
      </div>
    )
}
  
export default Register

