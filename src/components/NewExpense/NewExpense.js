import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import React, {useState} from 'react';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
      setIsEditing(true);
      console.log('form edit open')
  }

  const stopEditingHandler = () => {
      setIsEditing(false);
      console.log('form edit close')
  }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        stopEditingHandler();
    }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
}

export default NewExpense;