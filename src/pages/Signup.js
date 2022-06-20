import React, { useState } from "react";
import "../css/signup.css";
import Food from "../Assets/food.jpg";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import axios from 'axios';
const Signup = () => {
  const api = axios.create({
    baseURL:'https://backend.supamenu.rw/supapp'
  })
let [account,setAccount] = useState({
  email:"",
  password:"",
  phone:""
})
const handleSignUp = (e)=>{
  e.preventDefault();
  api.post("/api/auth/admin/signup",{
    "mobile":account.phone,
    "email":account.email,
    "firstName":"Muhire",
    "lastName":"Ighor",
    "password":account.password
  })
  .then(function (response){
    // console.log(account.phone)
    console.log(response);
    localStorage.setItem("accessToken",response.data.token.accessToken);
    localStorage.setItem("refreshToken",response.data.token.refreshToken);
  })
  .catch(function (error){
    // const message = error.response.data.apierror.message;
    console.log(error);
    // JSON.stringify(message)
  })
}
const handleChange = ({currentTarget:input})=>{
  let account1 = {...account};
  // console.log(account1);
  account1[input.name] = input.value
  account = account1;
  setAccount(account);
  // console.log(account);
}
let {phone,email,password} = account;
  return (
    <div>
      <div className="main1">
        <div className="sub-main">
          <div className="photo">
            <img src={Food} alt="food" />
          </div>
          <form onSubmit={(e)=>{
            handleSignUp(e)}}>

          <div className="text">
            <h1> Create a new account</h1>
            <p className="paras"> Eat well and happily</p>
            <div >
              <div className="form12">
                <div className="password">
                  <TextField id="input" onChange={handleChange} name="email"  label="E-mail" value={email} variant="outlined" />
                </div>
                <div className="password">
                  <TextField id="input" onChange={handleChange}  name="phone" label="phone" value={phone} variant="outlined"  />
                </div>
                <div className="password">
                  <TextField id="input" onChange={handleChange} label="Password" name="password" value={password} variant="outlined" type="password" />
                </div>
                <div className="email">
                  <TextField
                    id="input"
                    onChange={handleChange}
                    value={password}
                    label="confrim password"
                    variant="outlined"
                    type="password"
                    name="password"
                  />
                </div>
                <div className="signup">
                  <input className="bg-orange-400 border-2 border-orange-400 w-3/4 h-12 text-white rounded-lg " type="submit" value="SignUp" />
                </div>
                <div className="footer">
                  <h5 className="ml-32">
                    Arleady have an account? <Link to="/login" className="text-orange-400 hover:underline hover:cursor-pointer">Login</Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          </form>

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
