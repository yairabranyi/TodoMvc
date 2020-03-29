import React from 'react'

function Controls(props) {
    return (
        <div className="controls">
            <button onClick={props.veiwAll}>All</button>
            <button onClick={props.displayActive}> Active</button>
            <button onClick={props.displayCompleated}> Completed</button>
            <button onClick={props.clearCompleated}> Clear completed</button>
            <br/>
        </div>
    )
}
export default Controls