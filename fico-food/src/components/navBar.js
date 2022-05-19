import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import profile from "../profile.png";
import logo from "../logo.png";
class NavBar extends Component {
    render() { 
        return (
            <div className="h-14 flex flex-row justify-between bg-white border-b-2 border-b-gray-200 font-sans shadow-lg">
                <div className="bg-white w-3/12 h-2  ml-20 mt-3">
                   <img src={logo} alt="logo" className="w-4/12 h-8"/>
                </div>
                <div className="w-4/12 h-full  mr-4 flex flex-row items-center justify-center">
                 <FontAwesomeIcon icon={faSearch} className="text-orange-300 mr-6" />
                 <FontAwesomeIcon icon={faBell} className="text-orange-300 mr-6"/>
                 <p>Chef Laurent</p>
                 <img src={profile} alt="profile" className="h-12 ml-4" />
                </div>
            </div>
        );
    }
}
 
export default NavBar;