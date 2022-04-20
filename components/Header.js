import styles from "../styles/Header.module.scss";
import MenuIcon from "./MenuIcon";
import MoreIcon from "./MoreIcon";

const Header = ({ data }) => {
  return (
    <div className={styles.Header}>
      <div className={styles.container}>
        <MenuIcon />
        <p className={styles.location}>{data.location.name}</p>
        <MoreIcon />
      </div>
    </div>
  );
};

export default Header;
