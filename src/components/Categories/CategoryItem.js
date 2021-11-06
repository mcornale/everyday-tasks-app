import CompletionPercentageBar from './CompletionPercentageBar';
import Card from '../UI/Card';

const CategoryItem = (props) => {
  const completedPercentage = Math.round(
    (props.numCompletedTasks / props.numTotalTasks) * 100
  );

  return (
    <Card width='half' color='white' padding='medium'>
      <h5
        style={{ color: props.color }}
      >{`${props.numCompletedTasks}/${props.numTotalTasks} tasks`}</h5>
      <h3>{props.name}</h3>
      <CompletionPercentageBar
        color={props.color}
        completedPercentage={completedPercentage}
      />
    </Card>
  );
};

export default CategoryItem;
