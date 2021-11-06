import styles from './CardsContainer.module.css';

const CardsContainer = (props) => {
  return <div className={styles['cards-container']}>{props.children}</div>;
};

export default CardsContainer;
