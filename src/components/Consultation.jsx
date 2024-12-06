import styles from "./Consultation.module.scss";
import Wrapper from "./layout/Wrapper";
import Button from "./ui/Button";

const Consultation = () => {
  return (
    <section className={styles.consultation}>
      <Wrapper className={styles.container}>
        <div className={styles.info}>
          <h3>Ai nevoie de o consultare?</h3>
          <p>
            Lasă numele și numărul tău de telefon, iar noi te vom contacta în
            cel mai scurt timp posibil.
          </p>
        </div>
        <form>
          <div className={styles["inputs-container"]}>
            <input type="text" placeholder="Nume/Prenume" />
            <input type="tel" placeholder="(+373) ___-___-___" />
          </div>
          <div className={styles["btn-wrapper"]}>
            <Button color="burgundy">Trimite</Button>
          </div>
        </form>
      </Wrapper>
    </section>
  );
};

export default Consultation;
