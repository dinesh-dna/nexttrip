import { takeLatest } from 'redux-saga/effects';
import upperCase from 'upper-case';
import {getWorkerSaga} from './sagas';
import {REQUEST_SUCCEEDED, REQUEST_FAILED} from './requests';

export const initialState = [];
export const GET_DEPARTURE = 'departure/getDepartureList';
export const sagas = [departureWatcherSaga];

export function getDepartureList(resourceType, id, query, details) { 
    return {
        type: GET_DEPARTURE,
        resourceType: upperCase(resourceType),
        id,
        query : 'format=json',
        details
      };
}

export function* departureWatcherSaga() {
    yield takeLatest(GET_DEPARTURE, getWorkerSaga);
  }
  
export default function reducer(state = initialState, action) { 
    const {type, requestType, response} = action;

    switch(type) {
        case REQUEST_SUCCEEDED:
            return state;
        // eslint-disable-next-line no-fallthrough
        case REQUEST_FAILED:
            return state;
        default:
            return state;
    }
};