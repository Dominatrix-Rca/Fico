import React, { Component } from 'react'
import {FaBell} from "react-icons/fa"
import {FaSearch } from 'react-icons/fa'
class Person extends Component {
  render() {
    return (
      <div>
        <div className='profile'>
                <img src='https://avatarfiles.alphacoders.com/115/115265.png'></img>
                <h3>Jane Doe</h3>
                <FaSearch className='search'/>
                <FaBell className='bell' />
        </div>
      </div>
    )
  }
}

export default Person