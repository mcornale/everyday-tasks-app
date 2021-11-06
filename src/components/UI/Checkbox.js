import styles from './Checkbox.module.css';

const Checkbox = (props) => {
  return (
    <label className={styles['checkbox__label']}>
      <input
        type='checkbox'
        checked={props.checked}
        onChange={props.onChange}
      />
      <span style={{ color: props.color }}>{props.children}</span>
      <div className={styles['checkbox__checkmark']}>
        <div
          style={{ backgroundColor: props.color }}
          className={styles['checkbox__checkmark-inner']}
        ></div>
      </div>
    </label>
  );
};

export default Checkbox;
