import { createContext } from 'react';

const colorsHex = ['#7a97ff', '#9bd4b9'];

const DUMMY_TASKS = [
  {
    id: 1,
    category: 'Routine',
    tasks: [
      { name: 'Drink water after waking up', completed: false },
      { name: 'Doing workout after work', completed: true },
      { name: 'Read 10 pages of a book', completed: false },
    ],
    get color() {
      return colorsHex[this.id - 1];
    },
  },
  {
    id: 2,
    category: 'Work',
    tasks: [
      { name: 'Drink water after waking up', completed: true },
      { name: 'Doing workout after work', completed: true },
      { name: 'Read 10 pages of a book', completed: false },
    ],
    get color() {
      return colorsHex[this.id - 1];
    },
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
