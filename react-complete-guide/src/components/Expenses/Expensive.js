import "./Expensive.css";
import ExpensesList from "./ExpensesList";
import ExpensiveFilter from "./ExpensiveFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import { useState } from "react";

function Expensive(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (el) => el.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensiveFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList item={filteredExpenses}/>  
    </Card>
  );
}

export default Expensive;
