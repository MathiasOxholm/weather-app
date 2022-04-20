import styles from "../styles/Header.module.scss";
import MenuIcon from "./MenuIcon";
import MoreIcon from "./MoreIcon";

const Header = ({ data, handleLocationPopup }) => {
  return (
    <div className={styles.Header}>
      <div className={styles.container}>
        <MenuIcon />
        <p className={styles.location} onClick={handleLocationPopup}>
          {data.location.name}
        </p>
        <MoreIcon />
      </div>
    </div>
  );
};

export default Header;
