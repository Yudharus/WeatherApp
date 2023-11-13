import React from 'react'

const Forecast = ({ day, date, deg, status, img }) => {
  return (
    <div >
      <div className="items-center flex ml-2">
        <p className='text-white text-base font-medium ml-1'>{day}</p>
        <p className='text-white text-xs font-light ml-3'>{date}</p>
      </div>
      <div className='flex items-center mt-2'>
        <h1 className='text-white text-2xl font-medium'>{deg}</h1>
        <div className='flex flex-col items-center ml-2'>
          <img src={img} className='w-12 h-12' />
          <p className='text-white text-xs font-light'>{status}</p>
        </div>
      </div>
    </div>
  )
}

export default Forecast