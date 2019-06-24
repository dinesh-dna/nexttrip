import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components/macro';
import {Table} from 'react-bootstrap';

const StyledTable = styled(Table)`
    font-family: 'Lato', sans-serif !important;
    font-weight: bold;
    font-size: 12px;
`;
class DepartureTable extends React.Component {

    render() {
        const {timePointDeparture, headers} = this.props;
        return (
            <Row>
            <Col sm={{offset: 1, span: 10}} style={{marginTop: '40px'}}>
                <StyledTable striped bordered hover size="sm" responsive="sm"> 
                    <thead>
                        <tr>
                        {headers.map((th,index) => {
                            return (<th key={index}>{th}</th>)
                        })}
                        </tr>
                    </thead>
                    <tbody>
                        {timePointDeparture.map(eachItem => {
                            return (
                                    <tr key={eachItem.DepartureText}>
                                        <td>
                                            <a href={`https://www.metrotransit.org/route/${eachItem.Route}`} rel="noopener noreferrer" target="_blank">
                                                 {`${eachItem.Route}${eachItem.Terminal}`}
                                            </a></td>
                                        <td>
                                            <a href={`https://www.metrotransit.org/route/${eachItem.Route}`}  rel="noopener noreferrer" target="_blank">
                                                {eachItem.Description}
                                            </a></td>
                                        <td style={eachItem.Actual ? {color: 'black'} :{color: '#ed1b2e'}}>
                                            {eachItem.DepartureText}
                                        </td>
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