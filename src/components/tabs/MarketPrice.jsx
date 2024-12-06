import styles from "./MarketPrice.module.scss";

import Input from "../ui/Input";

const MarketPrice = () => {
  return (
    <div className={styles["market-price"]}>
      <h1>Alege valoarea pe piață</h1>

      <div className={styles.group}>
        <label htmlFor="">Valoarea de piață ( € )</label>
        <Input placeholder={0} />
      </div>
    </div>
  );
};

export default MarketPrice;
