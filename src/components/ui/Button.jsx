import styles from "./Button.module.scss";

const Button = ({ children, color = "white", type = "button", onClick }) => {
  return (
    <button
      className={`${styles.btn}  ${styles[color]}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
