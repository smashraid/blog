import React, { useState, useEffect, useRef } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from "react-redux";

import { addTodo } from '../store/todo/actions';
import { ActionTypes } from '../store/todo/types';
import { TodoItem } from "../store/entities";
import { thunkAddTodo, ThunkDispatchTodo } from '../store/thunks';

export const Form: React.FunctionComponent = () => {
    const defaultTodo: TodoItem = {
        id: 0,
        title: '',
        text: '',
        completed: false
    };

    const [todo, setTodo] = useState<TodoItem>(defaultTodo);

    const dispatch = useDispatch<Dispatch<ActionTypes>>();
    const thunkDispatch = useDispatch<ThunkDispatchTodo>();

    const divRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        let d = divRef.current;
        if (d) {
            d.style.backgroundColor = 'red';
            d.style.height = "200px";
            d.style.width = "200px";
        }
        titleRef.current!.focus();
    }, []);

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        let controlValue = e.target.value;
        let controlName = e.target.name;
        // setState((prevState, props) => ({
        //     ...prevState,
        //     [controlName]: controlValue
        // }));
        setTodo({
            ...todo,
            [controlName]: controlValue
        });        
    }

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        alert(`${todo.title} ${todo.text}`);
    }

    const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        //props.addTodo(todo);
        //dispatch(addTodo(todo));
        thunkDispatch(thunkAddTodo(todo)).then(x => console.log('Good news') );
    }


    return <div className="container py-5">
        <form className="mx-auto todo-form">
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    aria-describedby="titleHelp"
                    ref={titleRef}
                    value={todo.title}
                    onChange={onChange} />
            </div>
            <div className="form-group">
                <label htmlFor="text">Text</label>
                <input type="text"
                    className="form-control"
                    id="text"
                    name="text"
                    aria-describedby="textHelp"
                    value={todo.text}
                    onChange={onChange} />
            </div>
            <button type="button" className="btn btn-primary" onClick={onClick}>Submit</button>
        </form>
        <div ref={divRef}></div>
    </div>
}


// const mapDispatchToProps = (dispatch: Dispatch) => ({
//     addTodo: (item: TodoItem) => dispatch(addTodo(item))
// });

// export default connect(
//     null,
//     mapDispatchToProps
// )(Form);