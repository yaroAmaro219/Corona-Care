import React from 'react'

 const GetHelp = () => {
    return (
      <div class="help">
        <h1>What Do You Want Help With?</h1>
        <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
          <div class="dropdown-content">
              <a href="#">Groceries</a>
              <a href="#">Medication Pick Up</a>
            <a href="#">Post Office</a>
            <a href="#">Someone To Talk To!</a>
          </div>
        </div>
        
        {/* let form = timeSlots.filter((time) => {
      return this.props.reservation
        &&
        !this.props.reservation.reservations.map((res) => res.start_time).includes(time.start_time)
    }).map((time) => (
      <Form>
        <div class="reservationForm">
        <p class="time">
            {time.start_time}
            {'  to  '}
          {time.end_time}
        </p>
        <input
          name="name"
          type="text"
          onChange={this.props.handleChange} />
        <button onClick={(e) => {
          this.props.addReservation(this.props.match.params.id, time.start_time, time.end_time)
          }}>Submit</button>
        </div>  
      </Form> */}
      </div>
    )
  }


export default GetHelp;