import { takeLatest } from 'redux-saga/effects';
import upperCase from 'upper-case';
import {getWorkerSaga} from './sagas';
import {REQUEST_SUCCEEDED, REQUEST_FAILED} from './requests';

export const initialState = [];
export const GET_TIMEPOINTDEPARTURE = 'timePointDeparture/getTimePointDeparture';
export const sagas = [routeWatcherSaga];

export function getTimePointDeparture(resourceType, id, query, details) { 
    return {
        type: GET_TIMEPOINTDEPARTURE,
        resourceType: upperCase(resourceType),
        id,
        query,
        details
      };
}

export function* routeWatcherSaga() {
    yield takeLatest(GET_TIMEPOINTDEPARTURE, getWorkerSaga);
  }

export default function reducer(state = initialState, action) { 
    const {type, requestType, response} = action;
    switch(type) {
        case REQUEST_SUCCEEDED:
            if(requestType === GET_TIMEPOINTDEPARTURE) {
                return  response ? response.data : state;
            }
        // eslint-disable-next-line no-fallthrough
        case REQUEST_FAILED:
            return state;
        default:
            return state;
    }
};