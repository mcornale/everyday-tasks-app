import { useContext } from 'react';
import TasksContext from '../../context/TasksContext';
import CardsContainer from '../UI/CardsContainer';
import Row from '../UI/Row';
import CategoryItem from './CategoryItem';

const Categories = () => {
  const tasksContext = useContext(TasksContext);

  const categoryItems = tasksContext.tasksInfo.map((tasksItem) => ({
    name: tasksItem.category,
    totalTasks: tasksItem.tasks.length,
    completedTasks: tasksItem.tasks.filter((task) => task.completed).length,
  }));

  return (
    <Row>
      <h4>Categories</h4>
      <CardsContainer>
        {categoryItems.map((catItem) => (
          <CategoryItem {...catItem} />
        ))}
      </CardsContainer>
    </Row>
  );
};

export default Categories;
