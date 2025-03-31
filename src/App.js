/* import logo from './logo.svg'; */
import React, { useEffect, useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'id1',
    date: new Date(2024, 10, 28),
    title: 'Book',
    price: 30.99,
  },
  {
    id: 'id2',
    date: new Date(2023, 10, 28),
    title: 'New Jeans',
    price: 99.99,
  },
  {
    id: 'id3',
    date: new Date(2023, 10, 28),
    title: 'New Book',
    price: 39.99,
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const expensesFromLS = JSON.parse(localStorage.getItem('expenses'));
    return expensesFromLS || [];
  });
  
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    })

    console.log('In App.js');
    console.log(expense);
  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
