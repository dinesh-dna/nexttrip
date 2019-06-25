import React from 'react';
import { Row } from 'react-bootstrap';
import {StyledTable, ColForTable, ColForUnderlineText} from './styles';

function DepartureTable(props) {
        const {timePointDeparture, headers} = props;
        return (
            <Row>
                <ColForTable sm={{offset: 1, span: 10}}>
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
                </ColForTable>
                <ColForUnderlineText sm={{offset: 10}}>
                    <span >*Real Time</span>
                    <span style={{color: '#ed1b2e'}}> *Scheduled</span>
                </ColForUnderlineText> 
            </Row>
        );
}

export default DepartureTable;