import { useEffect, useState } from "react";
import clsx from "clsx";
import ConditionImage from "./ConditionImage";
import Blurb from "./Blurb";
import styles from "../styles/MainPanel.module.scss";

interface dataInner {
  current?: any;
  location?: any;
}

interface Props {
  data: dataInner;
}

const MainPanel: React.FC<Props> = ({ data }) => {
  const [localDate, setLocalDate] = useState(null);

  useEffect(() => {
    const unix_timestamp = data.location.localtime_epoch;
    const date = new Date(unix_timestamp * 1000);
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();
    setLocalDate(month + "/" + day + "/" + year);
  }, [data.location.localtime_epoch]);

  return (
    <div
      className={clsx(
        styles.MainPanel,
        data.current.is_day === 1 ? styles.day : styles.night
      )}
    >
      <div className={styles.weatherInfo}>
        <ConditionImage
          condition={data.current.condition.text}
          dayOrNight={data.current.is_day}
        />
        <h2 className={styles.temperature}>{data.current.temp_c}</h2>
        <p className={styles.condition}>{data.current.condition.text}</p>
        <p className={styles.date}>{localDate}</p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.blurbList}>
        <Blurb
          title="Wind"
          data={data.current.wind_kph + " "}
          unit="km/h"
          image="wind"
        />
        <Blurb
          title="Humidity"
          data={data.current.humidity}
          unit="%"
          image="humidity"
        />
        <Blurb
          title="Feels like"
          data={data.current.feelslike_c}
          unit="°"
          image="celsius"
        />
      </div>
    </div>
  );
};

export default MainPanel;
