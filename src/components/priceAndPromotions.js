import React from 'react';
import {Row, Col} from 'react-bootstrap';
export default class PriceAndPromotion extends React.Component {
    render() {
        return (
            <Row>
                <Col sm={6}>
                    <p>{this.props.price.formattedPriceValue}</p>
                    <p>{this.props.price.priceQualifier}</p>

                    <span style={{color: 'red'}}>
                        {this.props.promotions.map(promo => (
                            promo.Description.map(desc => (
                                <p key={desc}>{desc.shortDescription}</p>
                            ))
                        ))}
                    </span>
                </Col>
            </Row>
            )
    }
}