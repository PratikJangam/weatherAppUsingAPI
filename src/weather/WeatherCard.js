import React, { useState, useEffect } from "react";

const WeatherCard = ({ weatherInfo }) => {
  const [weatherMood, setweatherMood] = useState("");
  const {
    temp,
    humidity,
    pressure,
    weatherCondition,
    name,
    speed,
    country,
    sunset,
  } = weatherInfo;

  useEffect(() => {
    if (weatherCondition) {
      switch (weatherCondition) {
        case "Clouds":
          setweatherMood("wi wi-day-cloudy");
          break;
        case "Haze":
          setweatherMood("wi wi-fog");
          break;
        case "Clear":
          setweatherMood("wi wi-day-sunny");
          break;
        case "Mist":
          setweatherMood("wi wi-day-fog");
          break;
        default:
          setweatherMood("wi wi-day-sunny");
          break;
      }
    }
  }, [weatherCondition]);
  // Converting seconds into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <React.Fragment>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`${weatherMood}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}°</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weatherCondition}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>

        {/* 4 coloumn section  */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} <br />
                Sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                Wind
              </p>
            </div>
          </div>
        </div>
      </article>
    </React.Fragment>
  );
};

export default WeatherCard;
