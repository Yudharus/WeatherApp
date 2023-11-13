import React from "react";
import moment from "moment/moment";
import Forecast from "../molecules/Forecast.molecules";
import PopularCity from "../molecules/PopularCity.molecules";
import MainPlaceTemperature from "../molecules/MainPlaceTemperature";
import Chart from "../atoms/Chart.atoms";
import Map from "../atoms/Map.atoms";
import StatusWeather from "../molecules/StatusWeather.molecules";
import SearchBar from "../../components/molecules/SearchBar.molecules";

const CurrentWeather = () => {
  const popCity = [
    {
      id: 1,
      name: "Jakarta",
      img: "/src/assets/rainyCloud.png",
      weather: "Rainy Cloud"
    },
    {
      id: 2,
      name: "Surabaya",
      img: "/src/assets/sunnyCloud.png",
      weather: "Sunny Cloud"
    },
    {
      id: 3,
      name: "Bekasi",
      img: "/src/assets/rain.png",
      weather: "Heavy Rain"
    },
    {
      id: 4,
      name: "Tangerang",
      img: "/src/assets/sunny.png",
      weather: "Sunny"
    },
    {
      id: 5,
      name: "Cirebon",
      img: "/src/assets/storm.png",
      weather: "Storm"
    },
  ]

  const forecastData = [
    {
      id: 1,
      day: "Sun",
      date: "Nov 12",
      img: "/src/assets/rainyCloud.png",
      status: "Rainy Cloud",
      degree: "+25"
    },
    {
      id: 2,
      day: "Mon",
      date: "Nov 13",
      img: "/src/assets/sunnyCloud.png",
      status: "Sunny Cloud",
      degree: "+30"
    },
    {
      id: 3,
      day: "Tue",
      date: "Nov 14",
      img: "/src/assets/rain.png",
      status: "Heavy Rain",
      degree: "+28"
    },
    {
      id: 4,
      day: "Wed",
      date: "Nov 15",
      img: "/src/assets/sunny.png",
      status: "Sunny",
      degree: "+32"
    },
    {
      id: 5,
      day: "Thu",
      date: "Nov 16",
      img: "/src/assets/storm.png",
      status: "Storm",
      degree: "+26"
    },
    {
      id: 6,
      day: "Fri",
      date: "Nov 17",
      img: "/src/assets/sunnyCloud.png",
      status: "Sunny Cloud",
      degree: "+30"
    },
    {
      id: 7,
      day: "Sat",
      date: "Nov 18",
      img: "/src/assets/rain.png",
      status: "Heavy Rain",
      degree: "+25"
    },
  ]

  return (
    <div>
      <SearchBar />
      <div className="lg:flex lg:items-center">
        <MainPlaceTemperature />
        <StatusWeather />
        <div className="px-6 py-2.5 bg-white/20 rounded-md lg:ml-4 mt-4 lg:mt-0">
          <div className=" lg:grid lg:grid-rows-2 lg:grid-flow-col lg:gap-11 grid grid-rows-4 grid-flow-col gap-8  ">
            {
              forecastData.map(i => {
                return (
                  <Forecast
                    key={i.id}
                    date={i.date}
                    day={i.day}
                    deg={i.degree}
                    status={i.status}
                    img={i.img}
                  />
                )
              })
            }
          </div>
        </div>
        <div className="lg:px-2.5 lg:py-4 px-4 py-3 lg:w-56 bg-white/20 rounded-md lg:ml-6 lg:mt-0 mt-4">
          <h3 className="text-white text-base font-medium mb-2">Popular cities</h3>
          {
            popCity.map(i => {
              return (
                <PopularCity
                  key={i.id}
                  img={i.img}
                  name={i.name}
                  weather={i.weather}
                />
              )
            })
          }
        </div>
      </div>
      <div className="lg:flex lg:items-center">
        <Map />
        <Chart />
      </div>
    </div>
  );
};

export default CurrentWeather;
