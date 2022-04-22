import React from 'react'

export default function OneTodo({todo,index,removeTodo}) {


    return (
    <div>
        <span className="todo">
            {todo}
        </span>
        <button onClick={() => removeTodo(index)}>Remove</button>
    </div>
    )
}
