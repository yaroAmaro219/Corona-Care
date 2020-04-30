import React from 'react'
import {Link} from 'react-router-dom'

const Profile = (props) => {
  const {handleLogout} = props
    return (
      <div>
        <h1>Hello User</h1>
        {/* {this.props.user
          &&
          this.props.user.map(name => {
            return (
              
              <div>{name.first_name}</div>
            )
          })
        } */}
        <Link to="/login"><button onClick={handleLogout}>Logout</button></Link>
      </div>
    )
  }


export default Profile;