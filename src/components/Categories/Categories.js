import { useContext } from 'react';
import TasksContext from '../../context/TasksContext';
import CardsContainer from '../UI/CardsContainer';
import Row from '../UI/Row';
import CategoryItem from './CategoryItem';

const Categories = () => {
  const tasksContext = useContext(TasksContext);

  const categoryItems = tasksContext.categories.map((categoryObj) => {
    const taskOfCategory = tasksContext.tasks.filter(
      (task) => task.category === categoryObj.name
    );

    const numTotalTasks = taskOfCategory.length;
    const numCompletedTasks = taskOfCategory.filter(
      (task) => task.completed
    ).length;

    return {
      ...categoryObj,
      numTotalTasks,
      numCompletedTasks,
    };
  });

  return (
    <Row>
      <h4>Categories</h4>
      <CardsContainer>
        {categoryItems.map((catItem, index) => (
          <CategoryItem key={index} {...catItem} />
        ))}
      </CardsContainer>
    </Row>
  );
};

export default Categories;
