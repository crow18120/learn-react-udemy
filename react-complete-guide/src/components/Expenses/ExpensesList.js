import ExpensiveItem from "./ExpensiveItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.item.map((expenses) => (
        <ExpensiveItem item={expenses} />
      ))}
    </ul>
  );
};

export default ExpensesList;
