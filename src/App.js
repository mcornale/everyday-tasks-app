import styles from './App.module.css';
import { TasksContextProvider } from './context/TasksContext';
import Categories from './components/Categories/Categories';
import Logo from './components/Logo/Logo';

function App() {
  return (
    <TasksContextProvider>
      <main className={styles['main']}>
        <Logo />
        <Categories />
      </main>
      <div className={styles['sidebar']}></div>
    </TasksContextProvider>
  );
}

export default App;
