import React from "react";
import "../css/Login.css";
import Food from "../Assets/food.jpg";
// import { TextField } from "@mui/material";
const Login = () => {
  return (
    <div>
      <div className="main">
        <div className="sub-main">
          <div className="photo">
            <img src={Food} alt="no image" />
          </div>
          
          <div className="text">
            <h1> Welcome back again</h1>
            <p> Eat well and happily</p>
            <div className="form">
              <div className="form12">
              <div className="password">
                {/* <TextField id="input" label="E-mail" variant="outlined" /> */}
              </div>
              <div className="password">
                {/* <TextField id="input" label="Password" variant="outlined" /> */}
              </div>
              
              <div className="name">
                <button>LOGIN</button>
              </div>
              <div className="footer">
                <h5>
                 Don't have an account here? <span>Signup</span></h5>
                 </div>
            
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="cover">
          <h1><span>Fico-</span>Food</h1>
          <p>Eat well and enjoy and happily</p>
      </div>
    </div>
  );
};
export default Login;
