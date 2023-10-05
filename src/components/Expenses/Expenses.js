import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";

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

        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
