import { useContext } from 'react';
import TasksContext from '../../context/TasksContext';
import styles from './Categories.module.css';
import CategoryItem from './CategoryItem';

const Categories = () => {
  const tasksContext = useContext(TasksContext);

  const categoryItems = tasksContext.tasksInfo.map((tasksItem) => ({
    name: tasksItem.category,
    totalTasks: tasksItem.tasks.length,
    completedTasks: tasksItem.tasks.filter((task) => task.completed).length,
  }));

  return (
    <div className={styles['categories']}>
      <h4>Categories</h4>
      <div className={styles['categories__loop']}>
        {categoryItems.map((catItem) => (
          <CategoryItem {...catItem} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
