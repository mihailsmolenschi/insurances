import styles from "./Header.module.scss";
import { useDispatch } from "react-redux";
import {
  toggleMenu,
  closeMenu,
  toggleModal,
  openLogin,
  openSignUp,
} from "../data/uiSlice";

const Header = () => {
  const dispatch = useDispatch();

  function handleMenuOpenState() {
    dispatch(toggleMenu());
  }

  function handleLogin() {
    dispatch(toggleModal());
    dispatch(openLogin());
    dispatch(closeMenu());
  }

  function handleSignup() {
    dispatch(toggleModal());
    dispatch(openSignUp());
    dispatch(closeMenu());
  }

  return (
    <header>
      <div className={styles.wrapper}>
        <div className={styles["menu-logo-container"]}>
          <button className={styles.menu} onClick={handleMenuOpenState}>
            <img src="./icons/menu1.svg" alt="menu" />
          </button>
          <div className={styles["logo-container"]}>
            <a href="#">
              <img
                className={styles.logo}
                src="./icons/minicode-logo-black.svg"
                alt="minicode logo"
              />
            </a>
          </div>
        </div>

        <div className={styles["moto-container"]}>
          <h2 className={styles.motto}>Cu siguranță, împreună!</h2>
        </div>

        <div className={styles["auth-container"]}>
          <button className={styles.login} type="button" onClick={handleLogin}>
            <img src="./icons/users.svg" alt="login" />
            <span>Logare</span>
          </button>
          <button
            className={styles.signup}
            type="button"
            onClick={handleSignup}
          >
            <img src="./icons/file-reg.svg" alt="signup" />
            <span>Înregistrare</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
