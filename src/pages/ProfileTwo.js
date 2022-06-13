import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import '../css/profiletwo.css'
import FormTwo from '../components/FormTwo'
import RestoInfo from '../components/RestoInfoTwo'

class ProfileTwo extends Component {
  render() {
    return (
      <div className='container'>
          <div className='left'>
              <RestoInfo />
          </div>
          
            <div className='right'>
                <FormTwo />
            </div>
            <Link to='/ProfileThree'>

<button className='w-32 mt-24 ml-40'>Next step</button>
</Link>
      </div>
    )
  }
}

export default ProfileTwo