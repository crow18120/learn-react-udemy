import "./Expensive.css";
import ExpensiveItem from "./ExpensiveItem";
import Card from "../UI/Card";

function Expensive(props) {
    const expenses = [
        {
          title: "Car Insurance",
          amount: 294.67,
          date: new Date(2021, 7, 2),
        },
        {
          title: "Toilet Paper",
          amount: 500,
          date: new Date(2021, 11, 2),
        },
        {
          title: "Beef",
          amount: 3000,
          date: new Date(2021, 5, 2),
        },
      ];
    
      return (
        <Card className="expenses">
          <ExpensiveItem item={expenses[0]}></ExpensiveItem>
          <ExpensiveItem item={expenses[1]}></ExpensiveItem>
          <ExpensiveItem item={expenses[2]}></ExpensiveItem>
        </Card>
      );
}

export default Expensive;
 