import "../styles/globals.scss";
import { useEffect, useState } from "react";
import "open-props/style";
import "open-props/normalize";
import ChooseLocation from "../components/ChooseLocation";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("london");
  const [userLocation, SetUserLocation] = useState(null);
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const useMyLocation = () => {
    setCurrentLocation(userLocation);
    handleLocationPopup();
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation(
          position.coords.latitude + "," + position.coords.longitude
        );
        SetUserLocation(
          position.coords.latitude + "," + position.coords.longitude
        );
      });
    }
  }, []);

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
      <AnimatePresence>
        {showLocationPopup && (
          <ChooseLocation
            handleLocationPopup={handleLocationPopup}
            handleSubmit={handleSubmit}
            useMyLocation={useMyLocation}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default MyApp;
