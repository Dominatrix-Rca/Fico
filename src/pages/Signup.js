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
let [account,setAccount] = useState({
  email:"",
  password:"",
  phone:""
})
const handleSignUp = (e)=>{
  e.preventDefault();
  api.post("/supapp/api/auth/admin/signup",{
    "mobile":account.phone,
    "email":account.email,
    "firstName":"Muhire",
    "lastName":"Ighor",
    "password":account.password
  })
  .then(function (response){
    console.log(response)
    localStorage.setItem("accessToken",response.data.token.accessToken);
    localStorage.setItem("refreshToken",response.data.token.refreshToken);
  })
  .catch(function (error){
    const message = error.response.data.apierror.message
    JSON.stringify(message)
  })
}
const handleChange = ({currentTarget:input})=>{
  let account1 = {...account};
  account1[input.name] = input.value
  account = account1;
  setAccount({account});
}
let {phone,email,password} = account;
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
                  <TextField id="input" onChange={handleChange} label="E-mail" value={email} variant="outlined" />
                </div>
                <div className="password">
                  <TextField id="input" onChange={handleChange} label="phone" value={phone} variant="outlined" />
                </div>
                <div className="password">
                  <TextField id="input" onChange={handleChange} label="Password" value={password} variant="outlined" />
                </div>
                <div className="email">
                  <TextField
                    id="input"
                    onChange={handleChange}
                    value={password}
                    label="confrim password"
                    variant="outlined"
                  />
                </div>
                <div className="signup">
                  <Link to="/"><button className="bg-orange-400 border-2 border-orange-400 w-3/4 h-12 text-white rounded-lg " onClick={handleSignUp}>SIGN UP</button></Link>
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
