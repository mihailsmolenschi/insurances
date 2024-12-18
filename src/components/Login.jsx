import Input from "./ui/Input";
import Button from "./ui/Button";

import styles from "./Login.module.scss";
import { closeLogin, toggleModal } from "../data/uiSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  function handleCloseLogin() {
    dispatch(closeLogin());
    dispatch(toggleModal());
  }

  return (
    <div className={styles.login}>
      <div className={styles["title-close"]}>
        <h2>Loghează-te</h2>
        <button className={styles["close-btn"]} onClick={handleCloseLogin}>
          <svg
            width="26"
            height="26"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.8438 16L31.7188 2.125C31.8854 1.95833 31.9688 1.75 31.9688 1.5C31.9688 1.25 31.8854 1.04167 31.7188 0.875C31.5521 0.708333 31.3438 0.625 31.0938 0.625C30.8438 0.625 30.6354 0.708333 30.4688 0.875L16.5938 14.75L2.71875 0.875C2.55208 0.708333 2.34375 0.625 2.09375 0.625C1.84375 0.625 1.63542 0.708333 1.46875 0.875C1.30208 1.04167 1.21875 1.25 1.21875 1.5C1.21875 1.75 1.30208 1.95833 1.46875 2.125L15.3438 16L1.46875 29.875C1.30208 30.0417 1.21875 30.25 1.21875 30.5C1.21875 30.75 1.30208 30.9583 1.46875 31.125C1.63542 31.2917 1.84375 31.375 2.09375 31.375C2.34375 31.375 2.55208 31.2917 2.71875 31.125L16.5938 17.25L30.4688 31.125C30.6354 31.2917 30.8231 31.375 31.0317 31.375C31.2404 31.375 31.4487 31.2917 31.6567 31.125C31.8647 30.9583 31.9691 30.75 31.9697 30.5C31.9704 30.25 31.8454 30.0417 31.5947 29.875L17.8438 16Z"
              fill="#1B1918"
            />
          </svg>
        </button>
      </div>

      <p className={styles.signup}>
        Nu ai un cont? <a>Înregistreaza-te</a>
      </p>
      <form>
        <div className={styles["input-group"]}>
          <Input type="email" placeholder="Email" required={true} />
          <Input type="password" placeholder="Parolă" required={true} />
          <Input
            type="password"
            placeholder="Confirmă parola"
            required={true}
          />
        </div>
        <a className={styles["restore-pwd"]}>Ai uitat parola?</a>
        <Button type="submit" color="burgundy">
          Înregistrare
        </Button>
      </form>
    </div>
  );
};

export default Login;
