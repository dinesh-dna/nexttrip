import React from 'react';
import './index.css';
import {Row, Col, Button, Container, Form, FormLabel, FormControl, FormGroup } from 'react-bootstrap';
import {connect} from 'react-redux';
import {getRoutes} from '../../ducks/route';
import {getDirection} from '../../ducks/direction';
import {getStops} from '../../ducks/stops';
import {getTimePointDeparture} from '../../ducks/timePointDeparture';
import icon from '../../mob_logo.png';
import Dropdown from '../../components/Dropdowns';
class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      selectedRoute: '',
      selectedDirection: '',
      selectedStop: '',
      stopNumber: ''
    }
    this.handleStopChange = this.handleStopChange.bind(this);
  }
  
  componentDidMount() {
    this.props._getRoutes('ROUTES');
  }

  handleRouteChange = (e) => {
    console.log('e', e);
    const selectedRoute = this.props.routes.find(eachRoute =>  eachRoute.Description === e.target.value)
    this.setState(function(){
      return {selectedRoute: selectedRoute}
   })
    this.props._getDirection('DIRECTION',selectedRoute['Route']);
  }

  handleDirectionChange = (e) => {
    const selectedDirection = this.props.direction.find(eachDirection =>  eachDirection.Text === e.target.value)
    this.setState(function(){
      return {selectedDirection: selectedDirection}
   });
    this.props._getStops('STOPS',`${this.state.selectedRoute['Route']}/${selectedDirection['Value']}`);
  };

  async handleStopChange(e) {
    const selectedStop = this.props.stopsStationList.find(eachStop => eachStop.Text === e.target.value);
    this.setState(function(){
      return {selectedStop: selectedStop}
    });
     await this.props._getTimePointDeparture('BASEURL',`${this.state.selectedRoute['Route']}/${this.state.selectedDirection['Value']}/${selectedStop['Value']}`);
     this.props.history.push('/departure');
  }

  render(){
  const { routes, direction, stopsStationList } = this.props;
  const {selectedRoute, selectedDirection, selectedStop, stopNumber} = this.state;
  return (
    <div >
      <Container>
          <img src={icon} alt="Metro Transit" />
          {/* <div className='d-flex flex-row'>
            <div style={{width: '20%',height: '20% ', backgroundColor: 'red'}}>
              </div>
              <div style={{width: '20%', backgroundColor: 'red'}}>
              </div>
            
          </div> */}
          <Row>
            <Col md={8} style={{height: '15px', backgroundColor: 'yellow'}} />
            <Col md={4} style={{height: '15px',backgroundColor: 'red'}} />
          </Row>
      </Container>
      {routes.length > 0 ? (
        <Form>
          <FormGroup>
              <FormLabel>Select Route </FormLabel>
              <Dropdown 
                list={routes} 
                selectedItem={selectedRoute} 
                handleChange={this.handleRouteChange} 
                displayText='Description' 
                keyValue='Route' />

              {selectedRoute !== '' ? (
                <>
                <br />
                  <FormLabel>Select Direction </FormLabel>
                  <Dropdown 
                    list={direction} 
                    selectedItem={selectedDirection} 
                    handleChange={this.handleDirectionChange} 
                    displayText='Text' 
                    keyValue='Value' />
                </>
              ) : null }
              {selectedDirection !== '' ? (
                <>
                <br />
                  <FormLabel>Select Stops/Station </FormLabel>
                  <Dropdown 
                    list={stopsStationList} 
                    selectedItem={selectedStop} 
                    handleChange={this.handleStopChange} 
                    displayText='Text' 
                    keyValue='Value'/>
                </>
              ) : null }
          </FormGroup>
          <hr />
          <input type="text" value={stopNumber} onChange={e => this.setState(e.target.value) }/>
          <Button onClick={this.handleStopEntry} >STOP NUMBER</Button>
        </Form>
      ) : <div> Loading Bus Routes .... </div>}
    </div>
  );
  }
}

export default connect(state => {
  const {routes, direction, stops} = state;
  
  const stopsStation = stops.map(eachstops => ({
    ...eachstops,
    Text: eachstops.Text.replace(/\s{1,}/g, ' '),
  }));

  const stopsStationList = stopsStation.map(eachstops => ({
    ...eachstops,
    Text: eachstops.Text.trimRight()
  }))

  return {
    routes,
    direction,
    stopsStationList
    };
  },
  dispatch => ({_getRoutes: resourceType => dispatch(getRoutes(resourceType)),
    _getDirection: (resourceType,id) => dispatch(getDirection(resourceType,id)),
    _getStops: (resourceType,id) => dispatch(getStops(resourceType,id)),
    _getTimePointDeparture: (resourceType,id) => dispatch(getTimePointDeparture(resourceType,id))
  }))(App);
