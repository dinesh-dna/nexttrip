import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Table} from 'react-bootstrap';
import moment from 'moment';
import Timing from './timing';
import DepartureTable from '../../components/Table';

class DepartureSchedules extends React.Component {
    render(){
        const {timePointDeparture} = this.props;
        return (
            <div>
                <Timing />
                { timePointDeparture ? 
                    <DepartureTable timePointDeparture={timePointDeparture} /> : (
                    <div>
                        No Schedule present at this time
                    </div>
                )}
            </div>
        )
    }
}

export default connect(state => {
    const {timePointDeparture} = state;
        return {
            timePointDeparture
        };
    },null)(DepartureSchedules);
