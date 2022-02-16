import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

function TodoList(props){
    return(
        <ul className='todo-list'>
            {props.todos.map(todo =>{
                return(
                    <TodoItem todo={todo} key={todo.id} onChange={props.onToggle} removeTodo={props.rmTodo}></TodoItem> 
                )
            })}
        </ul>        
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default TodoList;