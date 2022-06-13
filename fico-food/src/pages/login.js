import React from "react";
import "../css/Login.css";
import Food from "../Assets/food.jpg";
import {TextField} from "@mui/material"
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <div>
      <div className="main1">
        <div className="sub-main">
          <div className="photo">
            <img src={Food} alt="no image" />
          </div>
          
          <div className="text">
            <h1> Welcome back again</h1>
            <p className="paras"> Eat well and happily</p>
            <div className="form">
              <div className="form12">
              <div className="password">
                <TextField id="input" label="E-mail" variant="outlined" />
              </div>
              <div className="password">
                <TextField id="input" label="Password" variant="outlined" />
              </div>
              
              <div className="login">
               <Link to="/"> <button className="button">LOGIN</button></Link>
              </div>
              <div className="footer">
                <h5>
                 Don't have an account here? <Link to="/signup">Signup</Link></h5>
                 </div>
            
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="cover">
          <h1><span>Fico-</span>Food</h1>
          <p className="paras">Eat well and enjoy and happily</p>
      </div>
    </div>
  );
};
export default Login;
