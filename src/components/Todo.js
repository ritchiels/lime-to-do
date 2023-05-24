import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';


export const Todo = ({ task, toggleComplete, deleteTodo }) => {
    if (!task || typeof task.completed === 'undefined') {
        return null;
    }

    return (
        <div className='Todo'>
            <p
                className={task.completed ? 'completed' : ''}
                onClick={() => toggleComplete(task.id)}
            >
                {task.task}
            </p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </div>
        </div>
    )
}
