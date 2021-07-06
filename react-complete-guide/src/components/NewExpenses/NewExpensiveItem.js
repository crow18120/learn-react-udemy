import "./NewExpensiveItem.css";
import FormNewExpensive from "./FormNewExpensive";
import { useState } from "react";

const NewExpensiveItem = (props) => {
  const saveNewExpenseHandler = (obj) => {
    const newExpense = {
      ...obj,
      id: Math.random().toString(),
    };

    props.onSaveNewExpense(newExpense);
  };

  return (
    <div className="new-expense">
      <FormNewExpensive onSave={saveNewExpenseHandler} />
    </div>
  );
};

export default NewExpensiveItem;
