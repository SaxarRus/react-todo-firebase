import React from "react";

import Task from './Task'

export default function TaskList({ list, todos, onDelete, onUpdate }) {

    return (
        <div className='TaskList'>
            <div className='TaskListTitle'>
                {list.title}
            </div>
            <ul className='TaskListItems'>
                {todos.map(todo =>
                    <Task
                        key={todo.id}
                        todo={todo}
                        onDelete={onDelete}
                        onUpdate={onUpdate}
                    ></Task>
                )}
            </ul>
        </div>
    );
}