import React, { Component } from 'react'
import '../css/profiletwo.css';
class FormTwo extends Component {
  render() {
    return (
      <div>
        <div className='form'>
            <label>Restaurant Type (Restaurant, Pub, Hotel, Coffee, Other)</label><br />
            <input type='text' placeholder='Restaurant'></input><br />
            <input type='text' placeholder='African'></input><br />

            <label>Opening Hours</label><br />
            <input className='hour' type='text' placeholder='From| '></input><br/>
            <input className='hour' type='text' placeholder='To| '></input><br />
            <label>Upload Images (Pictures or Logo)</label><br />
            <input className='choose' type='file'></input>

          </div>
      </div>
    )
  }
}

export default FormTwo