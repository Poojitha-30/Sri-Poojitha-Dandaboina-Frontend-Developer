import React, { useState } from 'react';

//options for the status and capsule type filters
const statusOptions = ['all', 'active', 'retired'];
const typeOptions = ['all', 'Dragon 1.0', 'Dragon 1.1', 'Dragon 2.0'];

export const FilterForm = ({ handleFilter , capsules }) => {
  const [status, setStatus] = useState('all');
  const [launchDate, setLaunchDate] = useState('all');
  const [capsuleType, setCapsuleType] = useState('all');
  return (

   // form element that triggers the handleFilter function when submitted
    
    <form onSubmit={(e)=>handleFilter(e ,status ,launchDate, capsuleType)}
    className="bg-red-300" data-testid="form_id">
     <div className='container-fluid'>
        <div className='row'>
          <div className='col-6'>
            <div >
              <label className='pr-[8px] font-semibold text-gray-600'>Status Type:</label>
              <select className='w-[150px] text-black ml-0 focus:outline-none' value={status} onChange={(e) => setStatus(e.target.value)}>
                {statusOptions.map((option ,i) => (
                  <option key={i} value={option} className="bg-red-900 text-white">
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='col-6'>
              <div>
                <label className=' font-semibold text-gray-600'>Launch Date:</label>
                <select className='w-[100px] text-black  focus:outline-none'
                  value={launchDate}
                  onChange={(e) => setLaunchDate(e.target.value)}
                >
                  <option className='opt' value="all">All</option>
                  {capsules && capsules.map((rocket,i) => (
                    <option key={i} value={rocket.original_launch} className="bg-red-900 text-white">
                      {rocket.original_launch}
                    </option>
                  ))}
                </select>
              </div>
          </div> 
        </div>
        <div className='row'>
          <div className='col-6'>
            <div>
              <label className='pr-[8px] font-semibold text-gray-600'>Capsule Type:</label>
              <select className='w-[150px] text-black ml-2 focus:outline-none'
                value={capsuleType}
                onChange={(e) => setCapsuleType(e.target.value)}
              >
                {typeOptions.map((option,i) => (
                  <option key={i} value={option} className="bg-red-900 text-white">
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='col-6'>
            <div>
              <button className='bg-red-800 hover:bg-red-500 border text-white  w-16' type="submit">Filter</button>
            </div>
          </div> 
        </div>
    </div>
  </form>
  );
};