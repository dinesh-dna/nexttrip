import React from 'react';
import { FormControl, Row, Col } from 'react-bootstrap';

class Dropdowns extends React.Component {

    handleChange = (e) => {
        this.props.handleChange(e);
    }

    render() {
        const { list, selectedItem, displayText, keyValue, label, disabled, id } = this.props;
        return (
                <Row style={{ textAlign: 'center'}}>
                    <Col sm={{span:4}} >
                        <FormControl as="select" id={id}
                            value={selectedItem[`${displayText}`]} 
                                onChange={this.handleChange} 
                                    disabled={disabled}> 
                            <option>{label}</option>
                            {list && list.map((eachItem) => {
                                return <option key={eachItem[keyValue]} > {eachItem[displayText]} </option>
                            })}
                        </FormControl>
                    </Col>
                </Row>
        )
    }
}

export default Dropdowns;