import React from 'react';
import {FaBell} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import {FiPlusCircle} from "react-icons/fi";
import {FiMoreVertical} from "react-icons/fi";
import {FiEye} from "react-icons/fi";
import "../css/overview.css";
// import profile from "../overview/components/Assets/profile.png";
import Sidebar from '../components/Sidebar';


function Overview(){

    

    return(
     <div>
        <Sidebar active="Overview"/>
         <div className="container">
            <div className="sub-container">
                <label className="new-client">New client</label><br></br>
                <input  type="text" placeholder="New client" className="new"></input><FiPlusCircle className="plus"/>
                 <div className="side-bar">
                </div>  
                <h2 className="h2">Overview</h2>
                <p className="name">Jacques Kagabo</p>
                <FaSearch className="search"/>
                <FaBell className="bell"/>
                {/* <img src={profile} alt="profile" className="h-12 ml-4" /> */}
                <div className="main-div">
                    <p  className="p"id="sort">Sort</p>
                    <p  className="p" id="filter">Filter</p>
                    <h3 className="all-clients">All Clients</h3>
                       

                    <table>
                        <tbody>
                            <th>Client details</th>
                            <th>Sales</th>
                            <th>Detailed reports</th>
                            <th>Categories</th>
                        </tbody>
                        <tbody>
                            <td >Soya restaurant<br></br><p className="p">Updated 1 day ago</p></td>
                            <td>1256789 frw<br></br><p className="p">On 22/12/022</p></td>
                            <td><FiEye className="eye"/></td>
                            <td><button className="resto">Resto</button></td>
                            <td><FiMoreVertical/></td>
                        </tbody>
                        <tbody>
                            <td>Soya restaurant<br></br><p className="p">Updated 1 day ago</p></td>
                            <td>1256789 frw<br></br><p className="p">On 22/12/022</p></td>
                            <td><FiEye className="eye"/></td>
                            <td><button className="resto">Resto</button></td>
                            <td><FiMoreVertical/></td>
                        </tbody>
                        <tbody>
                            <td>Soya restaurant<br></br><p className="p">Updated 1 day ago</p></td>
                            <td>1256789 frw<br></br><p className="p">On 22/12/022</p></td>
                            <td><FiEye className="eye"/></td>
                            <td><button className="resto">Resto</button></td>
                            <td><FiMoreVertical/></td>
                        </tbody>
                        <tbody>
                            <td>Soya restaurant<br></br><p className="p">Updated 1 day ago</p></td>
                            <td>1256789 frw<br></br><p className="p">On 22/12/022</p></td>
                            <td><FiEye className="eye"/></td>
                            <td><button className="resto">Resto</button></td>
                            <td><FiMoreVertical/></td>
                        </tbody>
                        <tbody>
                            <td>Soya restaurant<br></br><p className="p">Updated 1 day ago</p></td>
                            <td>1256789 frw<br></br><p className="p">On 22/12/022</p></td>
                            <td><FiEye className="eye"/></td>
                            <td><button className="resto">Resto</button></td>
                            <td><FiMoreVertical/></td>
                        </tbody>
                    </table>
                </div>
            </div>
         </div>
     </div>
    )
}
export default Overview;