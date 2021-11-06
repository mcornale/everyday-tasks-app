import Card from '../UI/Card';
import Checkbox from '../UI/Checkbox';
import { useState } from 'react';

const TaskItem = (props) => {
  const [isChecked, setIsChecked] = useState(props.completed);

  const onChangeHandler = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <Card>
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
