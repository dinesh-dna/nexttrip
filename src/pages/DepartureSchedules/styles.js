import styled from 'styled-components/macro';
import { Row, Col, Table } from 'react-bootstrap';

export const CenterContentCol = styled(Col)`
    display: flex;
    justify-content: center;
    height: 18px;
    font-size: 13px;
`;

export const StyledRow = styled(Row)`
    margin: 10px 0 20px 0;
    background-image: linear-gradient(#FFDB3A, #ffeeb2);
    height: 60px;
    font-family: 'Lato', sans-serif !important;
`;

export const StopNamesRow = styled(Row)`
    font-size: 12px;
    margin: 15px;
    font-weight: bold;
`;
export const NextTripDeparture = styled(Col)`
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    padding: 5px;
`;

export const RowForBackButton = styled(Row)`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;

export const StyledTable = styled(Table)`
    font-family: 'Lato', sans-serif !important;
    font-weight: bold;
    font-size: 12px;
`;

export const ColForTable = styled(Col)`
    margin-top: '40px',
`;

export const ColForUnderlineText = styled(Col)`
    font-size: 11px;
`;