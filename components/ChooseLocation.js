import styles from "../styles/ChooseLocation.module.scss";
import { useState, useEffect } from "react";

const ChooseLocation = ({ handleLocationPopup, handleSubmit }) => {
  const [formData, setFormData] = useState("");

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <>
      <div className={styles.overlay} onClick={handleLocationPopup}></div>
      <div className={styles.ChooseLocation}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for a location"
            className={styles.input}
            value={formData}
            name="location"
            id="location"
            onChange={(e) => setFormData(e.target.value)}
          />
          <button type="submit" className={styles.submit}>
            Set location
          </button>
        </form>
      </div>
    </>
  );
};

export default ChooseLocation;
