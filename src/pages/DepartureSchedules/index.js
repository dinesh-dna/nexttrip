import React, {useState} from 'react';
import {connect} from 'react-redux';

function DepartureSchedules() {
    const [detail, setDetail] = useState("");
        return (
            <div>
                <input type="text" value={detail} onChange={e => setDetail(e.target.value) }/>
            </div>
        )
}

export default connect(state => {
    const {departure} = state;
    return {
      departure
      };
    },null)(DepartureSchedules);
