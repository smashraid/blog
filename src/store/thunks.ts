import { Action, Reducer } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { addTodo, fetchTodo } from "./todo/actions";
import { RootState } from "./";
import { ActionTypes } from "./todo/types";
import { TodoItem } from "./entities";

export type ThunkActionTodo = ThunkAction<Promise<void | ActionTypes>, RootState, null, Action<string>>;
export type ThunkDispatchTodo = ThunkDispatch<RootState, null, Action<string>>;

export const thunkAddTodo = (
  todo: TodoItem
): ThunkActionTodo => async (dispatch: ThunkDispatchTodo, getState: Reducer<RootState>) => {
  //const response = await fetch(`/api/items/${id}`);
  //const item: TodoItem = await response.json();
  //item.id = '1';
  //const asyncTodo = await exampleAPI(id);
  //return Promise.resolve('');

  return fetch('api/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
  .then(response => response.json())
  .then(
    response => dispatch(addTodo(response.todo)),
    err => console.log(err)
  );
};

export const thunkFetchTodo = (
): ThunkActionTodo => async (dispatch: ThunkDispatchTodo, getState: Reducer<RootState>) => {  
  return fetch('api/items')
  .then(response => response.json())
  .then(
    (response) => {
      return dispatch(fetchTodo(response.todos))
    },
    err => console.log(err)
  );
};
