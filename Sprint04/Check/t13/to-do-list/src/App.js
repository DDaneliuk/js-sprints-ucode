import './App.css';
import React from 'react';
import TodoList from './Components/TodoList';
import TodoAdd from './Components/TodoAdd';


function App() {
    const [todos, setTodos] = React.useState([
      {id: 1, title: 'todo first', completed: false},
      {id: 2, title: 'todo second', completed: false},
      {id: 3, title: 'todo third', completed: false}
    ])

    function toggleTodo(id){
      setTodos(
        todos.map(todo => {
          if(todo.id === id){
            todo.completed = !todo.completed;
          }
          return todo;
        })
      )
    }

    function rmTodo(id){
      setTodos(
        todos.filter(todo => todo.id !== id)
      )
    }

    function addToDo(value){
      setTodos(
        todos.concat([
          {
            id: Date.now(),
            title: value,
            completed: false
          }
        ])
      )
    }

    return (
      <div className='wrapper'>
        <h1>Batman's To-Do-List</h1>
        <TodoAdd addTodo={addToDo}></TodoAdd>
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} rmTodo={rmTodo}></TodoList> : <p>No todos</p>}
      </div>
    )
}



export default App;
