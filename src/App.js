import styles from './App.module.css';
import { TasksContextProvider } from './context/TasksContext';
import Categories from './components/Categories/Categories';
import Logo from './components/Logo/Logo';
import Tasks from './components/Tasks/Tasks';
import Calendar from './components/Calendar/Calendar';
import AddTask from './components/AddTask';

function App() {
  return (
    <TasksContextProvider>
      <main className={styles['main']}>
        <Logo />
        <Categories />
        <Tasks />
      </main>
      <div className={styles['sidebar']}>
        <Calendar />
        <AddTask />
      </div>
    </TasksContextProvider>
  );
}

export default App;
