import { createContext } from 'react';

const DUMMY_TASKS = [
  {
    id: 1,
    category: 'Routine',
    tasks: [
      { task: 'Drink water after waking up', completed: false },
      { task: 'Doing workout after work', completed: true },
      { task: 'Read 10 pages of a book', completed: false },
    ],
    color: getComputedStyle(document.documentElement).getPropertyValue(
      `--color-dark-blue`
    ),
  },
  {
    id: 2,
    category: 'Work',
    tasks: [
      { task: 'Drink water after waking up', completed: true },
      { task: 'Doing workout after work', completed: true },
      { task: 'Read 10 pages of a book', completed: false },
    ],
    color: getComputedStyle(document.documentElement).getPropertyValue(
      `--color-aqua-green`
    ),
  },
];

const TasksContext = createContext();

const TasksContextProvider = (props) => {
  const initialContext = {
    tasksInfo: DUMMY_TASKS,
  };

  return (
    <TasksContext.Provider value={initialContext}>
      {props.children}
    </TasksContext.Provider>
  );
};

export { TasksContextProvider };

export default TasksContext;
