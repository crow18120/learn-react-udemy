import "./FormNewExpensive.css";
import { useState } from "react";

const FormNewExpensive = (props) => {
  // const [enterTitle, setEnterTitle] = useState('')
  // const [enterAmount, setEnterAmount] = useState('')
  // const [enterDate, setEnterDate] = useState('')

  const [userInput, setUserInput] = useState({
    enterTitle: "",
    enterAmount: "",
    enterDate: "",
  });

  const titleChangeHandler = (event) => {
    // setEnterTitle(event.target.value);
    setUserInput(
      (userInput) =>
        (userInput = {
          ...userInput,
          enterTitle: event.target.value,
        })
    );
  };

  const amountChangeHandler = (event) => {
    // setEnterAmount(event.target.value);
    setUserInput(
      (userInput) =>
        (userInput = {
          ...userInput,
          enterAmount: event.target.value,
        })
    );
  };

  const dateChangeHandler = (event) => {
    // setEnterDate(event.target.value);
    setUserInput(
      (userInput) =>
        (userInput = {
          ...userInput,
          enterDate: event.target.value,
        })
    );
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: userInput.enterTitle,
      amount: userInput.enterAmount,
      date: new Date(userInput.enterDate),
    };
    props.onSave(expenseData);

    setUserInput((userInput) => userInput = {
      ...userInput,
      enterAmount: "",
      enterDate: "",
      enterTitle: "",
    })
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enterTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enterAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.enterDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onclick={props.onCancel}>Cancel Add</button>
      </div>
    </form>
  );
};

export default FormNewExpensive;
