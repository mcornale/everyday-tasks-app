import styles from './App.module.css';
import Logo from './components/Logo';

function App() {
  return (
    <>
      <main className={styles['main']}>
        <Logo />
      </main>
      <div className={styles['sidebar']}></div>
    </>
  );
}

export default App;
