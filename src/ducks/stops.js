import { takeLatest } from 'redux-saga/effects';
import upperCase from 'upper-case';
import {getWorkerSaga} from './sagas';
import {REQUEST_SUCCEEDED, REQUEST_FAILED} from './requests';

export const initialState = [];
export const GET_STOPS = 'stops/getStops';
export const sagas = [routeWatcherSaga];

export function getStops(resourceType, id, query, details) { 
    return {
        type: GET_STOPS,
        resourceType: upperCase(resourceType),
        id,
        query,
        details
      };
}

export function* routeWatcherSaga() {
    yield takeLatest(GET_STOPS, getWorkerSaga);
  }

export default function reducer(state = initialState, action) { 
    const {type, requestType, response} = action;
    switch(type) {
        case REQUEST_SUCCEEDED:
            if(requestType === GET_STOPS) {
                return  response ? response.data : state;
            }
        default:
            return state;
    }
};