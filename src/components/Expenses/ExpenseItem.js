import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';

const ExpenseItem = (props) => {
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;
    const [title, setTitle] = useState(props.expense.title);

    const clickHandler =  () => {
        setTitle('Updated');
        //console.log('ClickHandler Called');
        console.log(title);
    };

    

    return (
        <Card className="expense-item">
            <ExpenseDate date = {props.expense.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.expense.amount}</div>
                <button onClick = {clickHandler}>Change Title</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;