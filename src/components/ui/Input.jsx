import styles from "./Input.module.scss";

const Input = ({ type, placeholder, required = true }) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default Input;
