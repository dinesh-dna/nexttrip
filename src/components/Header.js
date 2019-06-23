import React from 'react';
import {Row, Col } from 'react-bootstrap';
import tagLineImage from '../blue.png';
import icon from '../mob_logo.png';

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
                <Col sm={10} style={{height: '22px', borderRadius: '9px', marginTop: '3px',  backgroundColor: '#EBCA23'}} />
            </Row>
        </React.Fragment>
    )
}