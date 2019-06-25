import React from 'react';
import {Row, Col } from 'react-bootstrap';
import tagLineImage from '../utils/blue.png';
import icon from '../utils/mob_logo.png';
import {HeaderCol} from '../utils/styles';

export function Header() {
    return (
        <React.Fragment>
            <Row>
                <img src={icon} alt="Metro Transit" />
            </Row>
            <Row>
                <Col sm={2}  style={{backgroundColor: '#ffffff'}}> 
                <img src={tagLineImage} alt=' Serving Minneapolis St Paul Area' />
                </Col> 
                <HeaderCol sm={10} />
            </Row>
        </React.Fragment>
    )
}