import { useState } from 'react';
import styles from './ExpenseForm.module.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitel] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitel(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitel('');
    setEnteredAmount('');
    setEnteredDate('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={styles['new-expense__controls']}>
        <div className={styles['new-expense__control']}>
          <label>Title</label>
          <input
            value={enteredTitle}
            type="text"
            onChange={titleChangeHandler}
          />
        </div>
        <div className={styles['new-expense__control']}>
          <label>Amount</label>
          <input
            value={enteredAmount}
            type="number"
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className={styles['new-expense__control']}>
          <label>Date</label>
          <input
            value={enteredDate}
            type="date"
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className={styles['new-expense__actions']}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
