import React, { Component } from 'react'
import '../css/profile.css'
class RestoInfo extends Component {
  render() {
    return (
      <div>
        <div className='intro1'>
            <h3>
                1.Create Your <span>Restaurant Profile</span>
            </h3>
            <ul>
                <li>
                    <div className='one bg-orange-400 border-2 border-orange-400'>1</div>
                    <div className='two'>
                        <span className='span-one text-gray-600'>Restaurant Information</span>
                        <span className='span-two text-gray-600'>Lorem ipsum dolor sit </span>
                        <span className='span-three text-gray-600'>Amet Random Text Around </span>
                    </div>
                </li>

                <li>
                    <div className='one'>2</div>
                    <div className='two'>
                        <span className='span-one text-gray-600'>Restaurant Type & Image</span>
                        <span className='span-two text-gray-600'>Lorem ipsum dolor sit </span>
                        <span className='span-three text-gray-600'>Amet Random Text Around </span>
                    </div>
                </li>

                <li>
                    <div className='one'>3</div>
                    <div className='two'>
                        <span className='span-one text-gray-600'>Create Your Menu </span>
                        <span className='span-two text-gray-600'>Lorem ipsum dolor sit </span>
                        <span className='span-three text-gray-600'>Amet Random Text Around </span>
                    </div>
                </li>

            </ul>

          </div>
      </div>
    )
  }
}

export default RestoInfo