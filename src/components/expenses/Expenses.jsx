import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../common/Card";
import "./Expenses.css";
import ExpensesFilter from "../new-expenses/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filter, setFilter] = useState("2020");

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filter;
  });

  const onChangeFilterHandler = (year) => {
    setFilter(year);
  };

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={onChangeFilterHandler} />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
