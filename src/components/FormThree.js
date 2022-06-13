import React, { Component } from "react";
import Buttons from '../pages/Buttons';
import {IoMdAdd} from 'react-icons/io';
const buttons = ["Drink", "Starter", "Appetizer", "Dessert", "Main"];

class FormTwo extends Component {
  render() {
    return (
      <div className="flex flex-col h-5/6">
        <div
          id="available"
          className="flex flex-row w-10/12 h-12 mt-8 m-auto -ml-6 justify-around " 
        >
        <Buttons></Buttons>
        </div>
        <div className="h-5/6 mt-10 ml-16 ">
          <div className="flex flex-col h-1/6 mb-10 w-4/6  justify-around">
            <label className="font-bold font-sans ">Name</label>
            <input className="focus:outline-none transition border-b-2 border-gray-200 py-2" type="text" placeholder="Menu Name"></input>
          </div>
          <div className="flex flex-col h-1/6 mb-10 w-4/6  justify-around">
            <label className="font-bold font-sans">Price</label>
            <input className="focus:outline-none border-b-2 border-gray-200 py-2" type="text" placeholder="RWF"></input>
          </div>
          <div className="flex flex-col h-1/6 mb-10 w-4/6  justify-around">
            <label className="font-bold font-sans">Menu Description</label>
            <input className="focus:outline-none border-b-2 border-gray-200 py-2" type="text" placeholder="Ingredients.."></input>
          </div>
          <div className="flex flex-col h-1/6 mb-4 w-4/6  justify-around">
            <label className="font-bold font-sans ">Image</label>
            <input className="focus:outline-none  border-b-2 border-black-100" type="file"></input>
          </div>
          <div className="flex flex-row items-center w-4/12 justify-around mb-8">
       <button className="w-32 ml-12 h-12 bg-white ring ring-orange-400 text-black  ">Add More</button>
       <IoMdAdd className="text-5xl bg-white text-orange-400 mt-2 "/>


          </div>

        </div>
      </div>
    );
  }
}

export default FormTwo;
