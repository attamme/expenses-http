/* import logo from './logo.svg'; */
import React, { useEffect, useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import Error from './components/UI/Error';

const App = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [expenses, setExpenses] = useState([])
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const getExpenses = async () => {
      setIsFetching(true);
      try {
        const response = await fetch('http://localhost:3005/expenses');
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error('Failed to fetch data!');
        }
        setExpenses(responseData.expenses);
      } catch (error) {
        setError({
          title: 'An error occurred!',
          message: 'Failed fetching expenses data, try again later!'
        })
        setShowError(true);
      }
      setIsFetching(false);
    }
    getExpenses();
    console.log(expenses)
  }, []);

  console.log(error)
  const errorHandler = () => {
    setError(null);
    setShowError(false);
  }

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    })

    console.log('In App.js');
    console.log(expense);
  }
  return (
    <div className="App">
      {showError && 
        <Error 
          title={error.title} 
          message={error.message} 
          onConfirm={errorHandler}
        />}
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses 
        expenses={expenses}
        isLoading={isFetching}   
      />
    </div>
  );
}

export default App;
