import React, { useState } from "react";
import "../css/signup.css";
import Food from "../Assets/food.jpg";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import axios from 'axios';
const Signup = () => {
const api = axios.create({
  baseURL:'https://backend.supamenu.rw'
})

const[email,setEmail] = useState("");
const[password,setPassword] = useState("");
const loginHandler = (event)=>{
event.preventDefault();
const data = {
  email:email,
  password:password,
}
api.post("/supapp/api/auth/signin",{
  "login":email,
  "password":password
})
.then(function (response){
  localStorage.setItem("accessToken",response.data.token.accessToken);
  localStorage.setItem("refreshToken",response.data.token.refreshToken);

  
})
.catch(function (error){
  const message = error.response.data.apierror.message
  JSON.stringify(message)
})


}


  return (
    <div>
      <div className="main1">
        <div className="sub-main">
          <div className="photo">
            <img src={Food} alt="food" />
          </div>

          <div className="text">
            <h1> Create a new account</h1>
            <p className="paras"> Eat well and happily</p>
            <div >
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
                <div className="signup">
                  <Link to="/"><button className="bg-orange-400 border-2 border-orange-400 w-3/4 h-12 text-white rounded-lg ">SIGN UP</button></Link>
                </div>
                <div className="footer">
                  <h5 className="ml-32">
                    Arleady have an account? <Link to="/login" className="text-orange-400 hover:underline hover:cursor-pointer">Login</Link>
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
