import styles from "./Footer.module.scss";
import Button from "./ui/Button";
import Wrapper from "./layout/Wrapper";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper className={styles.container}>
        <div className={`${styles.box} ${styles.action}`}>
          <img src="./icons/minicode-logo.svg" alt="minicode" />
          <p>
            Dezvoltarea companiei MINICODE a fost determinată în mare parte de
            flexibilitatea soluțiilor și ofertelor, adaptivitații față de
            cerințele pieții și cerințelor clienților
          </p>
          <Button color="white">Comandă apel</Button>
        </div>

        <div className={`${styles.box} ${styles["useful-links"]}`}>
          <h3>Companie</h3>
          <ul>
            <li>
              <a href="#">Produse de asigurare</a>
            </li>
            <li>
              <a href="#">Caz asigurat</a>
            </li>
            <li>
              <a href="#">Noutăți</a>
            </li>
            <li>
              <a href="#">Carieră</a>
            </li>
            <li>
              <a href="#">Întrebări</a>
            </li>
          </ul>
        </div>

        <div className={`${styles.box} ${styles["contact-info"]}`}>
          <h3>Contacte</h3>
          <ul>
            <li>
              <a href="tel:+373 69 845 825">+373 69 845 825</a>
            </li>
            <li>
              <a href="tel:+373 22 824 845">+373 22 824 845</a>
            </li>
            <li>mun. Chișinău, str. București, 101</li>
          </ul>
        </div>

        <div className={`${styles.box} ${styles["social-media"]}`}>
          <h3>Social Media</h3>
          <ul>
            <li>
              <a href="#">
                <img src="./icons/viber.svg" alt="viber" />
              </a>
              <a href="#">
                <img src="./icons/whatsapp.svg" alt="whatsapp" />
              </a>
            </li>

            <li>
              <a href="#">
                <img src="./icons/facebook.svg" alt="facebook" />
              </a>
              <a href="#">
                <img src="./icons/telegram.svg" alt="telegram" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./icons/instagram.svg" alt="instagram" />
              </a>
            </li>
          </ul>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
