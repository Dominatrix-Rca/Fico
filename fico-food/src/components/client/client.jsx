import React from 'react';
import '../../css/client.css';
// import {useNavigate} from 'react-router-dom';
import {Link} from "react-router-dom"
// import Overview from './overview';

const Client =()=>{
  return (
  <div>
    <div className="container">
      <div className="left-side">
        <h1 className="h1"><span>Fico-</span>Food</h1>
      </div>
       <div className="right-side">
       <h3 className='h3'>Client</h3>
        <div className="content">
          <label className="label">Client</label><br></br>
          <input type="text" className="input" placeholder="Client Name"></input>
        </div>
        <div className="content">
          <label className="label">Category</label><br></br>
          <input type="text" className="input" placeholder="Choose a category"></input>
        </div>
        <div className="content">
          <label className="label">Representative</label><br></br>
          <input type="text" className="input" placeholder="Names"></input>
        </div>
        <div className="content">
          <label className="label">Date of creation</label><br></br>
          <input type="text" className="input" placeholder="Month & year"></input>
        </div>
        <div className="content">
          <label className="label">Address</label><br></br>
          <input type="text" className="input" placeholder="Province, District, Sector, Cell"></input>
        </div>
        <div className="content">
          <label className="label">Email</label><br></br>
          <input type="text" className="input" placeholder="Email"></input>
        </div>
        <div className="content">
          <label className="label">Phone</label><br></br>
          <input type="text" className="input" placeholder="Phone"></input>
        </div>
        <div className="content">
          <label className="label">Bank Account(IBAN)</label><br></br>
          <input type="text" className="input" placeholder="Bank account"></input>
        </div>
        <Link to="/overview">
               <button type="submit" className="add-client" >Add client</button>
               </Link>
      </div>
    </div>
               {/* <Link to="/overview">
               <button type="submit" className="add-client" >Add-client</button>
              </Link> */}
            
          </div>
    
  )
  }


export default Client;
