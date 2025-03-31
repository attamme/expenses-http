import React, {useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpensesList';

const Expenses = (props) => {
  const {expenses} = props;

    const [filteredYear, setFilteredYear] = useState('2023');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        console.log('Valitud aasta on:', selectedYear);
    }

    const filteredExpenses = expenses.filter((expense) => {
        return new Date(expense.date).getFullYear() === filteredYear;
    });


    return (
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                <ExpenseList 
                  expenses={filteredExpenses}
                  isLoading={props.isLoading}
                />
            </Card>
  );
};

export default Expenses;