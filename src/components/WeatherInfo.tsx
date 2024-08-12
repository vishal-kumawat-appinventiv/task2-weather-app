import "../Styles/weatherInfo.css";
import { WeatherDataType } from "../types";

interface WeatherDataProps {
  weatherData: WeatherDataType;
}

const WeatherInfo: React.FC<WeatherDataProps> = ({ weatherData }) => {
  return (
    <div className="weatherContainer">
      <p className="weatherCityCountry">
        {weatherData.city}, {weatherData.country}
      </p>
      <p className="weatherTemperature">
        Temperature: {weatherData.temperature.toFixed(1)}°C
      </p>
      <p className="weatherDescription">
        Description: {weatherData.description}
      </p>
      <p className="weatherHumidity">Humidity: {weatherData.humidity}%</p>
      <p className="weatherWindSpeed">
        Wind Speed: {weatherData.windSpeed} m/s
      </p>
    </div>
  );
};

export default WeatherInfo;
