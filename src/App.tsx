import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherInfo from "./components/WeatherInfo";
import { WeatherDataType } from "./types";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherDataType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const handleSearch = async (cityName: string) => {
    try {
      setError(false);
      setLoading(true);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
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
      setLoading(false);
    } catch (error) {
      console.error("Error getting weather data:", error);
      setError(true);
      setLoading(false);
      return;
    }
  };

  return (
    <>
      <div className="main">
        <Header />
        <SearchBar onSearch={handleSearch} />
        {loading ? (
          <h3 className="loading">Loading...</h3>
        ) : error ? (
          <h3 className="errorMsg">No Data Found !</h3>
        ) : (
          weatherData && <WeatherInfo weatherData={weatherData} />
        )}
      </div>
    </>
  );
}

export default App;
