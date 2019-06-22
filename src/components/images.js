import React from 'react';
import {Image, Col, Figure, Row, Container} from 'react-bootstrap';
class Images extends React.Component {

    render() {
        return (
                <Row>
                    <Col sm={12}>
                        <h4>{this.props.description}</h4>
                        <Image src={this.props.primaryImage} />
                    </Col>
                    <Col sm={6}>
                        <Figure>
                            {this.props.alternateImages.map((list,index) => (
                                <Figure.Image 
                                    width={50} 
                                    height={50} 
                                    src={list.image}
                                    key={index}
                                    alt="Image not found"
                                    onClick={() => this.props.onAltImageClick(list.image)}
                                    style={{marginRight: '0%' }}
                                />
                            ))}
                        </Figure>
                    </Col>
                </Row>
        )
    }
}

export default Images;