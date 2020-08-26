import { Action } from 'redux';
import { TodoItem } from '../entities';

export interface InitialState {
    filter: string,
    todos: Array<TodoItem>
}

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_FILTER = 'SET_FILTER';
export const FETCH_TODO = 'FETCH_TODO';

export const Filters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

interface AddTodoAction extends Action<typeof ADD_TODO> {
    //type: typeof ADD_TODO,
    payload: TodoItem
}

interface SetFilterAction extends Action<typeof SET_FILTER> {
    //type: typeof SET_FILTER,
    meta: {
        filter: string
    }
}

interface ToggleTodoAction extends Action<typeof TOGGLE_TODO> {
    //type: typeof TOGGLE_TODO,
    meta: {
        index: number
    }    
}

interface FetchTodoActionn extends Action<typeof FETCH_TODO> {
    payload: Array<TodoItem>
}

export type ActionTypes = AddTodoAction | FetchTodoActionn | SetFilterAction | ToggleTodoAction ;
