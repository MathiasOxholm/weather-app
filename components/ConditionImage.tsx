import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/ConditionImage.module.scss";

interface Props {
  condition: string;
  dayOrNight: number;
}

const ConditionImage: React.FC<Props> = ({ condition, dayOrNight }) => {
  const [dayNight, setDayNight] = useState(null);

  useEffect(() => {
    if (dayOrNight === 1) {
      setDayNight("day");
    } else {
      setDayNight("night");
    }
  }, [dayOrNight]);

  return (
    <div className={styles.Image}>
      <Image
        src={`/images/${dayNight}/${condition}.png`}
        height={240}
        width={240}
        alt=""
      />
    </div>
  );
};

export default ConditionImage;
