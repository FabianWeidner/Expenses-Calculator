import styles from './ExpenseDate.module.css';

const ExpenseDate = (props) => {
  const expenseMonth = props.date.toLocaleDateString('en-Us', {
    month: 'long',
  });

  const expenseDay = props.date.toLocaleDateString('en-Us', {
    day: 'numeric',
  });

  const expenseYear = props.date.getFullYear();
  return (
    <div className={styles['expense-date']}>
      <div className={styles['expense-date__mont']}>{expenseMonth}</div>
      <div className={styles['expense-date__day']}>{expenseDay}</div>
      <div className={styles['expense-date__year']}>{expenseYear}</div>
    </div>
  );
};

export default ExpenseDate;
