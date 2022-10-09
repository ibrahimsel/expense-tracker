import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2021')

  const handleYearFilterChange = (year) => {
    setSelectedYear(year)
  }

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYearOption={selectedYear}
          onYearFilterChange={handleYearFilterChange}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses
