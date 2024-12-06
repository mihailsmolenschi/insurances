import { SpinnerCircular } from "spinners-react";

const Spinner = ({ loading }) => {
  return (
    <SpinnerCircular
      color="#a40731"
      loading={loading.toString()}
      size={150}
      style={{
        display: "block",
        margin: "0 auto",
      }}
    />
  );
};

export default Spinner;
