import CompletionPercentageBar from './CompletionPercentageBar';
import Card from '../UI/Card';

const CategoryItem = (props) => {
  const completedPercentage = Math.round(
    (props.completedTasks / props.totalTasks) * 100
  );

  return (
    <Card>
      <h5>{`${props.completedTasks}/${props.totalTasks} tasks`}</h5>
      <h3>{props.name}</h3>
      <CompletionPercentageBar completedPercentage={completedPercentage} />
    </Card>
  );
};

export default CategoryItem;
