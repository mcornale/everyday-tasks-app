import styles from './Calendar.module.css';
import Card from '../UI/Card';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'Septmeber',
  'October',
  'November',
  'December',
];

const Calendar = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = MONTHS[d.getMonth()].slice(0, 3);
  const date = d.getDate();

  return (
    <Card width='full' color='blue' padding='xs'>
      <p className={styles['date']}>{`${date} ${month} ${year}`}</p>
    </Card>
  );
};

export default Calendar;
