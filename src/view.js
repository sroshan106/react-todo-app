import React from 'react'
import OneTodo from './OneTodo';
import './App.css';

export default function View(props) {
    function removeTodo(index) {
        const newTodos = [...props.myTodos];
        newTodos.splice(index, 1);
        props.setMyTodos(newTodos);
    }
    return (
        <div className='wrapping-containter-todo'>{
            
            props.myTodos.map(function( todoName, index ){
                return <OneTodo key={index} index={index} todo={todoName.todo} removeTodo={removeTodo}/>
            })
        }</div>
    )
}
