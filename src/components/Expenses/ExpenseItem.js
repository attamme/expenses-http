import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import { useState } from 'react';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        console.log('Clicked!!!')
        setTitle(`Updated by click ${title}`)
        console.log(title)
    };

    return (
        <li>
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.price}</div>
            </div>
            <button className="expenses-item__price" onClick={clickHandler}>Click Me</button>
        </Card>
        </li>
);
};

export default ExpenseItem;