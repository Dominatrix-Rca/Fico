import React from 'react'

function OverviewLfCard() {
  return (
    <div>
             <section className='mt-32'>
       <div className='bg-white w-80 h-80 border-2 border-black rounded-lg  '>


       <div className='flex justify-between'>
        <h2 className='font-bold text-left m-2 '> Create</h2>
        <h4 className='text-sm text-right m-2 text-orange-600'>View  all</h4>
</div>
<h2 className='text-left  ml-2 text-gray-500 mb-2'>Today</h2>


       <div className=' flex justify-between ml-2 mr-2 mt-4   pb-2 '>
  <h2>Create new </h2>
  <button className=' bg-orange-400 rounded-lg h-10 mt-1 w-20'>New</button>
</div>

<div className=' flex justify-between ml-2 mr-2 mt-1  pb-2  border-y-2'>
  <h2>Sale  </h2>
  <button className=' bg-orange-400 rounded-lg h-10 mt-1 w-20'>New</button>
</div>



<div className=' flex justify-between ml-2 mr-2 mt-1  pb-2  border-y-2'>
  <h2>Sale  </h2>
  <button className=' bg-orange-400 rounded-lg h-10 mt-1 w-20'>New</button>
</div>

<div className=' flex justify-between ml-2 mr-2 mt-1  pb-2  border-y-2'>
  <h2>Sale  </h2>
  <button className=' bg-orange-400 rounded-lg h-10 mt-1 w-20'>New</button>
</div>
       </div>
       
       </section>
    </div>
  )
}

export default OverviewLfCard