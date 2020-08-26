import { ActionCreator } from 'redux';

import { ADD_TODO, TOGGLE_TODO, SET_FILTER, ActionTypes, FETCH_TODO } from './types';
import { TodoItem } from "../entities";

export const addTodo: ActionCreator<ActionTypes> = (item: TodoItem) => ({
    type: ADD_TODO,
    payload: item
});

export const setFilter: ActionCreator<ActionTypes> = (filter: string) => ({
    type: SET_FILTER,
    meta: {
        filter
    }
});

export const toggleTodo: ActionCreator<ActionTypes> = (index: number) => ({
    type: TOGGLE_TODO,
    meta: {
        index
    }
});

export const fetchTodo: ActionCreator<ActionTypes> = (todos: Array<TodoItem>) => ({
    type: FETCH_TODO,
    payload: todos
});