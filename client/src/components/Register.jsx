import React from 'react'

const Register = (props) => {
    return (
      <div>
        <h2>Register</h2>
        <hr />
        <form onSubmit={props.handleRegister}>
          <input name="first_name" type="text" value={props.formData.first_name} onChange={props.handleChange} />
          <input name="age" type="number" value={props.formData.age} onChange={props.handleChange} min="0"/>
          <input name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
          <input name="location" type="text" value={props.formData.location} onChange={props.handleChange} />
          <input name="type_of_volunteer" type="text" value={props.formData.type_of_volunteer} onChange={props.handleChange} />
          <input name="best_time" type="text" value={props.formData.best_time} onChange={props.handleChange} />
        </form>
      </div>
    )
}
  
export default Register

