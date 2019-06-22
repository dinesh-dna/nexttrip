import { takeLatest } from 'redux-saga/effects';
import upperCase from 'upper-case';
import {getWorkerSaga} from './sagas';
import {REQUEST_SUCCEEDED, REQUEST_FAILED} from './requests';

export const initialState = [];
export const GET_ROUTES = 'route/getRoutes';
export const sagas = [routeWatcherSaga];

export function getRoutes(resourceType, id, query, details) { 
    return {
        type: GET_ROUTES,
        resourceType: upperCase(resourceType),
        id,
        query : 'format=json',
        details
      };
}

export function* routeWatcherSaga() {
    yield takeLatest(GET_ROUTES, getWorkerSaga);
  }
  
export default function reducer(state = initialState, action) { 
    const {type, requestType, response} = action;

    switch(type) {
        case REQUEST_SUCCEEDED:
            if(requestType === GET_ROUTES) {
                return  response ? response.data : state;
            }
        case REQUEST_FAILED:
            return state;
        default:
            return state;
    }
};