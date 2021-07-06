// import logo from "./logo.svg";
import "./App.css";
import Expensive from "./components/Expenses/Expensive";
import NewExpensiveItem from "./components/NewExpenses/NewExpensiveItem";
function App() {
  return (
    <>
      <NewExpensiveItem />
      <Expensive />
    </>
  );
}

export default App;
