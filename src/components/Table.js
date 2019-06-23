import React, {useState} from 'react';
import moment from 'moment';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components/macro';
import {Table} from 'react-bootstrap';

const StyledTable = styled(Table)`
font-family: 'Lato', sans-serif !important;
font-size: 12px;
`;
class DepartureTable extends React.Component {

    render() {
        const {timePointDeparture} = this.props;
        return (
            <Row>
            <Col sm={{offset: 1, span: 10}} style={{marginTop: '40px'}}>
                <StyledTable striped bordered hover size="sm"> 
                    <thead>
                        <tr>
                            <th>Route</th>
                            <th>Description</th>
                            <th>Departs</th>
                        </tr>
                    </thead>
                    <tbody style={{fontSize: '12px', fontWeight: 'bold'}}>
                        {timePointDeparture.map(eachItem => {
                            return (<tr key={eachItem.VehicleLatitude}>
                                        <td>{eachItem.Route}</td>
                                        <td>{eachItem.Description}</td>
                                        <td style={eachItem.Actual ? {color: 'black'} :{color: '#ed1b2e'}}>{eachItem.DepartureText}</td>
                                    </tr>)
                        })}      
                    </tbody>
                </StyledTable>
            </Col>
            <Col sm={{offset: 10}} style={{fontSize: '11px'}}>
                   <span >*Real Time</span>
                    <span style={{color: '#ed1b2e'}}> *Scheduled</span>
            </Col> 
            </Row>
        );
    }
}

export default DepartureTable;