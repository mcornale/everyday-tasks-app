import { useContext } from 'react';
import TasksContext from '../../context/TasksContext';
import CardsContainer from '../UI/CardsContainer';
import Row from '../UI/Row';
import TaskItem from './TaskItem';

const Tasks = () => {
  const tasksContext = useContext(TasksContext);

  const tasksItems = tasksContext.tasks.map((task) => {
    const color = tasksContext.categories.find(
      (categoryObj) => categoryObj.name === task.category
    ).color;

    return {
      ...task,
      color,
    };
  });

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
