import React, { Component } from "react";
import "../css/profilethree.css";
import FormThree from "../components/FormThree";
import RestoInfo from "../components/RestoInfo";
import NavBar from "../components/navBar";
// import Logo from '../Assets/logo.png';

class ProfileThree extends Component {
  render() {
    return (
      <React.Fragment>
      <NavBar />
      <div className="flex flex-row w-10/12  m-auto h-screen justify-between mt-10 ">
        <div className="w-3/12 h-3/6 border-2 border-gray-200 rounded-md ml-4 mt-3 shadow-xl">
          <RestoInfo />
        </div>
        <div className="w-8/12 h-5/6  flex flex-col m-auto rounded-lg border-2 border-gray-200  shadow-xl">
          <FormThree />
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default ProfileThree;
