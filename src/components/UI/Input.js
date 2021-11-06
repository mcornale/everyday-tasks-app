import { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef((props, ref) => {
  return (
    <div className={styles['input-group']}>
      <label className={styles['input-group__label']}>{props.label}</label>
      <input
        ref={ref}
        className={styles['input-group__input']}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
});

export default Input;
