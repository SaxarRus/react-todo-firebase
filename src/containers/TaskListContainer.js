import React, { useState, useEffect, useContext } from "react";
import { useParams, useMatch } from "react-router-dom";

import TaskList from '../components/TaskList'
import TaskForm from '../components/TaskForm'

import useApi from "../hooks/useApi";

export default function TaskListContainer() {

    const { data: { lists, todos }, actions } = useApi()

    const { listId } = useParams()
    const match = useMatch(listId)
    //console.log(match)

    useEffect(() => {
        actions.getListTodos(match.pattern.path)

        // if (match.pattern.path === 'all') {
        //     actions.get('todos')(collection => collection)
        //         .then(setTodos)
        // } else {
        //     actions.get('todos')(collection => collection
        //         /*.where('listId', '==', match.pattern.path)*/)
        //         .then(setTodos)
        // }

    }, [actions, match.pattern.path])

    function handleSubmit(title) {
        actions.addTask({
            title,
            listId: list.id
        })
    }

    function handleDelete(todoId){
        console.log('Removed id: ', todoId)
        actions.deleteTask(todoId)
    }

    function handleUpdate(todoId, data){
        actions.updateTask(todoId, data)
    }

    const list = lists.find(list => list.id === match.pattern.path)

    if (!list || !todos) {
        return (
            <div className="ContentHeader">Loading...</div>
        );
    }

    // useEffect(()=>{
    //     const raw = localStorage.getItem('state.tasks') || []
    //     setState({tasks: JSON.parse(raw)})
    // }, [])

    // useEffect(()=>{
    //     localStorage.setItem('state.tasks', JSON.stringify(state.tasks))
    // }, [state])


    // const addTask = () => {
    //     if (taskTitle.current.value) {
    //         var arr = state.tasks
    //         arr.push({ id: arr.length, title: taskTitle.current.value, done: false })
    //         taskTitle.current.value = ""
    //         setState({ tasks: arr })
    //     }
    // }

    // const checkTask = (i) => {
    //     var arr = state.tasks
    //     arr[i].done = !arr[i].done
    //     setState({ tasks: arr })
    // }

    // const removeTask = (i) => {
    //     var arr = state.tasks
    //     arr.splice(i, 1)
    //     setState({ tasks: arr })
    // }

    // const eachElem = (item, i) => {
    //     return (
    //         <Task key={i} index={i} checkElement={checkTask} deleteElement={removeTask}>
    //             {item}
    //         </Task>
    //     );
    // }


    return (
        <div className='TaskListContainer'>
            <TaskList
                list={list}
                todos={todos}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
            ></TaskList>
            <TaskForm
                onSubmit={handleSubmit}
            ></TaskForm>
        </div>

    );
}