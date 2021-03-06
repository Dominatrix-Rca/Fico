import React from 'react'
import OverviewButtons from '../components/OverView-E/OverViewButtons';
import OverviewLfCard from '../components/OverView-E/OverViewLFCard';
import Card from "../components/OverView-E/OverViewCard";
import OverviewChart from './../components/OverView-E/OverViewChart';
import Sidebar from './../components/Sidebar';
import OverViewRt from './../components/OverView-E/OverViewRt'
import { FiSearch } from "react-icons/fi";
import { MdOutlineNotificationAdd } from "react-icons/md";
import { GoPerson } from "react-icons/go";
function Overview() {
  return (
    <div className='flex flex-row '>
        <Sidebar active="Overview" />
       <section className='flex flex-col '>
        <div className="header flex w-12/12  flex-row px-1 h-1/6 py-8 justify-around  ">
          <p className="menu text-2xl font-semibold text-black mt-8 ">OverView</p>
          <div className="left flex flex-row px-8 justify-around">
            <FiSearch className="mr-4 text-xl mt-1   text-indigo-400" />
            <MdOutlineNotificationAdd className="text-xl mr-4 mt-1 text-indigo-400" />
            <p className="text-xl font-normal  ml-8 ">Mugabo Javis</p>
            <GoPerson className="mr-4 text-xl mt-1 ml-4   outline-indigo-100" />
          </div>
        </div>
    <div className='ml-60 w-10/12'>
      <article className='flex m-10 space-x-8   justify-center'>
               < OverviewButtons/>
               < OverviewButtons/>
              < OverviewButtons/>
      </article>
      <div className='flex justify-between'>
<OverviewChart/>
<OverViewRt/>
      </div>
      <section className='flex '>
    <Card/>
    <Card/>
<OverviewLfCard className='OverviewLfCard sm:hidden'/> 
    </section>
    <div>
   
    </div>
   
    </div>
    </section>
    </div>
  )
}

export default Overview