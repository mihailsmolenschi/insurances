import ArrowButton from "./ArrowButton";
import styles from "./OfferCard.module.scss";

const OfferCard = ({ img, title, text }) => {
  return (
    <div className={styles["offer-card"]}>
      <img className={styles.img} src={img} alt="a house" />
      <div className={styles.content}>
        <div className={styles.header}>{title}</div>
        <div className={styles.about}>
          <p className={styles.text}>{text}</p>

          <ArrowButton styleType="burgundy-bold">Vezi mai mult</ArrowButton>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
