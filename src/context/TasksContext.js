import { createContext, useState } from 'react';

const COLORS_HEX = [
  '#7A97FF',
  '#9BD4B9',
  '#FF9A7A',
  '#CD7AFF',
  '#B2E362',
  '#E80000',
];

const DUMMY_CATEGORIES = [
  {
    id: 1,
    name: 'Routine',
    get color() {
      return COLORS_HEX[this.id - 1];
    },
  },
  // {
  //   id: 2,
  //   name: 'Work',
  //   get color() {
  //     return COLORS_HEX[this.id - 1];
  //   },
  // },
];

const DUMMY_TASKS = [
  {
    id: 1,
    name: 'Drink water after waking up',
    completed: false,
    category: DUMMY_CATEGORIES[0].name,
  },
  // {
  //   id: 2,
  //   name: 'Doing workout after work',
  //   completed: true,
  //   category: DUMMY_CATEGORIES[0].name,
  // },
  // {
  //   id: 3,
  //   name: 'Read 10 pages of a book',
  //   completed: false,
  //   category: DUMMY_CATEGORIES[0].name,
  // },
  // {
  //   id: 4,
  //   name: 'Check email at 10:00AM',
  //   completed: false,
  //   category: DUMMY_CATEGORIES[1].name,
  // },
  // {
  //   id: 5,
  //   name: 'Drink coffee during the break',
  //   completed: true,
  //   category: DUMMY_CATEGORIES[1].name,
  // },
  // {
  //   id: 6,
  //   name: 'Make an appointment with the boss',
  //   completed: true,
  //   category: DUMMY_CATEGORIES[1].name,
  // },
];

const TasksContext = createContext();

const TasksContextProvider = (props) => {
  const [tasks, setTasks] = useState(DUMMY_TASKS);
  const [categories, setCategories] = useState(DUMMY_CATEGORIES);

  const updateTaskCompletion = (taskId) => {
    const updatedTasks = [...tasks];
    updatedTasks.forEach((task) => {
      if (task.id === taskId) task.completed = !task.completed;
    });
    setTasks(updatedTasks);
  };

  const addNewCategory = (name) => {
    const updatedCategories = [...categories];
    const newCategoryId = updatedCategories.length + 1;
    updatedCategories.push({
      id: newCategoryId,
      name,
      color: COLORS_HEX[newCategoryId - 1],
    });

    setCategories(updatedCategories);
  };

  const addNewTask = (name, category) => {
    const updatedTasks = [...tasks];
    const newTaskId = updatedTasks.length + 1;

    if (!categories.some((categoryObj) => categoryObj.name === category)) {
      addNewCategory(category);
    }

    updatedTasks.push({
      id: newTaskId,
      name,
      completed: false,
      category,
    });

    setTasks(updatedTasks);
  };

  const context = {
    tasks,
    categories,
    updateTaskCompletion,
    addNewTask,
  };

  return (
    <TasksContext.Provider value={context}>
      {props.children}
    </TasksContext.Provider>
  );
};

export { TasksContextProvider };

export default TasksContext;
