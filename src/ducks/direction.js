import { takeLatest } from 'redux-saga/effects';
import upperCase from 'upper-case';
import {getWorkerSaga} from './sagas';
import {REQUEST_SUCCEEDED, REQUEST_FAILED} from './requests';

export const initialState = [];
export const GET_DIRECTION = 'direction/getDirection';
export const sagas = [directionWatcherSaga];

export function getDirection(resourceType, id, query, details) { 
    return {
        type: GET_DIRECTION,
        resourceType: upperCase(resourceType),
        id,
        query,
        details
      };
}

export function* directionWatcherSaga() {
    yield takeLatest(GET_DIRECTION, getWorkerSaga);
  }
  
export default function reducer(state = initialState, action) { 
    const {type, requestType, response} = action;
    switch(type) {
        case REQUEST_SUCCEEDED:
            if(requestType === GET_DIRECTION) {
                return  response ? response.data : state;
            }
        // eslint-disable-next-line no-fallthrough
        case REQUEST_FAILED:
            if(requestType === GET_DIRECTION) {
              return state;
            }
        // eslint-disable-next-line no-fallthrough
        default:
            return state;
    }
};
