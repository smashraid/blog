import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { setFilter } from '../store/todo/actions';
import { selectorTodos } from '../store/todo/selectors';
import { RootState } from '../store';
import { Filters, ActionTypes } from '../store/todo/types';

import { Item } from './Todo';


export const Items: React.FunctionComponent = () => {
  const todos = useSelector((state: RootState) => selectorTodos(state.reducer), shallowEqual);
  const dispatch = useDispatch<Dispatch<ActionTypes>>();  

  const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    let filter = e.currentTarget.dataset.filter ?? "";
    dispatch(setFilter(filter));
  }

  return <div className="container mx-auto">    
      <div className="todos">
      {todos.length > 0 &&
        <div className="list-group list-group-horizontal-sm py-5">
          {todos.map((todo) => {           
            return <Item key={todo.id} todo={todo} />
          })}
        </div>
        }
        <div className="btn-group btn-group-lg" role="group" aria-label="Filters">
          <button type="button" className="btn btn-primary"
            data-filter={Filters.SHOW_ALL} onClick={onClick}>All</button>
          <button type="button" className="btn btn-secondary"
            data-filter={Filters.SHOW_COMPLETED} onClick={onClick}>Completed</button>
          <button type="button" className="btn btn-info"
            data-filter={Filters.SHOW_ACTIVE} onClick={onClick}>Active</button>
        </div>
      </div>    
  </div>
}

// const mapStateToProps = (state: RootState) => ({
//   todos: selectorTodos(state.reducer),
//   filter: state.reducer.filter
// });

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   setFilter: (filter: string) => dispatch(setFilter(filter))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Items);