import { useState } from "react"
import './App.css';

export default function AddTodo(props) {

    const [todo, setTodo] = useState('');

   function updateTodoInformation(event)  {
       setTodo(event.target.value);
   }

   function addTodo () {
        const currentTodos = [{todo}, ...props.myTodos ]
        if ('' === todo) {
            return;
        }
        props.setMyTodos( currentTodos );
        setTodo('');
   }

    return (
        <div>
            <input type={'text'} width={300} value={todo} onChange={updateTodoInformation} />
            <button onClick={addTodo} className="addTodoButton">Add Todo </button>
        </div>
    )
}
