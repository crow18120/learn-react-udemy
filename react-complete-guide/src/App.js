// import logo from "./logo.svg";
import "./App.css";
import Expensive from "./components/Expenses/Expensive";
import NewExpensiveItem from "./components/NewExpenses/NewExpensiveItem";
import {useState} from "react"
function App() {

  const expenses = [
    {
      id: '1',
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 7, 2),
    },
    {
      id: '2',
      title: "Toilet Paper",
      amount: 500,
      date: new Date(2021, 11, 2),
    },
    {
      id: '3',
      title: "Beef",
      amount: 3000,
      date: new Date(2021, 5, 2),
    },
  ];

  const [expensesList, setExpensesList] = useState(expenses);

  const addExpenseHandler = (newExpense) => {
      setExpensesList((expensesList) => expensesList = [
        ...expensesList,
        newExpense,
      ])
  }

  // console.log(expensesList);

  return (
    <>
      <NewExpensiveItem onSaveNewExpense = {addExpenseHandler}/>
      <Expensive expenses={expensesList}/>
    </>
  );
}

export default App;
