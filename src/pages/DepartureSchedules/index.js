import React from 'react';
import {connect} from 'react-redux';
import {Button, Col} from 'react-bootstrap';
import Timing from './timing';
import DepartureTable from './table';
import {RowForBackButton} from './styles';
class DepartureSchedules extends React.Component {

    handleBackButton = () => {
        this.props.history.push('/');
    }
    render(){
        const {timePointDeparture, departure} = this.props;
        console.log(this.props.history.location.search);
        return (
            <div>
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
