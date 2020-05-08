import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div class="main">
        <div class="contact-container">
          <div class="contact-content">
        <h2 class="questions-title">Have Any Questions?</h2>
        <div class="email">
          <a href="mailto:coronacarecommunity@gmail.com">
            <svg class="large-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z"></path>
            </svg></a>
          <h4 class="email-link">CoronaCareCommunity@gmail.com</h4></div>
          </div>
          </div>
        </div>
    )
  }
}
