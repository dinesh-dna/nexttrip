import { Reducer } from 'redux-testkit';
import routeReducer, { initialState, getRoutes, GET_ROUTES } from './route';
import {REQUEST_SUCCEEDED, requestSucceeded } from './requests';

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

        const action = {REQUEST_SUCCEEDED, GET_ROUTES, response}

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
