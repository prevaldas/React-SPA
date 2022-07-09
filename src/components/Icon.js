import React from 'react';

// STATE

class Icon extends React.Component {
  constructor() {
    super();
    this.state = {
      icon: '',
    };
  }

  async componentDidMount() {
    const url = 'http://api.openweathermap.org/data/2.5/';
    const key = 'b1f9c5086c26f8cdeba9cd514aa5b79f';
    const response = await fetch(
      `${url}weather?q=Madrid&units=metric&APPID=${key}`
    );
    const data = await response.json(); //this will return the json response
    const iconName = data.weather[0].icon; // this will hold the icon
    const iconApi = await fetch(
      'http://openweathermap.org/img/w/' + iconName + '.png'
    );
    this.setState({
      icon: iconApi.url,
    });
  }

  render() {
    return (
      <div className="weather-icon">
        <img style={{ width: '70px' }} src={this.state.icon} alt="o" />
      </div>
    );
  }
}

export default Icon;
