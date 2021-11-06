import { useContext } from 'react';
import TasksContext from '../../context/TasksContext';
import CardsContainer from '../UI/CardsContainer';
import Row from '../UI/Row';
import TaskItem from './TaskItem';

const Tasks = () => {
  const tasksContext = useContext(TasksContext);

  const tasksItems = tasksContext.tasksInfo
    .map((taskCat) => {
      const color = taskCat.color;
      taskCat.tasks.forEach((taskItem) => (taskItem.color = color));

      return taskCat.tasks;
    })
    .flat();

  return (
    <Row>
      <h4>Tasks</h4>
      <CardsContainer>
        {tasksItems.map((taskItem, index) => (
          <TaskItem key={index} {...taskItem} />
        ))}
      </CardsContainer>
    </Row>
  );
};

export default Tasks;
