import React from 'react';
import { FormGroup } from 'react-bootstrap';
import {connect} from 'react-redux';
import {getDirection} from '../../ducks/direction';
import {getRoutes} from '../../ducks/route';
import {getStops} from '../../ducks/stops';
import {getTimePointDeparture, getDepartureList} from '../../ducks/timePointDeparture';
import Dropdown from '../../components/Dropdowns';
import {StyledForm, StyledLine, StyledButton, StyledInput} from './styles';

export class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      selectedRoute: '',
      selectedDirection: '',
      selectedStop: '',
      stopNumber: ''
    }
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

  handleStopChange = e => {
    const selectedStop = this.props.stopsStationList.find(eachStop => eachStop.Text === e.target.value);
    this.setState(function(){
      return {selectedStop: selectedStop}
    });
     this.props._getTimePointDeparture('NEXTTRIP_BASEURL',`${this.state.selectedRoute['Route']}/${this.state.selectedDirection['Value']}/${selectedStop['Value']}`);
     this.props.history.push('/nextTrip', 
      {route: this.state.selectedRoute.Description,
       direction: this.state.selectedDirection.Text,
       stops: selectedStop.Text});
  };

  handleStopEntry = () => {
    if(this.state.stopNumber !== undefined){
      this.props._getDepartureList('NEXTTRIP_BASEURL', this.state.stopNumber); 
      this.props.history.push('/nextTrip', {stopID: this.state.stopNumber});
    }
    else{
      alert('Please enter Stop number');
    }
  };

  render(){
  const { routes, direction, stopsStationList } = this.props;
  const {selectedRoute, selectedDirection, selectedStop, stopNumber} = this.state;
  return (
    <div >
      {routes.length > 0 ? (
        <StyledForm>
          <FormGroup >
              <Dropdown 
                id='routeDropDown'
                list={routes} 
                selectedItem={selectedRoute} 
                handleChange={this.handleRouteChange} 
                displayText='Description' 
                keyValue='Route'
                label='Select Route' />
                <>
                <br />
                  <Dropdown 
                    list={direction} 
                    selectedItem={selectedDirection} 
                    handleChange={this.handleDirectionChange} 
                    displayText='Text' 
                    keyValue='Value'
                    label='Select Direction'
                    disabled={!selectedRoute} />
                </>
                <>
                <br />
                  <Dropdown 
                    list={stopsStationList} 
                    selectedItem={selectedStop} 
                    handleChange={this.handleStopChange} 
                    displayText='Text' 
                    keyValue='Value'
                    label='Select Stops/Station'
                    disabled={!selectedDirection}/>
                </>
          </FormGroup>
          <StyledLine/>
            <StyledInput 
              id='txtstopNumber'
              type="number"
              value={stopNumber} 
              onKeyPress={event => {
                if (event.key === "Enter") {
                  this.handleStopEntry();
                }
              }}
              onChange={e => this.setState({stopNumber: e.target.value})}/>
            <StyledButton 
              id='stopNumber'
              onClick={this.handleStopEntry} 
              size="sm" 
              disabled={!stopNumber} >
                STOP NUMBER
            </StyledButton>
        </StyledForm>
      ) : <React.Fragment> Loading Bus Routes .... </React.Fragment>}
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
