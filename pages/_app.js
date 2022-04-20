import "../styles/globals.scss";
import { useEffect, useState } from "react";
import "open-props/style";
import "open-props/normalize";

function MyApp({ Component, pageProps }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=012d3170981e4017a56160201222004&q=miami&aqi=no"
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
  }, []);

  return (
    <>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching weather data - ${error}`}</div>
      )}
      {data && (
        <Component data={data} loading={loading} error={error} {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
