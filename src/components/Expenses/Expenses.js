import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import styles from './Expenses.module.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filteredYearHandler = (choosenYear) => {
    setFilteredYear(choosenYear);
  };

  const filteredExpenses = props.items.filter((year) => {
    return year.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No entry created.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item) => {
      return (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      );
    });
  }

  return (
    <Card className={styles.expenses}>
      <div>
        <ExpensesFilter
          selected={filteredYear}
          onFilteredYear={filteredYearHandler}
        />
        {expensesContent}
      </div>
    </Card>
  );
};

export default Expenses;
