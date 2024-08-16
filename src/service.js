import axios from "axios";

const OPEN_WEATHER_API = "https://api.openweathermap.org/data/2.5";
const OPEN_WEATHER_KEY = "855818493a3a3b064c5c75a7dab35552";

export default {
  getWeather(payload) {
    return axios
      .get(
        `${OPEN_WEATHER_API}/weather?lat=${payload.lat}&lon=${payload.lon}&units=metric&appid=${OPEN_WEATHER_KEY}`
      )
      .then((res) => res.data);
  },

  getWeekWeather(payload) {
    return axios
      .get(
        `${OPEN_WEATHER_API}/onecall?lat=${payload.lat}&lon=${payload.lon}&units=metric&appid=${OPEN_WEATHER_KEY}`
      )
      .then((res) => res.data);
  },
};
