import { useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  useEffect(() => {
    const fetchDetails = async () => {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=kota&appid=3045dd712ffe6e702e3245525ac7fa38"
      );
      console.log("City - ", response?.data?.name);
      console.log("country - ", response?.data?.sys?.country);
      console.log("Temperature - ", response?.data?.main?.temp / 10);
      console.log("Humidity - ", response?.data?.main?.humidity);
      console.log("Wind Speed - ", response?.data?.wind?.speed);

      if (!response) console.log("No Data !");
    };

    fetchDetails();
  }, []);

  return (
    <>
      <div className="main">
        <Header />
        <SearchBar />
        <WeatherInfo />
      </div>
    </>
  );
}

export default App;
