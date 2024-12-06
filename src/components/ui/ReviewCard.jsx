import styles from "./ReviewCard.module.scss";
import Star from "./Star";

const ReviewCard = ({ fullname, rating, review, photo }) => {
  let userStars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      userStars.push(<Star key={i} type="filled" />);
    } else {
      userStars.push(<Star key={i} />);
    }
  }

  return (
    <div className={styles.card}>
      <img className={styles["user-photo"]} src={photo} alt={fullname} />
      <div className={styles["user-feedback"]}>
        <h3 className={styles.username}>{fullname}</h3>
        <div className={styles.stars}>{userStars}</div>
        <p className={styles.review}>{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
