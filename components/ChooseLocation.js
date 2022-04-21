import styles from "../styles/ChooseLocation.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";

const ChooseLocation = ({
  handleLocationPopup,
  handleSubmit,
  useMyLocation,
}) => {
  const [formData, setFormData] = useState("");

  return (
    <>
      <motion.div
        className={styles.overlay}
        onClick={handleLocationPopup}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.3 }}
      />
      <motion.div
        className={styles.ChooseLocation}
        initial={{ y: 240 }}
        animate={{ y: 0 }}
        exit={{ y: 240 }}
        transition={{ ease: "easeOut", duration: 0.3 }}
      >
        <p className={styles.useMyLocation} onClick={useMyLocation}>
          Use my location
        </p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for a location"
            className={styles.input}
            value={formData}
            name="location"
            id="location"
            onChange={(e) => setFormData(e.target.value)}
            autoFocus
            required
            minLength="3"
          />
          <button type="submit" className={styles.submit}>
            Set location
          </button>
        </form>
      </motion.div>
    </>
  );
};

export default ChooseLocation;
