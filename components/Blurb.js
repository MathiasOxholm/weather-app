import Image from "next/image";
import styles from "../styles/Blurb.module.scss";

const Blurb = ({ title, data, unit, image }) => {
  return (
    <div className={styles.Blurb}>
      <Image src={`/svg/${image}.svg`} width={24} height={24} alt={image} />
      <p className={styles.data}>
        {data}
        {unit}
      </p>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default Blurb;
