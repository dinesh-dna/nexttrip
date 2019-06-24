import { all, fork } from 'redux-saga/effects';
import routes, {sagas as routeSaga } from './route';
import direction, {sagas as directionSaga} from './direction';
import stops, {sagas as stopsSaga} from './stops';
import timePointDeparture, {sagas as timePointDepartureSaga} from './timePointDeparture';

export default {
    direction,
    routes,
    stops,
    timePointDeparture
};

const allSagas = [
    ...directionSaga,
    ...routeSaga,
    ...stopsSaga,
    ...timePointDepartureSaga
];

export function* rootSaga() {
    yield all(allSagas.map(saga => fork(saga)));
  }