import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({todo, onChange, removeTodo}){
    const classes = [];
    if(todo.completed){
        classes.push('done');
    }

    return(
        <li className='todo-item'>
            <span className={classes.join(' ')}>
                <input type='checkbox' onChange={() => onChange(todo.id)}/>
                &nbsp;{todo.title}
            </span>
            <button className='removeBtn' onClick={()=>removeTodo(todo.id)}>&#10008;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object,
    onChange: PropTypes.func.isRequired
}

export default TodoItem;