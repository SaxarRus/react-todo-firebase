import { useEffect, useState } from 'react'
import * as api from '../api'

export default function useApi() {
    const [lists, setLists] = useState([])
    const [todos, setTodos] = useState([])

    useEffect(() => {
        api.getLists().then(setLists)
        //get('lists')().then(lists => setLists(lists))
    }, [])

    function getLists() {
        return api.getLists()
            .then(setLists)
    }

    function getListTodos(listId) {
        return api.getListTodos(listId)
            .then(setTodos)
    }

    function addTask(data) {
        return api.addTask(data)
            .then(todo => setTodos([...todos, todo]))
    }

    function updateTask(todoId, data){
        return api.updateTask(todoId, data)
            .then(data => {
                setTodos([...todos.map(task => task.id !== todoId ? ({ ...task, ...data, }) : task)])
            })
    }

    function deleteTask(todoId) {
        return api.deleteTask(todoId)
            .then(todoId => {
                setTodos([...todos.filter(task => task.id !== todoId)])
            })
    }

    return {
        data: {
            lists,
            todos,
        },
        actions: {
            getLists,
            getListTodos,
            addTask,
            updateTask,
            deleteTask,
        }
    };
}