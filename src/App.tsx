import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherInfo from "./components/WeatherInfo";
import { WeatherDataType } from "./types";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherDataType>();

  const handleSearch = async (cityName: string) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3045dd712ffe6e702e3245525ac7fa38`
      );
      const data = {
        city: response?.data?.name,
        country: response?.data?.sys?.country,
        temperature: response?.data?.main?.temp / 10,
        description: response?.data?.weather[0]?.description,
        humidity: response?.data?.main?.humidity,
        windSpeed: response?.data?.wind?.speed,
      };
      setWeatherData(data);
    } catch (error) {
      console.error("Error getting weather data:", error);
    }
  };

  return (
    <>
      <div className="main">
        <Header />
        <SearchBar onSearch={handleSearch} />
        {weatherData ? (
          <>
            <WeatherInfo weatherData={weatherData} />
          </>
        ) : (
          <>
            <h3>No Data Found!</h3>
          </>
        )}
      </div>
    </>
  );
}

export default App;
