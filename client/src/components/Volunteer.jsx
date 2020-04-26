import React from 'react'

const Volunteer = (props) => {
  return (
    <div>
      <h1>Volunteer</h1>
      <input placeholder="What city?" name="city" type="text" value='0' onChange={props.handleChange} />
      <input placeholder="Radius" name="radius" type="text" value='0' onChange={props.handleChange} />
    </div>
  )
}


export default Volunteer
