import { useDispatch, useSelector } from "react-redux";
import styles from "./Insurances.module.scss";
import Wrapper from "./layout/Wrapper";
import ArrowButton from "./ui/ArrowButton";
import Button from "./ui/Button";
import { useEffect } from "react";
import { fetchInsurances } from "../data/insurancesSlice";
import { fetchVehicles } from "../data/vehicleSlice";
import { updateVehicle } from "../data/userSelectionSlice";
import Brands from "./tabs/Brands";
import {
  decrementTab,
  incremetTab,
  setCurrentTab,
  toggleAccordionOne,
  toggleAccordionTwo,
} from "../data/uiSlice";
import Vehicles from "./tabs/Vehicles";
import MarketPrice from "./tabs/MarketPrice";
import FinalPrice from "./tabs/FinalPrice";
import ProgressBar from "./ui/ProgressBar";
import ContactBar from "./ui/ContactBar";

const Insurances = () => {
  const dispatch = useDispatch();
  const { isAccordionOneCollapsed } = useSelector((state) => state.ui);
  const { isAccordionTwoCollapsed } = useSelector((state) => state.ui);
  const currentTab = useSelector((state) => state.ui.currentTab);

  // const {
  //   insurances,
  //   status: insurancesStatus,
  //   error: insurancesError,
  // } = useSelector((state) => state.insurances);

  // const userSelection = useSelector((state) => state.userSelection);

  // useEffect(() => {
  //   if (insurancesStatus === "idle") {
  //     dispatch(fetchInsurances());
  //   }
  // }, [dispatch, insurancesStatus]);

  let showTab = <Vehicles />;
  switch (currentTab) {
    case 1:
      showTab = <Vehicles />;
      break;
    case 2:
      showTab = <Brands />;
      break;
    case 3:
      showTab = <MarketPrice />;
      break;
    case 4:
      showTab = <FinalPrice />;
      break;
    default:
      showTab = <Vehicles />;
      dispatch(setCurrentTab(1));
      break;
  }

  return (
    <section className={styles.insurances}>
      <ContactBar />

      <Wrapper className={styles.container}>
        <div className={styles["insurance-types"]}>
          <h3 className={styles.title}>Alege tipul de asigurare</h3>
          <div className={styles["tab-list"]}>
            <button
              className={styles.tab}
              aria-selected="false"
              role="tab"
              aria-controls="panel-1"
            >
              Carte verde
            </button>
            <button
              className={styles.tab}
              role="tab"
              aria-controls="panel-2"
              aria-selected="false"
            >
              RCA
            </button>
            <button
              className={`${styles.tab} ${styles.active}`}
              role="tab"
              aria-controls="panel-3"
              aria-selected="true"
            >
              Casco
            </button>
            <button
              className={styles.tab}
              role="tab"
              aria-controls="panel-4"
              aria-selected="false"
            >
              Medicală
            </button>
            <button
              className={styles.tab}
              role="tab"
              aria-controls="panel-5"
              aria-selected="false"
            >
              Accidente
            </button>
            <button
              className={styles.tab}
              role="tab"
              aria-controls="panel-6"
              aria-selected="false"
            >
              Bunuri
            </button>
            <button
              className={styles.tab}
              role="tab"
              aria-controls="panel-7"
              aria-selected="false"
            >
              Locuințe (imobile)
            </button>
            <ArrowButton>Altele</ArrowButton>
          </div>
        </div>

        <div className={styles["details-section"]}>
          <div className={styles["calculator-section"]}>
            <div className={styles["selection-tab"]}>{showTab}</div>

            <div className={styles["tab-controls"]}>
              <Button onClick={() => dispatch(decrementTab())}>
                <>
                  <ArrowButton arrowType="left" styleType="white-left">
                    Înapoi
                  </ArrowButton>
                </>
              </Button>
              <Button onClick={() => dispatch(incremetTab())}>
                <>
                  <ArrowButton arrowType="right" styleType="burgundy-right">
                    {currentTab === 3 && "Vezi coșul"}
                    {currentTab === 4 && "Comandă și achită online"}
                    {currentTab !== 3 && currentTab !== 4 && "Înainte"}
                  </ArrowButton>
                </>
              </Button>
            </div>
          </div>

          <div className={styles["collapsible-section"]}>
            <div
              className={styles["collapse-container"]}
              onClick={() => {
                dispatch(toggleAccordionOne());
              }}
            >
              <div className={styles["collapse-header"]}>
                <h5>Obiectul asigurării</h5>
                <img
                  className={styles["btn-close"]}
                  src="./icons/close.svg"
                  alt="X"
                />
              </div>
              <div
                className={`${styles.description} ${
                  isAccordionOneCollapsed ? styles.collapse : ""
                }`}
              >
                <p>
                  Autovehicule înmatriculate în Republica Moldova, care aparţin
                  persoanelor fizice şi juridice.
                </p>
                <p>
                  Echipamentul suplimentar, care nu intră în dotarea
                  autovehiculului conform listei de dotări ale uzinei
                  producătoare.
                </p>
                <p>
                  Conducătorul auto şi pasagerii, pentru cazuri de accidente
                  care pot avea loc în timpul accidentelor rutiere.
                </p>
              </div>
            </div>
            <div
              className={styles["collapse-container"]}
              onClick={() => {
                dispatch(toggleAccordionTwo());
              }}
            >
              <div className={styles["collapse-header"]}>
                <h5>Riscuri și obligații</h5>
                <img
                  className={styles["btn-close"]}
                  src="./icons/close.svg"
                  alt="X"
                />
              </div>
              <div
                className={`${styles.description} ${
                  isAccordionTwoCollapsed ? styles.collapse : ""
                }`}
              >
                <p>
                  Autovehicule înmatriculate în Republica Moldova, care aparţin
                  persoanelor fizice şi juridice.
                </p>
                <p>
                  Echipamentul suplimentar, care nu intră în dotarea
                  autovehiculului conform listei de dotări ale uzinei
                  producătoare.
                </p>
                <p>
                  Conducătorul auto şi pasagerii, pentru cazuri de accidente
                  care pot avea loc în timpul accidentelor rutiere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>

      <ProgressBar currentStep={currentTab} />
    </section>
  );
};

export default Insurances;
