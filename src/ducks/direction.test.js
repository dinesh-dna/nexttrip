import { Reducer } from 'redux-testkit';
import directionReducer, { initialState, getDirection, GET_DIRECTION } from './direction';
import {REQUEST_SUCCEEDED, requestSucceeded } from './requests';

describe('Actions ', () => {
    it('should return the action object with resourceType', () => {
      const expected = {
        type: GET_DIRECTION,
        resourceType: 'DIRECTION',
        id: 1,
        query: undefined,
        details: undefined
      };
      const actual = getDirection('DIRECTION', 1);
      expect(actual).toEqual(expected);
    });
  });

  describe('Reducer test   ', () => {
      it('reducer test with initial state', () => {
          const expected = [];

            Reducer(directionReducer)
                .withState(initialState)
                .expect(getDirection)
                .toReturnState(expected)
      });

    it('reducer test with response', () => {
        const response = [{
            Text: 'Target',
            Value: 2
            }];

        const action = requestSucceeded(REQUEST_SUCCEEDED, GET_DIRECTION, response)

        const expected = [{
            Text: 'Target',
            Value: 2
            }];

        Reducer(directionReducer)
            .withState(response)
            .expect(action)
            .toReturnState(expected)
    });
  });
