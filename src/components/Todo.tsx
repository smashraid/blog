import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from "react-redux";

import { ActionTypes } from '../store/todo/types';
import { TodoItem } from "../store/entities";
import { toggleTodo } from '../store/todo/actions';

type ItemProps = {
    todo: TodoItem
}

export const Item: React.FunctionComponent<ItemProps> = (props: ItemProps) => {
    const dispatch = useDispatch<Dispatch<ActionTypes>>();

    const onClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
        //this.setState((state, props) => ({ title:  `${props.todo.id} - ${state.title} Update from Component ` }));
        dispatch(toggleTodo(props.todo.id));
    }
    return <a href="#"
        onClick={onClick}
        className={`list-group-item list-group-item-action ${props.todo.completed ? "list-group-item-success" : ""}`}>
        <h5 className="mb-1">
            {props.todo.title}
        </h5>
        <p className="mb-1">
            {props.todo.text}
        </p>
    </a>

}