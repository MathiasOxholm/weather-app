import styles from "../styles/MainPanel.module.scss";
import Blurb from "./Blurb";
import ConditionImage from "./ConditionImage";
import clsx from "clsx";
import { useEffect, useState } from "react";

const MainPanel = ({ data }) => {
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
      <ConditionImage condition={data.current.condition.text} />
      <h2 className={styles.temperature}>{data.current.temp_c}</h2>
      <p className={styles.condition}>{data.current.condition.text}</p>
      <p className={styles.date}>{localDate}</p>
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
        <Blurb title="Chance of rain" data="87" unit="%" image="rain" />
      </div>
    </div>
  );
};

export default MainPanel;
