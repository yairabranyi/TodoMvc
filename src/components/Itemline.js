import React from 'react'

function ItemLine(props) {
    return (
        <div className="todo-item"   >
            < input type="checkbox" className="input-checkbox"
                iscompleated={props.changeIsCompleated}
                onClick={props.changeIsCompleated}
                name={props.name}
                checked={props.checked}
                />
            <label>{props.description}</label>
            <button name={props.name} onClick={props.deleteItemLine}  >X</button>
        </div>
    )

}

export default ItemLine