import logo from "./logo.svg";
import "./App.css";
import ExpensiveItem from "./components/ExpensiveItem";

function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 12, 2),
    },
    {
      title: "Toilet Paper",
      amount: 500,
      date: new Date(2021, 2, 2),
    },
    {
      title: "Beef",
      amount: 3000,
      date: new Date(2021, 12, 2),
    },
  ];

  return (
    <div>
      <ExpensiveItem item={expenses[0]}></ExpensiveItem>
      <ExpensiveItem item={expenses[1]}></ExpensiveItem>
      <ExpensiveItem item={expenses[2]}></ExpensiveItem>
    </div>
  );
}

export default App;
