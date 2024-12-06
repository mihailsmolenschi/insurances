import styles from "./Brands.module.scss";
import Input from "../ui/Input";

const Brands = () => {
  let radioButtons = [];
  let year = 2010;
  for (let i = 0; i <= 11; i++) {
    radioButtons.push(
      <div key={i} className={styles["radio-btns"]}>
        <input type="radio" id={`radio${i}`} value={year} />
        <label htmlFor={`radio${i}`}>{year}</label>
      </div>
    );
    year++;
  }

  return (
    <div className={styles.brands}>
      <h3 className={styles.title}>Alege marca</h3>
      <div className={styles["input-container"]}>
        <div className={styles["group"]}>
          <label htmlFor="">Marca</label>
          <Input type="text" placeholder="Introduceți marca" />
        </div>

        <div className={styles["group"]}>
          <label htmlFor="">Modelul</label>
          <Input type="text" placeholder="Introduceți modelul" />
        </div>

        <p>Anul producerii</p>
        <div className={styles["radio-group"]}>{radioButtons}</div>
      </div>
    </div>
  );
};

export default Brands;
