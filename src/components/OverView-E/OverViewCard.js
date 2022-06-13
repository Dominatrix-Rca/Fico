import React from 'react'


function OverViewCard() {
    const Lists=()=>{
       return (
          <div>
            <section className=' mt-32 ml-8 ' >
            <div className='bg-white w-64  m-10  border-2 border-black  rounded-lg'>
      <div className='flex justify-between'>
              <h2 className='font-bold text-left m-1 '> Restorants</h2>
              <h4 className='text-sm text-right m-1 text-orange-600'>View details</h4>
      </div>
      <h2 className='text-left  ml-2 text-gray-500 mb-2'>Sales</h2>
      <div className=' flex justify-between ml-2 mr-2 mt-1   pb-2 '>
        <h2>Sale luna </h2>
        <h2 className='text-gray-500'>45,000</h2>
      </div>
      
      <div className=' flex justify-between ml-2 mr-2 mt-1  pb-2  border-y-2'>
        <h2>Sale  </h2>
        <h2 className='text-gray-500'>45,000</h2>
      </div>
            </div>
      
      
      
      
            <div className='bg-white w-64  m-10  border-2 border-black  rounded-lg'>
      <div className='flex justify-between'>
              <h2 className='font-bold text-left m-2 '> Restorants</h2>
              <h4 className='text-sm text-right m-2 text-orange-600'>View details</h4>
      </div>
      <h2 className='text-left  ml-2 text-gray-500 mb-2'>Sales</h2>
      <div className=' flex justify-between ml-2 mr-2 mt-1   pb-2 '>
        <h2>Sale luna </h2>
        <h2 className='text-gray-500'>45,000</h2>
      </div>
      
      <div className=' flex justify-between ml-2 mr-2 mt-1  pb-2  border-y-2'>
        <h2>Sale  </h2>
        <h2 className='text-gray-500'>45,000</h2>
      </div>
            </div>
      
          
      
            </section>
          </div>
        )
    }
  return (
    <div>
       <div className=' flex  '>
        <Lists/>
      
        </div>
    </div>
  )
}

export default OverViewCard