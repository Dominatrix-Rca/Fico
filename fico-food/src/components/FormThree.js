import React, { Component } from "react";

class FormTwo extends Component {
  render() {
    return (
      <div className="flex flex-col h-5/6">
        <div
          id="available"
          className="flex flex-row w-10/12 h-12 mt-8 m-auto  items-center justify-around" 
        >
          <div className="bg-orange-500 w-2/12 shadow-md text-white h-5/6  text-center  rounded-md">
            <h4>Menu</h4>
          </div>
          <div className=" w-2/12 border-2 shadow-md text-orange-400 h-5/6 text-center  rounded-md">
            <h4>Starter</h4>
          </div>
          <div className=" w-2/12 border-2 shadow-md text-orange-400 h-5/6 text-center  rounded-md">
            <h4>Appetizer</h4>
          </div>
          <div className=" w-2/12 border-2 shadow-md text-orange-400 h-5/6 text-center  rounded-md">
            <h4>Dessert</h4>
          </div>
          <div className=" w-2/12 border-2 shadow-md text-orange-400 h-5/6 text-center  rounded-md">
            <h4>Main</h4>
          </div>
        </div>
        <div className="h-5/6 mt-10 ml-16">
          <div className="flex flex-col h-1/6 mb-10 w-4/6  justify-around">
            <label className="font-bold font-sans ">Name</label>
            <input className="focus:outline-none transition border-b-2 border-black" type="text" placeholder="Menu Name"></input>
          </div>
          <div className="flex flex-col h-1/6 mb-10 w-4/6  justify-around">
            <label className="font-bold font-sans">Price</label>
            <input className="focus:outline-none border-b-2 border-black" type="text" placeholder="RWF"></input>
          </div>
          <div className="flex flex-col h-1/6 mb-10 w-4/6  justify-around">
            <label className="font-bold font-sans">Menu Description</label>
            <input className="focus:outline-none border-b-2 border-black" type="text" placeholder="Ingredients.."></input>
          </div>
          <div className="flex flex-col h-1/6 mb-10 w-4/6  justify-around">
            <label className="font-bold font-sans ">Image</label>
            <input className="focus:outline-none  border-b-2 border-black-100" type="file"></input>
          </div>
        </div>
      </div>
    );
  }
}

export default FormTwo;
