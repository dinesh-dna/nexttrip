import React from 'react';
import moment from 'moment';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components/macro';

const CenterContentCol = styled(Col)`
    display: flex;
    justify-content: center;
    height: 18px;
    font-size: 13px;
`;

const StyledRow = styled(Row)`
    margin: 20px 0 20px 0;
    background-image: linear-gradient(#FFDB3A, #ffeeb2);
    height: 60px;
    font-family: 'Lato', sans-serif !important;
`;

const NextTripDeparture = styled(Col)`
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    padding: 5px;
`;

export default function timing(props) {
    return (
        <StyledRow >
            <NextTripDeparture sm={12}>
                Welcome to Departure
            </NextTripDeparture>
            <CenterContentCol sm={12}  >
                     Current Time: {moment().format('h:mm a')}
            </CenterContentCol>
        </StyledRow>
    );
}