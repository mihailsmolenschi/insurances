import styles from "./FinalPrice.module.scss";
import Input from "../ui/Input";

const FinalPrice = () => {
  return (
    <div className={styles["market-price"]}>
      <h1>Prețul final</h1>

      <div className={styles.group}>
        <label htmlFor="">Valoarea de piață ( € )</label>
        <Input placeholder={0} />
      </div>
    </div>
  );
};

export default FinalPrice;
