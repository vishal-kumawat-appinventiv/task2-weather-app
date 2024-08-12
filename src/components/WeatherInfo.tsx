import "../Styles/weatherInfo.css";
import { WeatherDataType } from "../types";

interface WeatherDataProps {
  weatherData: WeatherDataType;
}

const WeatherInfo: React.FC<WeatherDataProps> = ({ weatherData }) => {
  return (
    <>
      <div>
        <p>
          {weatherData.city}, {weatherData.country}
        </p>
        <p>Temperature: {weatherData.temperature}°C</p>
        <p>Description: {weatherData.description}</p>
        <p>Humidity: {weatherData.humidity}%</p>
        <p>Wind Speed: {weatherData.windSpeed} m/s</p>
      </div>
    </>
  );
};

export default WeatherInfo;
