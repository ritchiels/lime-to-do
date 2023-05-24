import React, { useState } from 'react';


export const ToDoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');
    
    const handleSubmit = e => {
        //to prevent the default behavior, reloading when a form is complete.
        e.preventDefault();

        addTodo(value);

        setValue('');
    }

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input 
                type='text' 
                className='todo-input'
                value={value}
                placeholder='What needs to be done?'
                onChange={(e) => setValue(e.target.value)}
            />
            <button type='submit' className='todo-btn'> + </button>

        </form>
    )
}
