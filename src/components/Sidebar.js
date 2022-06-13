import React ,{useState}from 'react';
import {AiOutlineApartment} from 'react-icons/ai';
import {IoIosSettings} from 'react-icons/io';
import {HiUserGroup} from 'react-icons/hi';
import {FaTicketAlt} from 'react-icons/fa';
import {AiFillPieChart} from 'react-icons/ai';
import Links from './Links';

const data = [{icons:<AiFillPieChart />,label:"Overview",status:"Inactive"},{icons:<FaTicketAlt />,label:"Clients",status:"Inactive"},{icons:<HiUserGroup />,label:"Menu",status:"Active"},{icons:<HiUserGroup />,label:"Orders",status:"Active"},{icons:<IoIosSettings/>,label:"Settings",class:"Inactive"},{icons:<AiOutlineApartment/>,label:"My Account",status:"Inactive"}]

function Sidebar({active}){
    const activity= 'flex flex-row space-x-8 ml-8 items-center text-gray-600 text-xl text-center font-sansserif font-semibold  mt-1 hover:border-l-4 border-orange-300 hover:cursor-pointer';
    const activeClass = "flex flex-row text-white space-x-8 ml-8  items-center text-xl text-center font-sansserif font-semibold  mt-1 hover:border-l-4 border-orange-300 hover:cursor-pointer border-l-4 border-orange-500";
    const overViewclass = "flex flex-row space-x-8 ml-8 items-center text-gray-600 text-xl text-center font-sansserif font-semibold  mt-1 hover:border-l-2 border-orange-300 hover:cursor-pointer";
    return (
        <div className='  w-1/6 bg-black h-screen fixed rounded-xs'>
        <p className="flex flex-row justify-start ml-4 items-center pt-12 ">
            <span className="text-orange-400 text-2xl font-bold tracking-wider">Fico-</span>
            <span className=" text-white text-2xl font-bold tracking-wider">Food</span>
        </p>
      
            <div className="flex flex-col  h-4 w-3/4 my-8  justify-start items-middle space-y-8  ">
  
                {data.map((dat,index)=>{
                    if(dat.label!="Overview"&&dat.label!="Settings"&&dat.label!="My Account"){

                        return(
                           <Links key={index} icon={dat.icons} label={dat.label} classn={dat.label === active ? activeClass : activity} />
                        )
                    }
                    else{
                        return(
                           <Links key={index} icon={dat.icons} label={dat.label} classn={dat.label === active ? activeClass : overViewclass} />

                        )
                    }
                })
                

                }


            </div>
         





        
    
    </div>

    )
}
export default Sidebar;