import React,{useState} from "react";
import "../css/Login.css";
import Food from "../Assets/food.jpg";
import {TextField} from "@mui/material"
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const api = axios.create({
    baseURL:'https://backend.supamenu.rw'
  })
  
  let[account,setAccount] = useState({email:"",password:""});
  const handleChange = ({currentTarget:input}) =>{
       console.log(input.name)
       let account1 = {...account};
       account1[input.name] = input.value
       account = account1
       setAccount({account})
  }
  const loginHandler = (event)=>{
  event.preventDefault();
  // const data = {
  //   email:account.email,
  //   password:account.password,
  // }
  api.post("/supapp/api/auth/signin",{
    "login":account.email,
    "password":account.password
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
            <img src={Food} alt="no image" />
          </div>
          
          <div className="text">
            <h1> Welcome back again</h1>
            <p className="paras"> Eat well and happily</p>
            <div>
              <div className="form12">
              <div className="password">
                <TextField id="input" name="email" label="E-mail" value={account.email} variant="outlined" onChange={handleChange} />
              </div>
              <div className="password">
                <TextField id="input" name="password" value={account.password} label="Password" variant="outlined" onChange={handleChange} />
              </div>
              
              <div className="login">
               <Link to="/overview"> <button className="button" onClick={loginHandler}>LOGIN</button></Link>
              </div>
              <div className="footer">
                <h5 className="ml-32">
                 Don't have an account here? <Link to="/signup" className="text-orange-400 hover:underline hover:cursor-pointer">Signup</Link></h5>
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
