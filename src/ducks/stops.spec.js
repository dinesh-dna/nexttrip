import { Reducer } from 'redux-testkit';
import stopsReducer, { initialState, getStops, GET_STOPS } from './stops';
import { REQUEST_SUCCEEDED, requestSucceeded } from './requests';

describe('Actions ', () => {
    it('should return the action object with resourceType', () => {
      const expected = {
        type: GET_STOPS,
        resourceType: 'STOPS',
        id: undefined,
        query: 'format=json',
        details: undefined
      };
      const actual = getStops('STOPS');
      expect(actual).toEqual(expected);
    });
  });

  describe('Reducer test   ', () => {
    it('reducer test with initial state', () => {
        const expected = [];

          Reducer(stopsReducer)
              .withState(initialState)
              .expect(getStops)
              .toReturnState(expected)
    });

    it('reducer test with response', () => {
        const response = [{
            Text: 'Target',
            Value: 2
            }];

        const action = requestSucceeded(REQUEST_SUCCEEDED, GET_STOPS, response);

        const expected = [{
            Text: 'Target',
            Value: 2
            }];

        Reducer(stopsReducer)
            .withState(response)
            .expect(action)
            .toReturnState(expected)
    });
  });
