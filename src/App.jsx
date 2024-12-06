import { useSelector } from "react-redux";

import styles from "./App.module.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import Offers from "./components/Offers";
import Consultation from "./components/Consultation";
import Insurances from "./components/Insurances";
import Menu from "./components/Menu";
import Modal from "./components/ui/Modal";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  const isMenuOpen = useSelector((state) => state.ui.isMenuOpen);
  const isLoginOpen = useSelector((state) => state.ui.isLoggingIn);
  const isSignupOpen = useSelector((state) => state.ui.isSigningUp);

  return (
    <div className={styles.app}>
      {isLoginOpen ? (
        <Modal>
          <Login />
        </Modal>
      ) : null}

      {isSignupOpen ? (
        <Modal>
          <Signup />
        </Modal>
      ) : null}

      {isMenuOpen ? <Menu /> : null}

      <Header />
      <main>
        <Insurances />
        <Consultation />
        <Offers />
        <Reviews />
      </main>

      <Footer />
    </div>
  );
};

export default App;
