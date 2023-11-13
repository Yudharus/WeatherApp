import React from 'react'

const PopularCity = ({ img, name, weather }) => {
  return (
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center">
        <img src={img} className="w-6 h-6 mr-2" />
        <p className="text-white2 text-base font-normal">{name}</p>
      </div>
      <p className="text-white2 text-xs font-light">{weather}</p>
    </div>
  )
}

export default PopularCity