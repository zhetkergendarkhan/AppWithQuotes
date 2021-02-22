import React, {useContext} from "react";
import {Context} from "./context";


const TodoList = ({title,id,completed}) => {


    const {dispatch} = useContext(Context)

    const cls = ['todo']

    if (completed) {
        cls.push('completed')
    }

    return (

        <div className="todos__item">
            <li className={cls.join(' ')}>
                <label>
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={() => dispatch({type: "TOGGLE", payload: id})}
                    />
                    <span className="span">{title}</span>

                    <i className="material-icons delete"
                       onClick={() => dispatch({type: "DELETE", payload: id})}>
                        delete
                    </i>

                </label>
            </li>
        </div>

    )
}


export default TodoList;
