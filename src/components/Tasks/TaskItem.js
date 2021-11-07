import Card from '../UI/Card';
import Checkbox from '../UI/Checkbox';
import { useState, useContext } from 'react';
import TasksContext from '../../context/TasksContext';

const TaskItem = (props) => {
  const tasksContext = useContext(TasksContext);
  const [isChecked, setIsChecked] = useState(props.completed);

  const onChangeHandler = () => {
    setIsChecked((prevState) => !prevState);
    tasksContext.updateTaskCompletion(props.id);
  };

  return (
    <Card width='half' color='white'>
      <Checkbox
        color={props.color}
        checked={isChecked}
        onChange={onChangeHandler}
      >
        {props.name}
      </Checkbox>
    </Card>
  );
};

export default TaskItem;
