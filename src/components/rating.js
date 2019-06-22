import React from 'react';
import {Row, Col} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import '../pages/Home';

class Rating extends React.Component {
    render() {
        return (
            <React.Fragment>
            <Row>
                <Col sm={6}>
                    <div className='inline-child-a'>
                        <StarRatingComponent 
                            name={'Overall Rating'}
                            value={this.props.overallRating}
                            starCount={5} 
                            starColor={'red'}
                            emptyStarColor={'grey'}
                            />
                    </div>
                    <div className='inline-child-b'>
                        <h5>Overall </h5>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={5} style={{  backgroundColor: 'rgb(235, 231, 231)'}}>
                    <div className='inline-childwithBorder-a'>
                        <h5>Pro </h5>
                        <hr />
                        <StarRatingComponent 
                            name={'Overall Rating'}
                            value={parseInt(this.props.pro.overallRating)}
                            starCount={5} 
                            starColor={'red'}
                            emptyStarColor={'grey'}
                            />
                        <h5>{this.props.pro.title}</h5>
                        <h6>{this.props.pro.review}</h6>
                        <h5>{this.props.pro.screenName}</h5>
                        <h5>{this.props.pro.datePosted}</h5>
                    </div> 
                    <div className='inline-childwithBorder-b'>
                        <h5>Con </h5>
                        <hr/>
                        <StarRatingComponent 
                            name={'Overall Rating'}
                            value={parseInt(this.props.con.overallRating)}
                            starCount={5} 
                            starColor={'red'}
                            emptyStarColor={'grey'}
                            />
                        <h5>{this.props.con.title}</h5>
                        <h6>{this.props.con.review}</h6>
                        <h5>{this.props.con.screenName}</h5>
                        <h5>{this.props.con.datePosted}</h5>
                    </div>               
                </Col>
            </Row>
            </React.Fragment>
        );
    }
}

export default Rating;