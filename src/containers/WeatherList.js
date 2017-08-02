import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/GoogleMap';


class WeatherList extends Component {

  renderWeather(citydata) {
    const temp = citydata.list.map(item => item.main.temp - 273.15);
    const pres = citydata.list.map(item => item.main.pressure);
    const humi = citydata.list.map(item => item.main.humidity);

    return (
      <tr key={citydata.city.id}>
        <td>
          <GoogleMap
            lat={citydata.city.coord.lat}
            lon={citydata.city.coord.lon}
          />
        </td>
        <td>
          <Chart data={temp} color={'red'} unit="&deg;C" />
        </td>
        <td>
          <Chart data={pres} color={'green'} unit="hPa" />
        </td>
        <td>
          <Chart data={humi} color={'blue'} unit="%" />
        </td>
      </tr>
    );
  }
  renderList() {
    return this.props.weatherList.map(weather => this.renderWeather(weather));
  }

  render() {
    return (
      <div className="weather-list">
        <table className="table table-hover">
          <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
          </thead>
          <tbody>
            { this.renderList() }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weatherList: state.weather
  };
};

export default connect(mapStateToProps, null)(WeatherList);
