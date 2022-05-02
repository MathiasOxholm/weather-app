import styles from "../styles/MenuIcon.module.scss";

const MenuIcon: React.FC = () => {
  return (
    <div className={styles.MenuIcon}>
      <span>
        <div className={styles.dot}></div>
      </span>
      <span>
        <div className={styles.dot}></div>
      </span>
      <span>
        <div className={styles.dot}></div>
      </span>
      <span>
        <div className={styles.dot}></div>
      </span>
    </div>
  );
};

export default MenuIcon;
