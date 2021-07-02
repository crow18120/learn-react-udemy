import "./ExpensiveItem.css";
import ExpensiveDate from "./ExpensiveDate";
import Card from "../UI/Card";
function ExpensiveItem(props) {
  return (
    <Card className="expense-item">
      <ExpensiveDate date={props.item.date} />
      <div className="expense-item__description">
        <h2>{props.item.title}</h2>
        <div className="expense-item__price">${props.item.amount}</div>
      </div>
    </Card>
  );
}

export default ExpensiveItem;
 