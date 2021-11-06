import styles from './Card.module.css';

const Card = (props) => {
  return (
    <div
      className={`${styles['card']} ${styles[`card--${props.width}`]} ${
        styles[`card--padding-${props.padding}`]
      } ${styles[`card--${props.color}`]}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
