import './Card.css'

function Card(props) {
    const class_name = 'card ' + props.className;
    console.log(props);
    return (
        <div className = {class_name}>{props.children}</div>
    )
}

export default Card;