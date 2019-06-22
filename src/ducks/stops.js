import { call, put, takeLatest } from 'redux-saga/effects';
import upperCase from 'upper-case';
import urlConfig from './urlConfig';
import toObject from '../utils/toObject';
import {httpGet} from '../utils/axiosRequest';

export const initialState = [];
export const GET_STOPS = 'stops/getStops';
export const REQUEST_SUCCEEDED = 'stops/requestSucceeded';
export const REQUEST_FAILED = 'stops/requestFailed';
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

  export function* getWorkerSaga(action) {
    const { type, resourceType, id, query, details } = action;
    const queryString = query ? `?${query}` : '';
    const idString = id ? `/${id}` : '';
    let url;
    try {
      url = `${urlConfig.nextTrip[resourceType]}${idString}${queryString}`;
      const response = yield call(httpGet,url);
      yield put(
        requestSucceeded(type, resourceType, response, { id, query, details })
      );
    } catch (e) {
      yield put(requestFailed(type, resourceType, e, { id, query }));
    }
  }
  
export function requestSucceeded(requestType, resourceType, response, details) {
    return {
      type: REQUEST_SUCCEEDED,
      requestType,
      resourceType,
      response,
      details
    };
  }

  export function requestFailed(requestType, resourceType, response, details) {
    return {
      type: REQUEST_FAILED,
      requestType,
      resourceType,
      response,
      details
    };
  }
  

export default function reducer(state = initialState, action) { 
    const {type, requestType,resourceType, response} = action;
    switch(type) {
        case REQUEST_SUCCEEDED:
            if(requestType === GET_STOPS) {
                return  response ? response.data : state;
            }
            break;
        default:
            return state;
    }
};