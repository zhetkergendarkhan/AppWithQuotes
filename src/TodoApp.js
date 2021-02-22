import React, {useState, useEffect, useReducer} from "react";
import TodoList from "./TodoList";
import {Context} from "./context";
import reducer from "./reducer";


const TodoApp = (props) => {


    const [todoTitle, setTodoTitle] = useState('')

    const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos')))


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state))

    }, [state])

    const addTodo = (event) => {
        if (event.key === 'Enter') {
            dispatch({
                type: "ADD",
                payload: todoTitle
            })
            setTodoTitle('');
        }
    }

    const addTodoByButton = () => {

        dispatch({
            type: "ADD",
            payload: todoTitle
        })
        setTodoTitle('');

    }


    return (
        <Context.Provider value={{dispatch}}>
            <div className="wrapper">
                <h1 className="wrapper__title">To Do App</h1>
                <div className="input-field">
                    <input className="input"
                           type="text"
                           value={todoTitle}
                           onChange={event => setTodoTitle(event.target.value)}
                           onKeyPress={addTodo}/>
                    <button className="add__button" onClick={addTodoByButton}>Add</button>
                    <label className="wrapper__title-2">Todo Name</label>

                </div>
                <TodoList todos={state}/>
            </div>
        </Context.Provider>
    )
}


export default TodoApp;
