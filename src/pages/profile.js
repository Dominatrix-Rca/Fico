import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/profile.css'
import Form from '../components/Form';
import RestoInfo from '../components/RestoInfoTwo'

class Profile extends Component {
  render() {
    return (
      <div className='container1'>
          <div className='left'>
            <RestoInfo />
          </div>
          
            <div className='right'>
                <Form />
            </div>
            <Link to='/ProfileTwo'>

<button className='w-32 mt-24 ml-40 bg-orange-400 text-white rounded-lg'>Next step</button>
</Link>
      </div>
    )
  }
}

export default Profile