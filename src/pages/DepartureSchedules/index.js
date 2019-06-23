import React from 'react';
import {connect} from 'react-redux';
import {Button, Row} from 'react-bootstrap';
import Timing from './timing';
import DepartureTable from '../../components/Table';
import {RowForBackButton} from './styles';
class DepartureSchedules extends React.Component {

    handleBackButton = () => {
        this.props.history.push('/');
    }
    render(){
        const {timePointDeparture, departure} = this.props;
        return (
            <div>
                <Timing departure={departure}/>
                { timePointDeparture.length > 0 ? 
                    <DepartureTable timePointDeparture={timePointDeparture} /> : (
                    <div>
                        No Schedules at this time
                    </div>
                )}
                <RowForBackButton>
                    <Button onClick={this.handleBackButton}>BACK TO STOP</Button>
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
