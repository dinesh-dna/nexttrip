import React from 'react';
import moment from 'moment';
import {StyledRow, NextTripDeparture, CenterContentCol} from './styles';

export default function timing(props) {
    const { departure} = props;
    return (
         <StyledRow >
            <NextTripDeparture sm={12}>
                {departure ? `NexTrip departs in ${departure.DepartureText}` : 'No trips available'}
            </NextTripDeparture>
            <CenterContentCol sm={12}  >
                     Current Time: {moment().format('h:mm a')}
            </CenterContentCol>
        </StyledRow>
    );
}