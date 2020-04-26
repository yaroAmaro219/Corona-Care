import React from 'react'
import {Link} from 'react-router-dom'

const Decision = () => {
    return (
      <div class="decision">
        <Link class="choice" to="/volunteer">I Want To Help</Link>
        <Link class="choice" to="/users/:user_id/posts">I Need Help</Link>
      </div>
    )
  }
export default Decision;
