import React from 'react';
import { FormControl, Row, Col } from 'react-bootstrap';

class Dropdowns extends React.Component {

    handleChange = (e) => {
        this.props.handleChange(e);
    }

    render() {
        const { list, selectedItem, displayText, keyValue, label } = this.props;
        return (
                <Row style={{margin: '10px', textAlign: 'center'}}>
                    <Col sm={{span:2, offset: 2}}>
                        {/* <FormLabel>{label}</FormLabel> */}
                    </Col>
                    <Col sm={4}>
                        <FormControl as="select" value={selectedItem[`${displayText}`]} onChange={this.handleChange}> 
                            <option>{label}</option>

                            {list.map((eachItem) => {
                                return <option key={eachItem[keyValue]} > {eachItem[displayText]} </option>
                            })}
                        </FormControl>
                    </Col>
                </Row>
        )
    }
}

export default Dropdowns;