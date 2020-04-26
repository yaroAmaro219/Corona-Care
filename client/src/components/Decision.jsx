import React from 'react'
import {Link} from 'react-router-dom'

const Decision = () => {
    return (
      <div class="decision">
        <Link class="choice" to="/gethelp">Get Help</Link>
        <Link class="choice" to="/volunteer">Volunteer</Link>
      </div>
    )
  }
export default Decision
