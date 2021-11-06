import styles from './CategoryItem.module.css';
import CompletionPercentageBar from './CompletionPercentageBar';

const CategoryItem = (props) => {
  const completedPercentage = Math.round(
    (props.completedTasks / props.totalTasks) * 100
  );

  return (
    <div className={styles['category']}>
      <h5>{`${props.completedTasks}/${props.totalTasks} tasks`}</h5>
      <h3>{props.name}</h3>
      <CompletionPercentageBar completedPercentage={completedPercentage} />
    </div>
  );
};

export default CategoryItem;
