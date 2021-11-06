import logoSrc from '../../assets/images/logo.svg';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <header className={styles['header']}>
      <img src={logoSrc} alt='todoLogo' />
      <h1 className={styles['header__title']}>
        <span>ED</span>Tasks
      </h1>
    </header>
  );
};

export default Logo;
