import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {
      if(props.items.length === 0) {
        return (
            <h2 className="expenses-list__fallback">
            Found no expenses.
            </h2>
        );
      }

      
      const expenseContent = props.items.map((expense) => {
          return (
              <ExpenseItem key = {expense.id} expense = {expense}></ExpenseItem>
          )
        });
      

      return (
        <ul className="expenses-list">
        {expenseContent}
        </ul>
      );
};

export default ExpensesList;