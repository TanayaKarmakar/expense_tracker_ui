import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    
    
      const expenseItems = props.expenses.map((expense) => {
        return (
            <Card className = "expenses">
                <ExpenseItem expense = {expense}></ExpenseItem>
            </Card>
        )
      });

      return (
        <div>
          {expenseItems}
        </div>
      );
};


export default Expenses;