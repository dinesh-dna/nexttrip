import { call, put } from 'redux-saga/effects';
import urlConfig from './urlConfig';
import {httpGet} from '../utils/axiosRequest';
import {requestSucceeded, requestFailed} from './requests';

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