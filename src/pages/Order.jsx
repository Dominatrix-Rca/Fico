import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineNotificationAdd } from 'react-icons/md';
import { GoPerson } from 'react-icons/go';
import { BsStars } from 'react-icons/bs';
import pic from '../Assets/food.jpg';
import { BsCheckCircleFill } from 'react-icons/bs';
import { MdAddBox } from 'react-icons/md';
import { BsCircle } from 'react-icons/bs';
import Sidebar from '../components/Sidebar';
import './order.css';
const boxer = [
    {
        item: 'Order1',
        products: {
            food: ['chicken', 'Wine', 'chips', 'Mango', 'cockTail'],
            client: 'Eden Cabello'
        },
        amount: {
            quantity: 'frw 20000',
            person: 'Guest',
            date: ' 25-01 on Date'
        }
    },
    {
        item: 'Order2',
        products: {
            food: ['chicken', 'Wine', 'chips', 'Mango', 'cockTail'],
            client: 'Cynthia'
        },
        amount: {
            quantity: 'frw 20000',
            person: 'Guest',
            date: ' 25-01 on Date'
        }
    },
    {
        item: 'Order3',
        products: {
            food: ['chicken', 'Wine', 'chips', 'Mango', 'cockTail'],
            client: 'Aline'
        },
        amount: {
            quantity: 'frw 20000',
            person: 'Guest',
            date: ' 25-01 on Date'
        }
    },
    {
        item: 'Order4',
        products: {
            food: ['chicken', 'Wine', 'chips', 'Mango', 'cockTail'],
            client: 'Zesta'
        },
        amount: {
            quantity: 'frw 20000',
            person: 'Guest',
            date: ' 25-01 on Date'
        }
    },
    {
        item: 'Order5',
        products: {
            food: ['chicken', 'Wine', 'chips', 'Mango', 'cockTail'],
            client: 'Ighor'
        },
        amount: {
            quantity: 'frw 20000',
            person: 'Guest',
            date: ' 25-01 on Date'
        }
    }
];
const options = [{
    name: 'Delivered', percentages: '88%'
}, {
    name: 'Rejected',
    percentages: "0.1%"

}, {
    name: 'All', percentages: '98%'
}];
const recipes = ['Desert', 'Main', 'Drink', 'Appetizer', 'Starter'];
function Order() {
    return (
        <div className='app xl:w-full sm:w-[600px] flex flex-col bg-white'>
            <Sidebar active="Orders" className='sm:w-[150px]' />
            <div className='xl:w-5/6 sm:w-2/6 bg-white h-screen block xl:ml-40 sm:ml-20      '>
                <div className='header flex xl:flex-row xl:px-4 sm:px-2 h-1/6 xl:py-8 sm:py-4 justify-between  '>
                    <p className='menu xl:text-2xl sm:text-xl font-semibold text-black xl:ml-40 xl:mt-8 sm:mt-4 sm:ml-20'>Orders</p>
                    <div className='left flex flex-row xl:px-8 sm:px-4 justify-around'>
                        <FiSearch className='xl:mr-4 sm:mr-2 text-xl mt-1   text-indigo-400' />
                        <MdOutlineNotificationAdd className='text-xl xl:mr-4  sm:mr-2 mt-1 text-indigo-400' />
                        <p className='text-xl font-normal  xl:ml-8 sm:ml-4'>Mugabo Javis</p>
                        <GoPerson className='xl:mr-4 sm:mr-2 text-xl mt-1 xl:ml-4 sm:ml-4   outline-indigo-100' />
                    </div>
                </div>
                <div className='xl:w-5/6 md:w-2/6 bg-white-200 h-4/6 xl:ml-40 sm:ml-20 flex flex-row  space-x-1  '>
                    <div className='xl:w-4/6 sm:w-2/6 block space-y-4 xl:pt-4 sm:pt-2 h-2/4 xl:mr-4 sm:mr-2 sticky bottom-2'>
                        {boxer.map((boxes, index) => {
                            return (
                                <div key={index} className='xl:bg-[FCF8F8] w-12/12   flex  xl:mx-4 sm:mx-2 h-3/6   rounded-lg items-center xl:space-x-6 sm:space-x-3 justify-center border-2 border-[FCF8F8] shadow-md shadow-indigo-200 responsives'>
                                    <div className=' xl:w-2/12 sm:w-1/12 h-28'>
                                        <img src={pic} className='xl:w-full sm:w-1/2 h-3/4 ml-1 rounded-xs object-cover rounded-lg mt-4' />
                                    </div>
                                    <div className='order w-[550px] h-32 flex justify-center pt-12'>
                                        <p className='text-xl font-lightheir text-orange-400'>{boxes.item}</p>
                                    </div>
                                    <div className='block h-full w-5/12  pt-8 space-y-1'>
                                        <p className='text-base text-gray-500 h1/4'>{boxes.products.food}</p>
                                        <p className='text-md text-black  text-left relative h-1/4 ml-8'> {boxes.products.client}</p>
                                        <div className='flex flex-row justify-evenly absolute object-fit-scale-down h-1/4 ml-8  '>
                                            <BsStars className='text-orange-500' />
                                            <div className='amount '>
                                                <p className='text-base font-black text-black'>Table</p>
                                            </div>
                                            <BsStars className='text-orange-500' />
                                        </div>
                                    </div>
                                    <div className='block h-full xl:w-5/6 sm:w-2/6 pt-4'>
                                        <p className='xl:text-2xl sm:text-xl font-black text-orange-400'>{boxes.amount.quantity}</p>
                                        <p className='text-base font-black text-black'>{boxes.amount.person}</p>
                                        <p className='text-xs text-black xl:w-12/12 sm:w-6/12'>
                                            <span className='xl:text-xl sm:text-md text-orange'>June</span>
                                            <span className='text-black'> {boxes.amount.date}</span>
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='xl:w-2/5  sm:w-1/5 h-5/8  bg-black block space-x-1 space-y-2'>
                        <div class="grid grid-cols-1 divide-y  divide-black  bg-white shadow-md shadow-indigo-100 space-y-4 pt-12">
                            {options.map((opt, index) => {
                                return (
                                    <div key={index} className='flex flex-col justify-center xl:px-36 sm:px-18 space-y-4 '>
                                        <div className='xl:text-2xl sm:text-xl text-gray-700 ' key={index}>{opt.name}</div>
                                        <div className='xl:text-2xl sm:text-xl text-gray-700 xl:ml-6 md:ml-3 font-semibold' key={index}>{opt.percentages}</div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='block  xl:border-2 sm:border-1 h-4/6 shadow-md shadow-indigo-100 mt-4'>
                            <p className='font-semibold xl:text-xl sm:text-md text-left xl:pl-6 sm:pl-3 h-1/6'>Add Item</p>
                            <div className='flex flex-row justify-between pt-2 xl:mr-2 sm:mr-1 h-1/6'>
                                <input className='text-xl text-black  xl:pl-6 md:pl-3  bg-white focus:ring-indigo-100 border-1 border-indigo-100 mb-2 ' placeholder='Create new menu item' />
                                <MdAddBox className='text-indigo-200 text-3xl xl:mr-2 sm:mr-1 mt-3 hover:cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300' />
                            </div>
                            <div class="grid grid-cols-1 divide-y space-y-1 pt-1 h-4/6">
                                {recipes.map((ing, index) => {
                                    if (index === 2) {
                                        return (
                                            <div key={index} className='flex flex-row justify-left xl:px-6 sm:px-3 '>
                                                < BsCheckCircleFill className='text-orange-500 mt-2 sm:mr-2 xl:mr-4' />
                                                <div className='text-xl' key={index}>{ing}</div>
                                            </div>
                                        )
                                    }
                                    else {
                                        return (
                                            <div className='flex flex-row justify-left xl:px-6 sm:px-3 '>
                                                <BsCircle className='text-indigo-400  mt-2 xl:mr-4 sm:mr-2 ' />
                                                <div className='text-xl' key={index}>{ing}</div>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Order;