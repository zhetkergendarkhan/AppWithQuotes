import React from "react";
import TodoItem from "./TodoItem";



const TodoList = (props) => {
    return (
        <div>
            <ul>
                {props.todos.map(item=> <TodoItem key={item.id} {...item}/>)}
            </ul>
        </div>
    )
}


export default TodoList;
