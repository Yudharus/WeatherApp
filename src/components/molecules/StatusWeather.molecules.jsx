import React from 'react'

const StatusWeather = () => {
  return (
    <div className="lg:px-2.5 lg:py-3 px-4 py-3 w-full lg:w-56 mt-4 lg:mt-0 bg-white/20 rounded-md mr-2 flex items-center justify-between">
      <div>
        <p className="text-white2 text-base font-normal ">Rain Chanse</p>
        <p className="text-white2 text-base font-normal mt-4">Wind Speed</p>
        <p className="text-white2 text-base font-normal mt-4">Humidity</p>
        <p className="text-white2 text-base font-normal mt-4">Air Quality</p>
        <p className="text-white2 text-base font-normal mt-4">Pressure</p>
        <p className="text-white2 text-base font-normal mt-4 mb-2">Uv Index</p>
      </div>
      <div>
        <p className="text-white2 text-base font-normal ">12%</p>
        <p className="text-white2 text-base font-normal mt-4">24.1 km/h</p>
        <p className="text-white2 text-base font-normal mt-4">63%</p>
        <p className="text-white2 text-base font-normal mt-4">23 AQI</p>
        <p className="text-white2 text-base font-normal mt-4">1016 mb</p>
        <p className="text-white2 text-base font-normal mt-4 mb-2">3</p>
      </div>
    </div>
  )
}

export default StatusWeather