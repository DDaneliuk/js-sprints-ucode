import PropTypes from 'prop-types';
import React, {useState} from 'react';

function TodoAdd({addTodo}){
    const [value, setValue] = useState('');

    function submitHandler(event){
        event.preventDefault()
        if(value.trim()){
            addTodo(value)
            setValue('');
        }
    }

    return(
        <form onSubmit={submitHandler}>
            <input className="addInput" type='text' value={value} onChange={event => setValue(event.target.value)} placeholder='add new todo'/>
            <button className="addBtn" type='submit'>Add ToDo</button>
        </form>
    )
}

TodoAdd.prototype = {
    addTodo: PropTypes.func.isRequired
}

export default TodoAdd;