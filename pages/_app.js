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

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=012d3170981e4017a56160201222004&q=${currentLocation}&aqi=no`
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
  }, [currentLocation]);

  const handleLocationPopup = () => {
    setShowLocationPopup(!showLocationPopup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentLocation(e.target[0].value);
  };

  return (
    <>
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
