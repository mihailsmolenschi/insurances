import styles from "./ProgressBar.module.scss";

const ProgressBar = ({ currentStep, steps = 4 }) => {
  let progress = [];
  for (let i = 1; i <= steps; i++) {
    if (i === currentStep) {
      progress.push(<img key={i} src="./icons/circle-check.svg" alt="" />);
    } else {
      progress.push(<img key={i} src="./icons/circle-start.svg" alt="" />);
    }
  }

  return <div className={styles.progressbar}>{progress}</div>;
};

export default ProgressBar;
