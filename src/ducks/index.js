import { all, fork } from 'redux-saga/effects';
import routes, {sagas as routeSaga } from './route';
import direction, {sagas as directionSaga} from './direction';
import stops, {sagas as stopsSaga} from './stops';
import timePointDeparture, {sagas as timePointDepartureSaga} from './timePointDeparture';

export default {
    routes,
    direction,
    stops,
    timePointDeparture
};

const allSagas = [
    ...routeSaga,
    ...directionSaga,
    ...stopsSaga,
    ...timePointDepartureSaga
];

export function* rootSaga() {
    yield all(allSagas.map(saga => fork(saga)));
  }