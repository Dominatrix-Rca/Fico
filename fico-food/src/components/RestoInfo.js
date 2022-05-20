import React, { Component } from "react";

class RestoInfo extends Component {
  render() {
    return (
      <div className="h-5/6">
        <div>
          <h1 className="text-center m-auto font-bold w-6/12">
            1.Create Your Restaurant profile
          </h1>
        </div>
        <div className="flex flex-row  w-11/12 h-2/6 items-center justify-around ">
          <div className="bg-gray-400 rounded-full h-3/6 border-2 flex items-center justify-center text-white w-2/12 shadow-md">
            1
          </div>
          <div className="flex flex-col w-9/12 ">
            <h1 className="font-bold">Restaurant Information</h1>
            <p className="text-gray-400">
              Restaurant name, details, address and owner
            </p>
          </div>
        </div>

        <div className="flex flex-row  w-11/12 h-2/6 items-center justify-around  ">
          <div className="bg-gray-400 rounded-full h-3/6 border-2 flex items-center justify-center text-white w-2/12 shadow-md">
            2
          </div>
          
          <div className="flex flex-col w-9/12 ">
            <h1 className="font-bold">Restaurant Information</h1>
            <p className="text-gray-400">
              Restaurant name, details, address and owner
            </p>
          </div>
        </div>

        <div className="flex flex-row  w-11/12 h-2/6 items-center justify-around  ">
          <div className="bg-orange-400 rounded-full h-3/6 border-2 flex items-center justify-center text-white w-2/12 shadow-md">
            3
          </div>
          <div className="flex flex-col w-9/12 ">
            <h1 className="font-bold">Restaurant Information</h1>
            <p className="text-gray-400">
              Restaurant name, details, address and owner
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default RestoInfo;
