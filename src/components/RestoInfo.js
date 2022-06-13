import React, { Component } from "react";

class RestoInfo extends Component {
  render() {
    return (
      <div className="h-5/6">
        <div className="block ml-16">
          <h1 className="font-bold">1.Create your</h1>
          <h1 className="font-bold">Restaurant profile</h1>
       
        </div>
        <div className="flex flex-row  w-11/12 h-2/6 items-center justify-around  cursor:pointer ">
          <div className="bg-gray-400 rounded-full h-3/6 border-2 flex items-center justify-center text-white w-2/12 shadow-md  cursor:pointer">
            1
          </div>
          <div className="flex flex-col w-9/12 ">
            <h1 className="font-bold">Restaurant Information</h1>
            <h4 className="text-gray-400">
              Restaurant name, details, address and owner
           </h4>
          </div>
        </div>

        <div className="flex flex-row  w-11/12 h-2/6 items-center justify-around  cursor:pointer  ">
          <div className="bg-gray-400 rounded-full h-3/6 border-2 flex items-center justify-center text-white w-2/12 shadow-md cursor:pointer">
            2
          </div>
          
          <div className="flex flex-col w-9/12 ">
            <h1 className="font-bold">Restaurant Information</h1>
            <h4 className="text-gray-400">
              Restaurant name, details, address and owner
           </h4>
          </div>
        </div>

        <div className="flex flex-row  w-11/12 h-2/6 items-center justify-around hover:border-l-4 border-orange-400 cursor:pointer ">
          <div className="bg-orange-400 rounded-full h-3/6 border-2 flex items-center justify-center text-white w-2/12 shadow-md cursor:pointer">
            3
          </div>
          <div className="flex flex-col w-9/12 ">
            <h1 className="font-bold">Restaurant Information</h1>
            <h4 className="text-gray-400">
              Restaurant name, details, address and owner
           </h4>
      
          </div>
        </div>
      </div>
    );
  }
}

export default RestoInfo;
