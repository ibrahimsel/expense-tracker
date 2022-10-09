import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
import './ExpenseForm.css'
const NewExpense = (props) => {
  const [displayNewExpenseForm, setDisplayNewExpenseForm] = useState(false)

  const handleDisplayNewExpenseForm = () => {
    setDisplayNewExpenseForm(true)
  }

  const handleNewExpenseSubmit = (expense) => {
    const expenseData = {
      id: Math.random().toString(),
      ...expense,
    }
    props.onNewExpenseAdd(expenseData)
    setDisplayNewExpenseForm(false)
    return expenseData
  }

  return (
    <div className="new-expense">
      {displayNewExpenseForm ? (
        <ExpenseForm
          setDisplayItem={setDisplayNewExpenseForm}
          onExpenseFormSubmit={handleNewExpenseSubmit}
        />
      ) : (
        <button
          type="button"
          className="new-expense"
          onClick={handleDisplayNewExpenseForm}
        >
          Add new expense
        </button>
      )}
    </div>
  )
}

export default NewExpense
