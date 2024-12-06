import Wrapper from "./layout/Wrapper";
import styles from "./Reviews.module.scss";
import ReviewCard from "./ui/ReviewCard";
import useFetch from "../hooks/useFetch";
import Spinner from "./ui/Spinners";
import { useState } from "react";
import Dot from "./ui/Dot";

const Reviews = () => {
  const [activeDot, setActiveDot] = useState(1);

  const data = useFetch("http://localhost:3000/reviews");

  let reviews = null;
  let reviewsList = [];
  let dotsList = [];

  if (!data.isPending) {
    reviews = data.data;

    let { min, max } = createPagination(activeDot);
    reviewsList = createReviewsList(min, max);
    dotsList = createDotsList();
  }

  function createPagination(currentActiveDot) {
    // create range
    let topRangeLimit = currentActiveDot * 4;
    let minRangeLimit = topRangeLimit - 4;

    return { min: minRangeLimit, max: topRangeLimit };
  }

  function createDotsList() {
    let dots = reviews.length / 4;

    const dotsList = [];

    for (let i = 1; i <= dots; i++) {
      dotsList.push(
        <Dot
          key={i}
          id={i}
          sendId={updateActiveButton}
          active={activeDot === i}
        >
          &nbsp;
        </Dot>
      );
    }

    return dotsList;
  }

  function createReviewsList(min, max) {
    const r = reviews.slice(min, max);

    const reviewsList = r.map((review) => (
      <ReviewCard
        key={review.id}
        fullname={review.fullname}
        rating={review.rating}
        review={review.review}
        photo={review.photo}
      />
    ));

    return reviewsList;
  }

  function updateActiveButton(id) {
    setActiveDot(id);
  }

  return (
    <section className={styles.reviews}>
      <Wrapper className={styles.container}>
        <h2 className={styles["section-title"]}>Recenziile clienților</h2>

        <div className={styles["cards-container"]}>
          {!data.isPending ? reviewsList : <Spinner loading={data.isPending} />}
        </div>

        <div className={styles["dots-container"]}>{dotsList}</div>
      </Wrapper>
    </section>
  );
};

export default Reviews;
