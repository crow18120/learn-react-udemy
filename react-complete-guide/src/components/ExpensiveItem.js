import "./ExpensiveItem.css";
import ExpensiveDate from "./ExpensiveDate";

function ExpensiveItem(props) {
  return (
    <div className="expense-item">
      <ExpensiveDate date={props.item.date} />
      <div className="expense-item__description">
        <h2>{props.item.title}</h2>
        <div className="expense-item__price">${props.item.amount}</div>
      </div>
    </div>
  );
}

export default ExpensiveItem;
 