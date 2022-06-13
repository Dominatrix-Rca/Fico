import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <div>
        <div className='form'>
            <label>Restaurant Information</label><br />
            <input type='text' placeholder='Restaurant Name'></input><br />
            <input type='text' placeholder='Restaurant Complete Name'></input><br />

            <label>Contact Information @ Restaurant</label><br />
            <input type='tel' placeholder='Mobile Number'></input><br />
            <label>Restaurant Owner Details</label><br />
            <input type='tel' placeholder='Mobile Number'></input>
            <input className='owner' type='text' placeholder='Owner Name'></input>
          </div>
      </div>
    )
  }
}

export default Form