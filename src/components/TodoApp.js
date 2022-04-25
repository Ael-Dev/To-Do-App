import React,{useReducer, useEffect} from 'react';

// components
import { TodoReducer } from './TodoReducer';
import { TodoList } from './TodoList';

// styles
import './layout.css';
import { TodoAdd } from './TodoAdd';

// To App
const init = () => {
    return JSON.parse(localStorage.getItem('Todos'))|| [];    
};

// Main function
export const TodoApp = () => {
    
    const [Todos, dispatch] = useReducer(TodoReducer, [], init);
    
    useEffect(() => {
      localStorage.setItem('Todos',JSON.stringify(Todos));    
    }, [Todos]);
 
    const handleDelete = (todoID) => {
        const action = {
            type: 'delete',
            payload: todoID
        }
        dispatch(action);
    }

    const handleToggle = (todoID) => {
        dispatch({
            type: 'toggle',
            payload: todoID
        });
    }

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <>
            <h1>To Do App</h1>
            <hr/>
            <div className='row'>
                <div className='col-7'>
                    <h4>Number of tasks: { Todos.length }</h4>
                    <hr/>
                   <TodoList
                        Todos = { Todos }
                        handleDelete = { handleDelete }
                        handleToggle = { handleToggle }
                   />
                </div>
                <div className='col-5'>
                    <TodoAdd 
                        handleAddTodo = { handleAddTodo }
                    />                    
                </div>
            </div>
        </>
    );
}
