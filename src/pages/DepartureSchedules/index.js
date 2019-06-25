import React from 'react';
import {connect} from 'react-redux';
import {Button, Col} from 'react-bootstrap';
import Timing from './timing';
import DepartureTable from './table';
import {RowForBackButton} from './styles';
export class DepartureSchedules extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            direction: '',
            route: '',
            stopId: '',
            stops: ''
        }
    };

    componentDidMount() {
        if(Object.keys(this.props.location.state).length > 0) {
            let queryString = this.props.location.state;
            if(queryString && queryString['stopID']){
                this.setState({stopId: queryString['stopID']});
            } else if (queryString && queryString['route']) {
                this.setState({route: queryString['route']});
                this.setState({direction: queryString['direction']});
                this.setState({stops: queryString['stops']});
            }
        }
    };

    handleBackButton = () => {
        this.props.history.push('/');
    };

    render() {
    const {timePointDeparture, departure} = this.props;
    const {stopId, route, direction, stops} = this.state;
    return (
        <div>
            <div style={{fontSize: '12px', margin: '10px'}}>
                <span>{route} {direction} {stops} </span><br/>
                <span > Stop Number : {stopId} </span>
            </div>
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
