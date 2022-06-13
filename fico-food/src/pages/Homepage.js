import React, { Component } from 'react'
import '../css/homepage.css'

class Homepage extends Component {
  render() {
    return (
      <div>
      <div className='container'>
        <div className='intro'>
            <h1>Register Your Restaurant On Fico-Food</h1>
            <p>For Free And Get More Revenue</p>
        </div>
        <div className='image'>
          <img src='https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170'></img>
        </div>

        <div className='buttons'>
        <div className='button-1'>
            <button>Register Your Restaurant</button>
        </div>

        <div className='button-2'>
            <button>Register Your Restaurant</button>
        </div>
        </div>

      </div>
      

    <div className='three'>
      <div>
        <img src='https://images.unsplash.com/photo-1614029951470-ef9eb9952be7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhdGV8ZW58MHx8MHx8&w=1000&q=80'></img>
        <h1>Step 1</h1>
        <p>Register Your Account</p>
      </div>

      <div>
        <img src='https://www.reviewpro.com/wp-content/uploads/2021/07/louis-hansel-wVoP_Q2Bg_A-unsplash-1-scaled.jpg'></img>
        <h1>Step 2</h1>
        <p>Create Your Restaurant<span>Profile and Create <span>Menu Items</span></span></p>
      </div>

      <div>
        <img src='https://images.unsplash.com/photo-1509315703195-529879416a7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRocnV8ZW58MHx8MHx8&w=1000&q=80'></img>
        <h1>Step 3</h1>
        <p>Start Receiving Orders</p>
      </div>

    </div>
    </div>
    )
  }
}

export default Homepage