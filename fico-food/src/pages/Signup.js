import React from "react";
import "../css/signup.css";
import Food from "../Assets/food.jpg";
import { Link} from "react-router-dom";
import { TextField } from  "@mui/material";  
const Signup = () => {
  return (
    <div>
      <div className="main">
        <div className="sub-main">
          <div className="photo">
            <img src={Food} alt="food" />
          </div>

          <div className="text">
            <h1> Create a new account</h1>
            <p className="paras"> Eat well and happily</p>
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
                  <TextField
                    id="input"
                    label="confrim password"
                    variant="outlined"
                  />
                </div>
                <div className="name">
                <Link to="/"><button>SIGNUP</button></Link>
                </div>
                <div className="footer">
                  <h5>
                    Arleady have an account? <Link to="/login">Login</Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cover">
        <h1>
          <span>Fico-</span>Food
        </h1>
        <p className="paras">Eat well and enjoy our fico-food</p>
      </div>
    </div>
  );
};
export default Signup;
