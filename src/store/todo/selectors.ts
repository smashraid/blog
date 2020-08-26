import { createSelector, Selector } from 'reselect'

import { InitialState, Filters } from "./types";
import { TodoItem } from "../entities";

const getFilter: Selector<InitialState, string> = (state: InitialState) => state.filter;
const getTodos: Selector<InitialState, Array<TodoItem>> = (state: InitialState) => state.todos;

export const selectorTodos = createSelector<InitialState, string, Array<TodoItem>, Array<TodoItem>>
    (getFilter, getTodos, (filter, todos) => {
        switch (filter) {
            case Filters.SHOW_ACTIVE:
                return todos.filter(todo => !todo.completed);
            case Filters.SHOW_COMPLETED:
                return todos.filter(todo => todo.completed);
            case Filters.SHOW_ALL:
            default:
                return todos;
        }
    });