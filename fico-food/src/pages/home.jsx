import React, { Component } from 'react';
import profile from "../Assets/profile.png";
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../Assets/logo.png";
class Home extends Component {
    render() { 
        return (
            <React.Fragment>
            <div className="h-16 w-full bg-black text-white">
            <div className="h-4/6 sticky top-0 flex flex-row justify-between bg-black border-b-2 border-b-gray-200 font-sans shadow-lg">
                <div className="bg-white w-3/12 h-2  ml-20 mt-3">
                   <img src={logo} alt="logo" className="w-4/12 h-8 bg-black"/>
                </div>
                <div className="w-4/12 h-full  mr-4 flex flex-row items-center justify-center">
                 <FontAwesomeIcon icon={faSearch} className="text-orange-300 mr-6" />
                 <FontAwesomeIcon icon={faBell} className="text-orange-300 mr-6"/>
                 <p>Chef Laurent</p>
                 <img src={profile} alt="profile" className="h-12 ml-4" />
                </div>
            </div>
            </div>
            </React.Fragment>
        );
    }
}
 
export default Home;