import { Reducer } from 'redux-testkit';
import timePointReducer, { initialState, getDepartureList, getTimePointDeparture, GET_TIMEPOINTDEPARTURE, GET_DEPARTURE } from './timePointDeparture';
import { REQUEST_SUCCEEDED, requestSucceeded } from './requests';

describe('Actions ', () => {
    it('should return the action object with resourceType', () => {
      const expected = {
        type: GET_TIMEPOINTDEPARTURE,
        resourceType: 'NEXTTRIP_BASEURL',
        id: '1/2/3',
        query: undefined,
        details: undefined
      };
      const actual = getTimePointDeparture('NEXTTRIP_BASEURL', '1/2/3');
      expect(actual).toEqual(expected);
    });

    it('should return the getDepartureList action with resourceType', () => {
        const expected = {
          type: GET_DEPARTURE,
          resourceType: 'NEXTTRIP_BASEURL',
          id: '1',
          query: 'format=json',
          details: undefined
        };
        const actual = getDepartureList('NEXTTRIP_BASEURL', '1');
        expect(actual).toEqual(expected);
      });
  });

  describe('Reducer test   ', () => {
      it('reducer test with initial state', () => {
          const expected = [];

            Reducer(timePointReducer)
                .withState(initialState)
                .expect(getTimePointDeparture)
                .toReturnState(expected)
      });

    it('reducer test with response', () => {
        const response = [{
            Text: 'Target',
            Value: 2
            }];
        
        const action = requestSucceeded(REQUEST_SUCCEEDED, GET_TIMEPOINTDEPARTURE, response);

        const expected = [{
            Text: 'Target',
            Value: 2
            }];

        Reducer(timePointReducer)
            .withState(response)
            .expect(action)
            .toReturnState(expected)
    });
  });
