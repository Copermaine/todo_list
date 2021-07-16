import React, {useEffect, useState} from "react";
import {TodoForm} from "../components/TodoForm";
import {TodoList} from "../components/TodoList";
import {ITodo} from "../interfaces";

export const TodosPage: React.FunctionComponent = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(saved)
    }, [])
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const addHandler = (title: string) => {
        console.log('Add new todo', title)
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        //setTodos([newTodo, ...todos])
        setTodos(prev => [newTodo, ...prev]) //prev state!!!
    }
    const toggleHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed}

            }
            return todo
        }))
    }
    const removeHandler = (id: number) => {
        const shouldRemove = window.confirm('Вo you really want to delete task?')
        if (shouldRemove) {
            setTodos(prev => prev.filter(todo => todo.id !== id))
        }

    }
    return (
        <>
            <TodoForm onAdd={addHandler}/>
            <TodoList todos={todos}
                      onRemove={removeHandler}
                      onToggle={toggleHandler}/>
        </>
    )
}