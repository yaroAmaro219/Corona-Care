import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <img src="images/shoppingman.svg" class="top-img"/>
        <div class="text-1">
          Connection, cooperation, compassion.
        </div>
        <div class="text-2">
          Co-Care is all about getting closer to your neighbors.
          Reach out to someone for a conversation or to request a
          helping hand with chores like grocery delivery and build
          a lasting connection.
        </div>
        {/* <img src="images/ineedhelp.svg" class="rectangle-1"/>
        <img src="images/iwanttohelp.svg" class="rectangle-2"/> */}
        {/* <img src="images/bottom.svg" class="bottom-group"/> */}
        {/* <Link to="decision"><p class="start">Let's get started</p></Link> */}
      </div>
    )
  }
}
