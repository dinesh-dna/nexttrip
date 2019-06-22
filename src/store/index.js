import reducers, { rootSaga } from '../ducks';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const allReducers = {
    ...reducers
};
const store = createStore(combineReducers(allReducers), composeWithDevTools(applyMiddleware(...middlewares)));
sagaMiddleware.run(rootSaga);

export default store;