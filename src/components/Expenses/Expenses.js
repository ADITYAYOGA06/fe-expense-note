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
    // console.log('Expenses.js');
    // console.log(selectedYear);
  };

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
        
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        {/* <ExpenseItem
      title={props.items[0].title}
      amount={props.items[0].amount}
      date={props.items[0].date}
    />
    <ExpenseItem
      title={props.items[1].title}
      amount={props.items[1].amount}
      date={props.items[1].date}
    />
    <ExpenseItem
      title={props.items[2].title}
      amount={props.items[2].amount}
      date={props.items[2].date}
    />
    <ExpenseItem
      title={props.items[3].title}
      amount={props.items[3].amount}
      date={props.items[3].date}
    /> */}
      </Card>
    </div>
  );
};

export default Expenses;
