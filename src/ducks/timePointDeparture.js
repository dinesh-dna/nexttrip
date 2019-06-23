import { takeLatest } from 'redux-saga/effects';
import upperCase from 'upper-case';
import {getWorkerSaga} from './sagas';
import {REQUEST_SUCCEEDED, REQUEST_FAILED} from './requests';

export const initialState = [];
export const GET_TIMEPOINTDEPARTURE = 'timePointDeparture/getTimePointDeparture';
export const GET_DEPARTURE = 'timePointDeparture/getDepartureList';

export const sagas = [timeDepartureWatcherSaga];

export function getTimePointDeparture(resourceType, id, query, details) { 
    return {
        type: GET_TIMEPOINTDEPARTURE,
        resourceType: upperCase(resourceType),
        id,
        query,
        details
      };
}

export function getDepartureList(resourceType, id, query, details) { 
    return {
        type: GET_DEPARTURE,
        resourceType: upperCase(resourceType),
        id,
        query : 'format=json',
        details
      };
}

export function* timeDepartureWatcherSaga() {
    yield takeLatest(GET_TIMEPOINTDEPARTURE, getWorkerSaga);
    yield takeLatest(GET_DEPARTURE, getWorkerSaga);
  }

export default function reducer(state = initialState, action) { 
    const {type, requestType, response} = action;
    switch(type) {
        case REQUEST_SUCCEEDED:
            if(requestType === GET_TIMEPOINTDEPARTURE || requestType === GET_DEPARTURE) {
                return  response ? response.data : state;
            }
        // eslint-disable-next-line no-fallthrough
        case REQUEST_FAILED:
            return state;
        default:
            return state;
    }
};