import React,{useEffect} from 'react';
import { MdAddBox } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { MdOutlineNotificationAdd } from 'react-icons/md';
import { GoPerson } from 'react-icons/go';
import Buttons from './Buttons';
import pic from '../Assets/food.jpg'
import Sidebar from '../components/Sidebar';
import axios from 'axios';

// const data=  axios.get('https://backend.supamenu.rw/supapp/swagger-ui.html#/menu-item-controller/getAllUsingGET_1')
//         data.then(response => {
//             console.log(response.data);
//         })
//         .catch(err => {
//             console.log(err);
//         })
        

const api = axios.create({
    baseURL:"https://backend.supamenu.rw/supapp"
});






export const box = [{
    items: ['kaffir', 'vodka', 'Lemongrass', 'Ginger', 'citrus'],
    selected: 'Tommy-yummy-12.5',
    amount: 'FRW 5,000',
    status:"Drink"
}, {
    items: ['Gin', 'Grenadine', 'Citrus', 'Cucumber'],
    selected: 'Singapore Sling-12.5',
    amount: 'FRW 5,000',
    status:"Starter"

}, {
    items: ['Gin', 'Grenadine', 'Citrus', 'Cucumber'],
    selected: 'Singapore Sling-12.5',
    amount: 'FRW 5,000',
    status:"Appetizer"

}, {
    items: ['Gin', 'Grenadine', 'Citrus', 'Cucumber'],
    selected: 'Singapore Sling-12.5',
    amount: 'FRW 5,000',
    status:"Dessert"
    
},
{
    items: ['Gin', 'Grenadine', 'Citrus', 'Cucumber'],
    selected: 'Singapore Sling-12.5',
    amount: 'FRW 5,000',
    status:"Main"


}
];
const recipes = ['Desert', 'Main', 'Drink', 'Appetizer', 'Starter'];





function Menu() {
    
    const getMenu=()=>{
    
        const data = api.get("/api/menu-items")
        data.then((response)=>{
            console.log(response);
         
            
        })
        data.catch((error)=>{
            console.log(error);
        });
        let answer = data;
        console.log(answer);
        answer.map((ans,index)=>{
            // console.log(ans);   
            
        })

    }
   
    
    return (
        <div className='flex flex-row h-screen w-full bg-white  px-2'>
            <Sidebar active="Menu" />
            <div className='w-5/6  h-screen block ml-64  '>
                <div className=' flex flex-row px-4 h-1/6 py-8 justify-between  '>
                    <p className=' text-2xl font-semibold text-black ml-40 mt-8 '>Menu</p>
                    <div className='left flex flex-row px-8 justify-around'>
                        <FiSearch className='mr-4 text-xl mt-1   text-indigo-400' />
                        <MdOutlineNotificationAdd className='text-xl mr-4 mt-1 text-indigo-400' />
                        <p className='text-xl font-normal  ml-8 '>Mugabo Javis</p>
                        <GoPerson className='mr-4 text-xl mt-1 ml-4   outline-indigo-100' />

                    </div>



                </div>
                <div className=' block w-5/6 bg-white shadow-xl shadow-indigo-xl h-6/6 ml-40'>
                    <div className='flex flex-row ml-8 space-x-4 space-y-6'>
                        <p className='text-xl font-semibold text-black ml-6 mr-12 mt-8'>Menus</p>

                        <Buttons activity="Drinks" />


                    </div>


                    <div className='flex flex-row justify-around'>
                        <div className='block space-y-4  py-3 px-2 w-8/12 h-5/6 '>
                            {box.map((wer,index) => {

                                return (

                                    <div key={index} className='bg-[FCF8F8]  border-3 p-2 border-indigo-70 rounded-lg text-center flex flex-row w-6/6 h-24 shadow-md shadow-indigo-100'>
                                        <div className='w-3/12 h-full'>
                                            <img src={pic} className=' w-full h-full ml-1 rounded-xs object-cover rounded-lg' alt="food" />
                                        </div>
                                        <div className='  h-10 space-x-1 w-full  pl-4  flex flex-col items-start justify-start'>{}
                                            <p className='block  w-3/4  text-gray-500 text-xs items-stretch text-left tracking-wide object-scale-down ' >{wer.items + " "}</p>
                                            <p className='block  text-black font-semibold text-md' >{wer.selected}</p>
                                            <p className='block  text-orange-400 font-semibold text-md text-stretch  ' >{wer.amount}</p>
                                        </div>
                                    </div>
                                )

                            })}


                        </div>
                        <div className='block  border-2 h-4/6 shadow-md shadow-indigo-100 mt-4 w-3/12'>
                            <p className='font-semibold text-xl text-left pl-6  h-1/6'>Add Item</p>
                            <div className='flex flex-row justify-between pt-2 mr-2 h-1/6'>
                                <input className='text-xl text-black  pl-6 bg-white focus:ring-indigo-100 border-1 border-indigo-100 mb-2 ' placeholder='Create new menu item' />

                                <MdAddBox className='text-indigo-200 text-3xl mr-2 mt-3 hover:cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300' />
                            </div>
                            <div className="grid grid-cols-1 divide-y space-y-1 pt-1 h-4/6">
                                {

                                    recipes.map((ing, index) => {
                                        if (index === 2) {

                                            return (


                                                <div key={index} className='flex flex-row justify-left px-6 '>


                                                  
                                                     <input type="checkbox" />

                                                    <div className='text-xl' key={index}>{ing}</div>
                                                </div>
                                            )
                                        }
                                        else {
                                            return (
                                                <div  className='flex flex-row justify-left px-6 '>

                                                    {/* <BsCircle className='text-indigo-400  mt-2 mr-4 ' /> */}
                                                    <input type="checkbox"  />


                                                    <div className='text-xl' key={index}>{ing}</div>
                                                </div>

                                            )
                                        }
                                    })
                                }




                            </div>





                        </div>




                    </div>

                </div>
            </div>
        </div>
    )
};


export default Menu;