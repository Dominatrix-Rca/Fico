import React from 'react';
// import { FaRegBell } from "react-icons/fa";
// import { FiMoreVertical} from "react-icons/fa";
import {FiPlusCircle} from "react-icons/fi";
import {FiMoreVertical} from "react-icons/fi";
import {FiEye} from "react-icons/fi";
import "../../css/overview.css";
import Sidebar from './Sidebar.js';
import OverviewFun from './overviewFun';



function Overview(){
    return(
     <div>
         <div className="container">
            <div className="sub-container">
                <label className="new-client">New client</label><br></br>
                <input type="text" placeholder="New client" className="new"></input><FiPlusCircle className="plus"/>
                {<div className="side-bar">
                  <Sidebar/>
                </div> }
                <div className="main">
                    <p className="sort">Sort</p>
                    <p className="filter">Filter</p>
                    <h3 className="all-clients">All Clients</h3>
                    <table>
                        <tbody>
                            <th>Client details</th>
                            <th>Sales</th>
                            <th>Detailed reports</th>
                            <th>Categories</th>
                        </tbody>
                        <tbody>
                            <td >Soya restaurant<br></br><p>Updated 1 day ago</p></td>
                            <td>1256789 frw<br></br><p>On 22/12/022</p></td>
                            <td><FiEye className="eye"/></td>
                            <td><button className="resto">Resto</button></td>
                            <td><FiMoreVertical/></td>
                        </tbody>
                        <tbody>
                            <td>Soya restaurant<br></br><p>Updated 1 day ago</p></td>
                            <td>1256789 frw<br></br><p>On 22/12/022</p></td>
                            <td><FiEye className="eye"/></td>
                            <td><button className="resto">Resto</button></td>
                            <td><FiMoreVertical/></td>
                        </tbody>
                        <tbody>
                            <td>Soya restaurant<br></br><p>Updated 1 day ago</p></td>
                            <td>1256789 frw<br></br><p>On 22/12/022</p></td>
                            <td><FiEye className="eye"/></td>
                            <td><button className="resto">Resto</button></td>
                            <td><FiMoreVertical/></td>
                        </tbody>
                        <tbody>
                            <td>Soya restaurant<br></br><p>Updated 1 day ago</p></td>
                            <td>1256789 frw<br></br><p>On 22/12/022</p></td>
                            <td><FiEye className="eye"/></td>
                            <td><button className="resto">Resto</button></td>
                            <td><FiMoreVertical/></td>
                        </tbody>
                        <tbody>
                            <td>Soya restaurant<br></br><p>Updated 1 day ago</p></td>
                            <td>1256789 frw<br></br><p>On 22/12/022</p></td>
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