import styles from "./Dot.module.scss";

const Dot = ({ id, sendId, active, children }) => {
  return (
    <button
      className={`${styles.dot} ${active ? styles.active : ""}`}
      onClick={() => {
        sendId(id);
      }}
      type="button"
    >
      {children}
    </button>
  );
};

export default Dot;
