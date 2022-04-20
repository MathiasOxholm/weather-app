import Image from "next/image";
import styles from "../styles/ConditionImage.module.scss";

const ConditionImage = ({ condition }) => {
  return (
    <div className={styles.Image}>
      <Image src={`/images/${condition}.png`} height={240} width={240} alt="" />
    </div>
  );
};

export default ConditionImage;
