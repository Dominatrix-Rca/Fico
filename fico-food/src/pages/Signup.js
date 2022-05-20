import React from "react";
import "./signup.css";
import Food from "./food.jpg";
import { TextField } from "@mui/material";
const Signup = () => {
  return (
    <div>
      <div className="main">
        <div className="sub-main">
          <div className="photo">
            <img src={Food} alt="no image" />
          </div>
          
          <div className="text">
            <h1> Create a new account</h1>
            <p> Eat well and happily</p>
            <div className="form">
              <div className="form12">
              <div className="password">
                <TextField id="input" label="E-mail" variant="outlined" />
              </div>
              <div className="password">
                <TextField id="input" label="phone" variant="outlined" />
              </div>
              <div className="password">
                <TextField id="input" label="Password" variant="outlined" />
              </div>
              <div className="email">
                <TextField id="input" label="confrim password" variant="outlined" />
              </div>
              <div className="name">
                <button>SIGNUP</button>
              </div>
              <div className="footer">
                <h5>
                 Arleady have an account? <span>Login</span></h5>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cover">
          <h1><span>Fico-</span>Food</h1>
          <p>Eat well and enjoy our fico-food</p>
      </div>
    </div>
  );
};
export default Signup;
