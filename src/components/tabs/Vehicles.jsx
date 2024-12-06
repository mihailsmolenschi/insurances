import styles from "./Vehicles.module.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchVehicles } from "../../data/vehicleSlice";
import { updateVehicle } from "../../data/userSelectionSlice";

const Vehicles = () => {
  const { vehicles, status } = useSelector((state) => state.vehicles);
  const userSelection = useSelector((state) => state.userSelection);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchVehicles());
    }
  }, [dispatch, status]);

  const vehicleList = vehicles.map((vehicle) => {
    return (
      <div
        key={vehicle.id}
        className={`${styles.card} ${
          userSelection.tabs.vehicle.id === vehicle.id ? styles.selected : ""
        }`}
        onClick={() => dispatch(updateVehicle(vehicle))}
      >
        <img src={vehicle.icon} alt={vehicle.vehicle} />
        <p>{vehicle.description}</p>
      </div>
    );
  });

  return (
    <>
      <h3 className={styles.title}>Alege tipul autovehiculului</h3>

      <div className={styles["selection-container"]}>{vehicleList}</div>
    </>
  );
};

export default Vehicles;
