import styles from './ExpenseItem.module.css';

const ExpenseItem = () => {
  const expenseDate = new Date(2021, 2, 28);
  return (
    <div className={styles['expense-item']}>
      <div>Date</div>
      <div className={styles['expense-item__description']}>
        <h2>Car Insurrance</h2>
        <div className={styles['expense-item__price']}>Amount</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
