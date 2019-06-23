import React from 'react';
import './index.css';
import {Col, Button, Form, FormGroup } from 'react-bootstrap';
import {connect} from 'react-redux';
import {getDirection} from '../../ducks/direction';
import {getRoutes} from '../../ducks/route';
import {getStops} from '../../ducks/stops';
import {getTimePointDeparture, getDepartureList} from '../../ducks/timePointDeparture';
import Dropdown from '../../components/Dropdowns';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  margin: 50px;
  height: 30px;
`;
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
     await this.props._getTimePointDeparture('NEXTTRIP_BASEURL',`${this.state.selectedRoute['Route']}/${this.state.selectedDirection['Value']}/${selectedStop['Value']}`);
     this.props.history.push('/nextTrip');
  };

  async handleStopEntry() {
    if(this.state.stopNumber){
      await this.props._getDepartureList('NEXTTRIP_BASEURL', this.state.stopNumber); 
      this.props.history.push('/nextTrip');
    }
    else{
      alert('Enter Stop number and Click a Button');
    }
  };

  render(){
  const { routes, direction, stopsStationList } = this.props;
  const {selectedRoute, selectedDirection, selectedStop, stopNumber} = this.state;
  return (
    <div >
      {routes.length > 0 ? (
        <Form style={{margin: '10%', padding: '20px', backgroundColor: '#F9F5F5'}}>
          <FormGroup >
              <Dropdown 
                list={routes} 
                selectedItem={selectedRoute} 
                handleChange={this.handleRouteChange} 
                displayText='Description' 
                keyValue='Route'
                label='Select Route' />
              {selectedRoute !== '' ? (
                <>
                <br />
                  <Dropdown 
                    list={direction} 
                    selectedItem={selectedDirection} 
                    handleChange={this.handleDirectionChange} 
                    displayText='Text' 
                    keyValue='Value'
                    label='Select Direction' />
                </>
              ) : null }
              {selectedDirection !== '' ? (
                <>
                <br />
                  <Dropdown 
                    list={stopsStationList} 
                    selectedItem={selectedStop} 
                    handleChange={this.handleStopChange} 
                    displayText='Text' 
                    keyValue='Value'
                    label='Select Stops/Station'/>
                </>
              ) : null }
          </FormGroup>
          <Col sm={{offset:4,span:4}}>
            <input type="number"
              value={stopNumber} 
              onKeyPress={event => {
                if (event.key === "Enter") {
                  this.handleStopEntry();
                }
              }}
              onChange={e => this.setState({stopNumber: e.target.value})}/>
            <StyledButton 
              onClick={this.handleStopEntry} 
              size="sm" 
              disabled={!stopNumber} >
                STOP NUMBER
            </StyledButton>
          </Col>
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
    _getDepartureList: (resourceType, id) => dispatch(getDepartureList(resourceType, id)),
    _getStops: (resourceType,id) => dispatch(getStops(resourceType,id)),
    _getTimePointDeparture: (resourceType,id) => dispatch(getTimePointDeparture(resourceType,id))
  }))(App);
