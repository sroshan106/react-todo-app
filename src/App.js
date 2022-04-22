import './App.css';
import AddTodo from './list';
import View from './view';
import { useState } from 'react';
import { useEffect } from 'react';

function App() { 
 
  
  const [todos, setTodos] = useState( () => {
    const retrievedObject = localStorage.getItem('myTodoList');
    return retrievedObject !== null
      ? JSON.parse(retrievedObject)
      : [];
  } );

  useEffect(() => {
    localStorage.setItem('myTodoList', JSON.stringify ( todos ) );
  }, [todos]);

  return (
    <div className="App" >
      <h1>My Todo List</h1>
      <AddTodo setMyTodos={setTodos} myTodos={todos}/>
      <View myTodos={todos} setMyTodos={setTodos}/>
    </div>
    
  );
}

export default App;
