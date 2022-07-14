import React from "react";

export default function Task({ todo, onDelete, onUpdate }) {

    function handleChange(completed){
        onUpdate(todo.id, { completed })
    }

    return (
        <div>
            <li className='Task'>
                <input type='checkbox' className='Chckbx' defaultChecked={todo.completed} onChange={handleChange} />{todo.title}
                <button type='button' className='RmBtn' onClick={() => onDelete(todo.id)}>❌</button>
            </li>
        </div>


    );

}
