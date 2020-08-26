import { Reducer } from 'redux';

import { InitialState, ActionTypes, ADD_TODO, TOGGLE_TODO, SET_FILTER, Filters, FETCH_TODO } from './types';

const initialState: InitialState = {
    todos: [],
    filter: Filters.SHOW_ACTIVE
};

export const reducer: Reducer<InitialState, ActionTypes> = (
    state = initialState,
    action: ActionTypes
) => {
    switch (action.type) {
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    action.payload
                ]
            })
        case FETCH_TODO:
            return Object.assign({}, state, {
                todos: action.payload                
            })
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((todo, index) => {
                    if (todo.id === action.meta.index) {
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        })
                    }
                    return todo
                })
            })
        case SET_FILTER:
            return Object.assign({}, state, {
                filter: action.meta.filter
            })
        default:
            return state;
    }
}