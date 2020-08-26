import { Reducer } from 'redux';
import { TopicInitialState, TopicActionTypes, ADD_TOPIC, GET_ALL_TOPIC } from './types';
import { Subject } from 'rxjs';
import { Topic } from '../entities';

const initialState: TopicInitialState = {
    topics: []
}

export const topicReducer: Reducer<TopicInitialState, TopicActionTypes> =
    (state = initialState, action: TopicActionTypes) => {
        switch (action.type) {
            case ADD_TOPIC:
                return Object.assign({}, state, {
                    todos: [
                        ...state.topics,
                        action.payload
                    ]
                });
            case GET_ALL_TOPIC:
                return Object.assign({}, state, {
                    todos: [
                        ...state.topics,
                        action.payload
                    ]
                });
            default:
                return state;
        }
    }