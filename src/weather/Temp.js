//  https://api.openweathermap.org/data/2.5/weather?q=pune%20&appid=93cbe024d986415e90c09ad541cde8c0

import React, { useState, useEffect } from "react";
import "./style.css";
import WeatherCard from "./WeatherCard";

const Temp = () => {
  const [searchValue, setsearchValue] = useState("Pune");
  const [weatherInfo, setweatherInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=93cbe024d986415e90c09ad541cde8c0`;
      const res = await fetch(url);
      const data = await res.json();

      //   console.log(data);
      const { temp, humidity, pressure } = data.main;
      //   console.log(temp);
      const { main: weatherCondition } = data.weather[0];

      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherCondition,
        name,
        speed,
        country,
        sunset,
      };
      setweatherInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);
  return (
    <React.Fragment>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchItem"
            value={searchValue}
            onChange={(event) => setsearchValue(event.target.value)}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}
          >
            Search
          </button>
        </div>
      </div>
      {/* our temp card  */}
      <WeatherCard weatherInfo={weatherInfo} />
    </React.Fragment>
  );
};

export default Temp;
