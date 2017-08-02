import { FETCH_WEATHER } from './types';

const API_KEY = 'e80c1a354d432468c5e77769278f3657';
const API_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const fetchWeather = (city) => {
  const url = `${API_URL}&q=${city},us`;
  const data = fetch(url).then(response => response.json());
  console.log('fetch for', city, data);


  return {
    type: FETCH_WEATHER,
    payload: data // is a promise, but will be resolved by ReduxPromise
  };
};
