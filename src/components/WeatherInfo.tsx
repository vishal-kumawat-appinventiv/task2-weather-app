import { useState } from "react";
import "../Styles/weatherInfo.css";
import { WeatherDataType } from "../types";

interface WeatherDataProps {
  weatherData: WeatherDataType;
}

const WeatherInfo: React.FC<WeatherDataProps> = ({ weatherData }) => {
  const [unit, setUnit] = useState<"Celcius" | "Fahrenheit">("Celcius");

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "Celcius" ? "Fahrenheit" : "Celcius"));
  };

  const temperatureInCelsius = weatherData.temperature;
  const temperatureInFahrenheit = (temperatureInCelsius * 9) / 5 + 32;

  return (
    <div className="weatherContainer">
      <p className="weatherCityCountry">
        {weatherData.city}, {weatherData.country}
      </p>
      <div className="tempContainer">
        <p className="weatherTemperature">
          Temperature:{" "}
          {unit === "Celcius"
            ? temperatureInCelsius.toFixed(1)
            : temperatureInFahrenheit.toFixed(1)}
          °{unit === "Celcius" ? "C" : "F"}
        </p>
        <button className="toggleButton" onClick={toggleUnit}>
          Switch to {unit === "Celcius" ? "Fahrenheit" : "Celsius"}
        </button>
      </div>
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
