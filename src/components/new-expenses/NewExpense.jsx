import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isNewExpense, setIsNewExpense] = useState(false);

  const onNewExpense = () => {
    setIsNewExpense(true);
  };

  const onCancelHandler = () => {
    setIsNewExpense(false);
  };

  const saveExpenseDataHandler = (newExpense) => {
    const expenseData = {
      ...newExpense,
      id: Math.random.toString,
    };
    props.onAddExpense(expenseData);
    setIsNewExpense(false);
  };

  return (
    <div className="new-expense">
      {!isNewExpense ? (
        <button onClick={onNewExpense}>Add New Expense</button>
      ) : (
        <ExpenseForm onSaveExpense={saveExpenseDataHandler} onCancel={onCancelHandler} />
      )}
    </div>
  );
};

export default NewExpense;
