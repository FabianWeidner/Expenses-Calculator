import ExpenseItem from './ExpenseItem';
import classes from './ExpensesList.module.css';

const ExpensesList = (props) => {
  if (props.items.lenght === 0) {
    return (
      <div className={classes['expenses-list__fallback']}>
        No Expenses created for this year
      </div>
    );
  }

  return (
    <ul className={classes['expenses-list']}>
      {props.items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
