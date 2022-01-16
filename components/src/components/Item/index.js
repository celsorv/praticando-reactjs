
const Item = (props) => {

    let strColor = '';

    if (props.color)
        strColor = `list-group-item-${props.color}`;

    return (
        <li className={`list-group-item ${strColor}`}>
            {props.children}
        </li>
    )

};

export default Item;
