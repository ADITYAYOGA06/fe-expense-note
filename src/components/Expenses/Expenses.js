import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import React, { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const [filterInfotext, setFilterInfoText] = useState("2024 & 2025");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    if (selectedYear === "2024") {
      setFilterInfoText("2023 & 2025");
    } else if (selectedYear === "2025") {
      setFilterInfoText("2023 & 2024");
    } else {
      setFilterInfoText("2024 & 2025");
    }
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p>No Expenses Found</p>;
  if(filteredExpenses.length > 0){
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <p className="yearHiddenInfo">
          Data for years {filterInfotext} is hidden
        </p>

        {expenseContent}
        
      </Card>
    </div>
  );
};

export default Expenses;
