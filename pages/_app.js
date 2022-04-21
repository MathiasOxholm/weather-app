import "../styles/globals.scss";
import { useEffect, useState } from "react";
import "open-props/style";
import "open-props/normalize";
import ChooseLocation from "../components/ChooseLocation";

function MyApp({ Component, pageProps }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("kolding");
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${currentLocation}&aqi=no`
    )
      .then((response) => response.json())
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentLocation, apiKey]);

  const handleLocationPopup = () => {
    setShowLocationPopup(!showLocationPopup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentLocation(e.target[0].value);
    handleLocationPopup();
  };

  return (
    <>
      {loading && <div>Loading</div>}
      {error && (
        <div>{`There is a problem fetching weather data - ${error}`}</div>
      )}
      {data && (
        <Component
          data={data}
          handleLocationPopup={handleLocationPopup}
          {...pageProps}
        />
      )}
      {showLocationPopup && (
        <ChooseLocation
          handleLocationPopup={handleLocationPopup}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default MyApp;
