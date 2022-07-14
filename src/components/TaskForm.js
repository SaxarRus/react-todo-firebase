import React, { useState } from "react";

export default function TaskForm({ onSubmit }) {
    const[title, setTitle] = useState('')

    function handleSubmit(event){
        event.preventDefault()
        onSubmit(title)
        setTitle('')
    }

    function handleChange(event){
        setTitle(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type='text' 
            placeholder='What ToDo...' 
            value={title}
            onChange={handleChange}
            style={{width: '100%'}}
            ></input>
        </form>
    );
}