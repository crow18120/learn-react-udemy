import "./Expensive.css";
import ExpensiveItem from "./ExpensiveItem";
import Card from "../UI/Card";

function Expensive(props) {

      const expensesList = props.expenses
   
      return (
        <Card className="expenses">
          {
            expensesList.map(expenses => <ExpensiveItem item={expenses}></ExpensiveItem>)
          }
          {/* <ExpensiveItem item={props.expenses[0]}></ExpensiveItem>
          <ExpensiveItem item={props.expenses[1]}></ExpensiveItem>
          <ExpensiveItem item={props.expenses[2]}></ExpensiveItem> */}
        </Card>
      );
}

export default Expensive;
 