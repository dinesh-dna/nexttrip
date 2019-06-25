import { Reducer } from 'redux-testkit';
import SagaTester from 'redux-saga-tester';
import routeReducer, { initialState, getRoutes, GET_ROUTES } from './route';
import {REQUEST_SUCCEEDED, requestSucceeded, REQUEST_FAILED, requestFailed } from './requests';
describe('Actions ', () => {
    it('should return the action object with resourceType', () => {
      const expected = {
        type: GET_ROUTES,
        resourceType: 'ROUTE',
        id: undefined,
        query: 'format=json',
        details: undefined
      };
      const actual = getRoutes('ROUTE');
      expect(actual).toEqual(expected);
    });
  });

  describe('Reducer test   ', () => {
      it('reducer test with initial state', () => {
          const expected = [];

            Reducer(routeReducer)
                .withState(initialState)
                .expect(getRoutes)
                .toReturnState(expected)
      });

    it('reducer test with response', () => {
        const response = [{
            Text: 'Target',
            Value: 2
            }];

        const action = requestSucceeded(REQUEST_SUCCEEDED, GET_ROUTES, response)

        const expected = [{
            Text: 'Target',
            Value: 2
            }];

        Reducer(routeReducer)
            .withState(response)
            .expect(action)
            .toReturnState(expected)
    });
  });

  describe('Saga test', () => {
    const testState = {
      routes: []
    };
    let sagaTester;
  
    beforeEach(() => {
      sagaTester = new SagaTester({
        initialState: testState,
        reducers: {
          routes: routeReducer
        }
      });
    });

    xit('Successfully performs routes', async () => {
      const routes = [{
        'Route': '1',
        'Description' : 'Target'
      }];
      const mockExpected = [{
        'Route': '1',
        'Description' : 'Target'
      }];

      jest.resetModules();
      jest.mock('./requests', () => () => 
        Promise.resolve({
          mockExpected
        })
      );
      require('../utils/axiosRequest');
      const routeWatcher = require('./route')
      .routeWatcherSaga;
      sagaTester.start(routeWatcher);

      const action = getRoutes(routes);
      sagaTester.dispatch(action);

     await sagaTester.waitFor(REQUEST_SUCCEEDED);
      expect(sagaTester.getState()).toEqual({
      routes: {
        mockExpected
      }
    });

    });
  });
