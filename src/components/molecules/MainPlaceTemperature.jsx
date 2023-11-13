import moment from 'moment/moment'
import React from 'react'

const MainPlaceTemperature = () => {

  return (
    <div className="px-4 w-full lg:w-fit py-4 w-fit bg-white/20 rounded-md mr-6 flex  ">
      <div>
        <h3 className="text-white text-base font-medium">Current Weather</h3>
        <p className="text-white2 text-xs font-extralight mt-1">{moment().format('LT')}</p>
        <div className="flex -ml-4 items-center">
          <img src="/src/assets/rainyCloud.png" className="w-26 h-28 mt-6 mr-12 lg:mr-4" />
          <div className="flex">
            <div className="flex flex-col items-center">
              <h1 className="text-white text-6xl font-bold">24</h1>
              <p className="text-white2 text-xs font-normal mt-1">Rainny Cloud</p>
            </div>
            <h1 className="text-white text-xs font-bold ml-2">&deg; C</h1>
          </div>
        </div>
        <h1 className="text-white text-3xl font-bold text-center mt-2">Bandung</h1>
      </div>
    </div>
  )
}

export default MainPlaceTemperature