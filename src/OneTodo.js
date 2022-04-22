import React from 'react'
import './App.css';

export default function OneTodo({todo,index,removeTodo}) {


    return (
    <div className="todo-individual-wrapper">
        <span >
            {todo}
        </span>
        <button onClick={() => removeTodo(index)} className="removeButton">Remove</button>
    </div>
    )
}
