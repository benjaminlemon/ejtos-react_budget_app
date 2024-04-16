import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const BUDGET_MAX = 20000;
  const { budget, currency, expenses, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  useEffect(() => {
    if (newBudget) {
      dispatch({
        type: "SET_BUDGET",
        payload: newBudget,
      });
    }
  }, [newBudget, budget, dispatch]);

  const handleBudgetChange = (event) => {
    if (parseInt(event.target.value) > BUDGET_MAX) {
      alert(
        `The budget cannot exceed ${
          currency + " " + BUDGET_MAX.toLocaleString()
        }`
      );
      setNewBudget(BUDGET_MAX);
      return;
    }

    setNewBudget(event.target.value);
  };

  const handleBudgetMinimum = (event) => {
    if (parseInt(event.target.value) < totalExpenses) {
      alert(`You cannot reduce the budget value lower than the spending`);
      setNewBudget(totalExpenses);

      return;
    }

    setNewBudget(newBudget);
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="10"
        max={BUDGET_MAX}
        min={totalExpenses}
        value={budget}
        onChange={handleBudgetChange}
        onBlur={handleBudgetMinimum}
      ></input>
    </div>
  );
};

export default Budget;
