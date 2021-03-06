import axios from 'axios';
import React, { useState } from 'react';
// import React, { useEffect } from 'react';
// import Icon from './Icon';

function Weather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=b1f9c5086c26f8cdeba9cd514aa5b79f`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  };

  // const url2 = `http://openweathermap.org/img/w/{data.weather[0].icon}.png`;
  // const [icon, setIcon] = useState();
  // const getIcons = (event) => {
  //   axios.get(url2).then((response) => {
  //     setIcon(response.data.value);
  //     console.log(response.data);
  //   });
  //   setIcon('');
  // };

  // useEffect(() => {
  //   getIcons();
  // });

  return (
    <div className="weather-func">
      <div className="search">
        <h1>Current weather:</h1>
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? (
              <p>
                {data.weather[0].main}
                {/* <Icon /> */}
                {/* {icon} */}
              </p>
            ) : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            {/* <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}°C</p>
              ) : null}
              <p>Feels Like</p>
            </div> */}
            <div className="humidity">
              <p>Humidity</p>
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            </div>
            <div className="wind">
              <p>Wind Speed</p>
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
