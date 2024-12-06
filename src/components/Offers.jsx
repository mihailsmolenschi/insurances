import { useDispatch, useSelector } from "react-redux";
import styles from "./Offers.module.scss";
import Wrapper from "./layout/Wrapper";
import ArrowButton from "./ui/ArrowButton";
import OfferCard from "./ui/OfferCard";
import Spinner from "./ui/Spinners";
import { useEffect } from "react";
import { fetchOffers } from "../data/offersSlice";

const Offers = () => {
  const dispatch = useDispatch();
  const { offers, status, error } = useSelector((state) => state.offers);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchOffers());
    }
  }, [dispatch, status]);

  const offersList = offers.map((offer) => (
    <OfferCard
      key={offer.id}
      title={offer.title}
      text={offer.text}
      img={offer.img}
    />
  ));

  return (
    <section className={styles.offers}>
      <Wrapper className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Oferte</h2>
          <ArrowButton styleType="burgundy-bold">
            Vezi toate ofertele
          </ArrowButton>
        </div>
        <div className={styles.cards}>
          {status === "loading" && <Spinner loading={status} />}

          {status === "failed" && <div>Error: {error}</div>}

          {status === "succeeded" && offersList}
        </div>
      </Wrapper>
    </section>
  );
};

export default Offers;
