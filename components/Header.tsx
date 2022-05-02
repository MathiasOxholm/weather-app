import styles from "../styles/Header.module.scss";
import MenuIcon from "./MenuIcon";
import MoreIcon from "./MoreIcon";

interface dataName {
  name: string;
}

interface dataProps {
  location: dataName;
}

interface Props {
  data: dataProps;
  handleLocationPopup: () => void;
}

const Header: React.FC<Props> = ({ data, handleLocationPopup }) => {
  return (
    <div className={styles.Header}>
      <div className={styles.container} onClick={handleLocationPopup}>
        <MenuIcon />
        <p className={styles.location}>{data.location.name}</p>
        <MoreIcon />
      </div>
    </div>
  );
};

export default Header;
