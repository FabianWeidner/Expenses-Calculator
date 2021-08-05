import { useState } from 'react';
import Card from '../UI/Card';
import styles from './Expenses.module.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filteredYearHandler = (choosenYear) => {
    setFilteredYear(choosenYear);
  };

  const filteredExpenses = props.items.filter((year) => {
    return year.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className={styles.expenses}>
      <div>
        <ExpensesFilter
          selected={filteredYear}
          onFilteredYear={filteredYearHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </div>
    </Card>
  );
};

export default Expenses;
