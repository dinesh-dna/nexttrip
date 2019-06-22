import React from 'react';
import {FormLabel, FormControl } from 'react-bootstrap';

class Dropdowns extends React.Component {

    handleChange = (e) => {
        this.props.handleChange(e);
    }

    render() {
        const { list, selectedItem, displayText, keyValue } = this.props;
        return (
                <div>
                    <FormControl as="select" value={selectedItem[`${displayText}`]} onChange={this.handleChange}> 
                        {list.map((eachItem) => {
                            return <option key={eachItem[keyValue]} > {eachItem[displayText]} </option>
                        })}
                    </FormControl>
                </div>
        )
    }
}

export default Dropdowns