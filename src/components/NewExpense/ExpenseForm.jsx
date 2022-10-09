import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const handleTitleChange = (event) => {
    setEnteredTitle(event.target.value)
  }

  const [enteredAmount, setEnteredAmount] = useState('')
  const handleAmountChange = (event) => {
    setEnteredAmount(event.target.value)
  }

  const [enteredDate, setEnteredDate] = useState('')
  const handleDateChange = (event) => {
    setEnteredDate(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const expenseData = {
      title: enteredTitle,
      amount: Number(enteredAmount),
      date: new Date(enteredDate),
    }
    props.onExpenseFormSubmit(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  const handleCloseNewExpenseForm = () => {
    props.setDisplayItem(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={handleAmountChange}
            min={0.01}
            step={0.01}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={handleDateChange} />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>

      <div className="new-expense__actions">
        <button onClick={handleCloseNewExpenseForm}>Cancel</button>
      </div>
    </form>
  )
}

export default ExpenseForm
