import { Action } from 'redux';
import { Topic } from '../entities';

export const ADD_TOPIC = 'ADD_TOPIC';
export const GET_ALL_TOPIC = 'GET_ALL_TOPIC';

export interface TopicInitialState {
    topics: Array<Topic>
}

interface AddTopicAction extends Action<string> {
    payload: Topic
}

interface GetAllTopicAction extends Action<string> {
    payload: Array<Topic>
}

export type TopicActionTypes = AddTopicAction | GetAllTopicAction;