import React from "react";

export default function Task({ todo, onDelete, onUpdate }) {

    function handleChange(completed){
        onUpdate( todo.id, {completed: completed.target.checked} )
    }

    return (
        <div>
            <li className='Task'>
                <label className="ChckbxWrapper">
                <input type='checkbox' className='Chckbx' defaultChecked={todo.completed} onChange={handleChange} />
                <label className="ChckbxCustom"></label>
                {todo.title}
                </label>
                <button type='button' className='RmBtn' onClick={() => onDelete(todo.id)}>❌</button>
            </li>
        </div>


    );

}
