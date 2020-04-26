import React from 'react'
import {Link} from 'react-router-dom'

const Volunteer = (props) => {
  return (
    <div>
      <h1>Volunteer</h1>
      <form onSubmit={() => { }}>
        <input placeholder="What city?" name="city" type="text" onChange={props.handleChange} />
        <input placeholder="Radius" name="radius" type="text" onChange={props.handleChange} />
        <Link to="/posts">Submit</Link>
      </form>
    </div>
  )
}


export default Volunteer;
