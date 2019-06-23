import React, {useState} from 'react';
import moment from 'moment';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components/macro';
import {Table} from 'react-bootstrap';

const StyledTable = styled(Table)`
`;
class DepartureTable extends React.Component {
    
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const {timePointDeparture} = this.props;
        return (
            <Col sm={{offset: 1, span: 10}}>
            <StyledTable striped bordered hover size="sm"> 
                        <thead>
                            <tr>
                                <th>Route</th>
                                <th>Description</th>
                                <th>Departs</th>
                            </tr>
                        </thead>
                        <tbody>
                            {timePointDeparture.map(eachItem => {
                                return (<tr key={eachItem.index}>
                                            <td>{eachItem.Route}</td>
                                            <td>{eachItem.Description}</td>
                                            <td>{eachItem.DepartureTime}</td>
                                        </tr>)
                            })}      
                        </tbody>
                    </StyledTable>
                </Col>
        );
    }
}

export default DepartureTable;