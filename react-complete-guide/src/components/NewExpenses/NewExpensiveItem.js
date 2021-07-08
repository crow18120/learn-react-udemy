import "./NewExpensiveItem.css";
import FormNewExpensive from "./FormNewExpensive";
import { useState } from "react";

const NewExpensiveItem = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  const saveNewExpenseHandler = (obj) => {
    const newExpense = {
      ...obj,
      id: Math.random().toString(),
    };

    props.onSaveNewExpense(newExpense);
    setIsAdding(false);
  };

  const openFormHandler = () => {
    setIsAdding(true);
  }

  const cancelFormHandler = () => {
    setIsAdding(false);
  }

  const addingContent = () => {
    return <FormNewExpensive onSave={saveNewExpenseHandler} onCancel={cancelFormHandler}/>;
  };

  const noneAddingContent = () => {
    return <button onClick={openFormHandler}>Add New Expense</button>
  }

  return <div className="new-expense">
    {isAdding ? addingContent() : noneAddingContent()}
  </div>;
};

export default NewExpensiveItem;
