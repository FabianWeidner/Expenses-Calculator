import ExpenseForm from './ExpenseForm';
import styles from './NewExpense.module.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpenseData(expenseData);
  };
  return (
    <div className={styles['new-expense']}>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
