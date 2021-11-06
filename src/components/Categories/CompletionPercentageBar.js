import styles from './CompletionPercentageBar.module.css';

const CompletionPercentageBar = (props) => {
  return (
    <div className={styles['bar']}>
      <div
        style={{
          width: `${props.completedPercentage}%`,
          backgroundColor: props.color,
        }}
        className={styles['bar__value']}
      ></div>
    </div>
  );
};

export default CompletionPercentageBar;
