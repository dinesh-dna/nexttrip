import React from 'react';
import {connect} from 'react-redux';
import {Button, Col} from 'react-bootstrap';
import Timing from './timing';
import DepartureTable from './table';
import {RowForBackButton, StopNamesRow} from './styles';
export class DepartureSchedules extends React.Component {

    handleBackButton = () => {
        this.props.history.push('/');
    };

    render() {
    const {timePointDeparture, departure, location} = this.props;
    return (
        <div>
            <StopNamesRow>
                <span>{location.state.route} {location.state.direction} {location.state.stops} </span><br/>
                <span > {location.state.stopID ? `Stop Number : ${location.state.stopID}`: null} </span>
            </StopNamesRow>
            <Timing departure={departure}/>
            { timePointDeparture.length > 0 ? 
                <DepartureTable timePointDeparture={timePointDeparture} headers={['Route', 'Description', 'Departs']}/> : (
                <Col sm={{offset: 5}}>
                    No Schedules at this time. Please try later.
                </Col>
            )}
            <RowForBackButton>
                <Button type='submit' onClick={this.handleBackButton}>BACK TO STOP</Button>
            </RowForBackButton>
        </div>
    )
    }
}

export default connect(state => {
    const {timePointDeparture} = state;

    let departure = timePointDeparture.find(eachDeparture => eachDeparture.Actual === true)
    if(!departure){
        departure = timePointDeparture[0];
    } 

    return {
        timePointDeparture,
        departure
    };
},null)(DepartureSchedules);
