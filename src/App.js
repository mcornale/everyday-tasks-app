import styles from './App.module.css';
import { TasksContextProvider } from './context/TasksContext';
import Categories from './components/Categories/Categories';
import Logo from './components/Logo/Logo';
import Tasks from './components/Tasks/Tasks';

function App() {
  return (
    <TasksContextProvider>
      <main className={styles['main']}>
        <Logo />
        <Categories />
        <Tasks />
      </main>
      <div className={styles['sidebar']}></div>
    </TasksContextProvider>
  );
}

export default App;
