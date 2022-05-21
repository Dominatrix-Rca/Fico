import React from 'react';
import {AiOutlineApartment} from 'react-icons/ai';
import {IoIosSettings} from 'react-icons/io';
import {HiUserGroup} from 'react-icons/hi';
import {FaTicketAlt} from 'react-icons/fa';
import {AiFillPieChart} from 'react-icons/ai';

function Sidebar(){
    return (
        <div className='  w-1/6 bg-black h-screen fixed right-0 rounded-xs'>
        <p className="flex flex-row justify-start ml-4 items-center pt-12 ">
            <span className="text-orange-400 text-2xl font-bold tracking-wider">Fico-</span>
            <span className=" text-white text-2xl font-bold tracking-wider">Food</span>
        </p>
        <div className="block mt-4 pt-4">



            <div className="flex flex-row ml-4 h-4 w-3/4 my-8 h-8 justify-start hover:border-l-4 border-orange-300 space-x-6">
                <AiFillPieChart className='text-white text-xl mt-2 ml-2' />
                <p className=" text-white text-xl text-center font-sansserif font-semibold  mt-1 hover:cursor-pointer ">Overview</p>


            </div>
            <div className="flex flex-row ml-4  h-4 w-3/4 my-8 h-8 justify-start space-x-6 hover:border-l-4 border-orange-300" >
                <FaTicketAlt className='text-gray-100 opacity-25 text-xl mt-2 ml-2 ' />
                <p className='text-gray-100 opacity-25  text-xl text-center font-sansserif font-semibold  mt-1 hover:text-white hover:opacity-70 hover:cursor-pointer'>Clients</p>


            </div>
            <div className="flex flex-row ml-4  h-4 w-3/4 my-8 h-8 justify-start space-x-6 hover:border-l-4 border-orange-300" >
                <HiUserGroup className='text-gray-100 opacity-25 text-xl mt-2 ml-2' />
                <p className="text-gray-100 opacity-25 text-xl text-center font-sansserif font-semibold  mt-1 hover:text-white hover:opacity-70 hover:cursor-pointer">Users</p>

            </div>





        </div>
        <div className="block mt-8 py-4">



            <div className="flex flex-row ml-4 h-4 w-3/4 my-8 h-8 justify-start space-x-6 hover:border-l-4 border-orange-300">
                <IoIosSettings className='text-gray-100 opacity-25 text-xl mt-2 ml-2' />
                <p className='text-gray-100 opacity-25  text-xl text-center font-sansserif font-semibold  mt-1 hover:text-white hover:opacity-70 hover:cursor-pointer'>Settings</p>

            </div>
            <div className="flex flex-row ml-4  h-4 w-3/4 my-8 h-8 justify-start space-x-6 hover:border-l-4 border-orange-300 hover:bg-black   " >
                <AiOutlineApartment className='text-gray-100 opacity-25  text-xl text-xl mt-2 ml-2 ' />

                <p className='text-gray-100 opacity-25  text-xl text-center font-sansserif font-semibold  mt-1 hover:text-white hover:text-white hover:opacity-70 hover:cursor-pointer '>My account</p>

            </div>




        </div>
    </div>

    )
}
export default Sidebar;