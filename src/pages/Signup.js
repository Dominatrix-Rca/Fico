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
  phone:"",
  firstName:"",
  lastName:""
})

const handleSignUp = (e)=>{
  e.preventDefault();
  console.log(account.email);
  console.log(account.password);
  console.log(account.phone);
  console.log(account.email);
  api.post("/api/auth/admin/signup",{
    "mobile":account.phone,
    "email":account.email,
    "firstName":account.firstName,
    "lastName":account.lastName,
    "password":account.password
  })
  .then(function (response){
    console.log("response:",response)
    localStorage.setItem("accessToken",response.data.token.accessToken);
    localStorage.setItem("refreshToken",response.data.token.refreshToken);
  })
  .catch(function (error){
    console.log(error)
    const message = error.details; 
    JSON.stringify(message)
  })
}
const handleChange = ({currentTarget:input})=>{
  let account1 = {...account};
  console.log(input.value)
  account1[input.name] = input.value
  account = account1;
  console.log(account)
  setAccount(account);
}
let {phone,email,password,lastName,firstName} = account;
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
                <form onSubmit={(e) => handleSignUp(e)}>
                <div className="password">
                  <TextField id="input" onChange={handleChange} label="E-mail" name="email" value={email} variant="outlined" />
                </div>
                <div className="password">
                  <TextField id="input" onChange={handleChange} label="First Name" name="firstName" value={firstName} variant="outlined" />
                </div>
                <div className="password">
                  <TextField id="input" onChange={handleChange} label="Last Name" name="lastName" value={lastName} variant="outlined" />
                </div>
                <div className="password">
                  <TextField id="input" onChange={handleChange} label="phone" name="phone" value={phone} variant="outlined" />
                </div>
                <div className="password">
                  <TextField id="input"  type="password" onChange={handleChange} label="Password" name="password" value={password} variant="outlined" />
                </div>
                <div className="email">
                  <TextField
                    id="input"
                    onChange={handleChange}
                    value={password} 
                    type="password"
                    label="confrim password"
                    variant="outlined"
                    type="password"
                    name="password"
                  />
                </div>
                <div className="signup">
                  <input type="submit" className="bg-orange-400 border-2 border-orange-400 w-3/4 h-12 text-center text-white rounded-lg " value="SIGN UP"/>
                </div>
                </form>
                <div className="footer">
                  <h5 className="ml-32 ">
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
