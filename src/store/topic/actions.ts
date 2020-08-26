import { ActionCreator } from 'redux';
import { TopicActionTypes, ADD_TOPIC, GET_ALL_TOPIC } from './types';
import { Topic } from '../entities';

export const addTopic: ActionCreator<TopicActionTypes> = (topic: Topic) => ({
    type: ADD_TOPIC,
    payload: topic
});

export const getAllTopic: ActionCreator<TopicActionTypes> = (topics: Array<Topic>) => ({
    type: GET_ALL_TOPIC,
    payload: topics
});