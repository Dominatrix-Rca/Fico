import React from 'react';
const buttons = ["Drinks", "Starter", "Appetizer", "Dessert", "Main"];
const activeclass = "bg-orange-400 rounded-xl w-24 h-10 text-center text-white ring ring-white";
const inactiveclass = "bg-white rounded-xl w-24 h-10 text-center text-black ring ring-gray-200"

function Buttons({activity}){

    return(
        <div className=' flex  flex-row justify-evenly pl-2 space-x-2 h-1/6 mr-8 '>

        {buttons.map((btn, index) => {
            return(
                <button key={index} className={btn===activity?activeclass:inactiveclass}>{btn}</button>
            )
        })}


</div>
    )
}

export default Buttons;