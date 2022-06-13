import React from 'react';
import {Link} from 'react-router-dom';
// import {AiOutlineApartment} from 'react-icons/ai';
// import {IoIosSettings} from 'react-icons/io';
// import {HiUserGroup} from 'react-icons/hi';
// import {FaTicketAlt} from 'react-icons/fa';
// import {AiFillPieChart} from 'react-icons/ai';
function Links({icon,label,classn}){

    return(
        <div className={classn}>
            <div>{icon}</div>
            
            
           <Link to ={`/${label.toLowerCase()}`} ><li className='list-none'>{label}</li></Link> 
        </div>
    )








}
export default Links;